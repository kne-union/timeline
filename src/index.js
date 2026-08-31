import React, { useLayoutEffect, useRef, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { MOBILE_BREAKPOINT } from '@kne/responsive-utils';
import withLocale from './withLocale';
import style from './style.module.scss';

const MIN_SCALE = 0.7;
const MAX_SCALE = 1;

const ImageLink = ({ img }) => {
  const linkRef = useRef(null);
  const src = typeof img === 'string' ? img : img.src;
  const alt = typeof img === 'string' ? '' : img.alt || '';
  const hasProvidedSize = typeof img !== 'string' && img.width && img.height;
  const fallbackWidth = typeof img === 'string' ? 1200 : img.width || 1200;
  const fallbackHeight = typeof img === 'string' ? 800 : img.height || 800;
  const [dims, setDims] = useState({ width: fallbackWidth, height: fallbackHeight });

  const handleImageLoad = e => {
    if (hasProvidedSize) return;
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalWidth <= 0 || naturalHeight <= 0) return;
    setDims({ width: naturalWidth, height: naturalHeight });
    if (linkRef.current) {
      linkRef.current.setAttribute('data-pswp-width', String(naturalWidth));
      linkRef.current.setAttribute('data-pswp-height', String(naturalHeight));
    }
  };

  const width = hasProvidedSize ? img.width : dims.width;
  const height = hasProvidedSize ? img.height : dims.height;

  return (
    <a ref={linkRef} className={style.imageLink} href={src} data-pswp-width={width} data-pswp-height={height} data-cropped="true" onClick={e => e.preventDefault()}>
      <img src={src} alt={alt} className={style.image} loading="lazy" decoding="async" onLoad={handleImageLoad} />
    </a>
  );
};

const TimelineItem = ({ item, galleryId }) => {
  const itemRef = useRef(null);
  const [scale, setScale] = useState(MIN_SCALE);

  useLayoutEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const updateScale = () => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const midpoint = viewportH * 0.5;
      const itemCenter = rect.top + rect.height * 0.5;
      const distRatio = Math.min(Math.abs(midpoint - itemCenter) / (viewportH * 0.5), 1);
      setScale(MIN_SCALE + (MAX_SCALE - MIN_SCALE) * (1 - distRatio));
    };

    const observer = new IntersectionObserver(updateScale, { threshold: thresholds });
    observer.observe(el);
    updateScale();
    return () => observer.disconnect();
  }, []);

  const { title, content, images, extra } = item;

  return (
    <div ref={itemRef} className={style.item}>
      <div className={style.sticky}>
        <div className={style.dotWrapper}>
          <div className={style.dot} />
        </div>
        <h3 className={style.itemTitleMobile}>{title}</h3>
        <h3 className={style.itemTitleDesktop} style={{ transform: `scale(${scale})` }}>
          {title}
        </h3>
      </div>

      <div className={style.content}>
        {content && <p className={style.contentText}>{content}</p>}
        {images && images.length > 0 && (
          <div className={`${style.imageGrid} pswp-gallery`} data-count={images.length > 4 ? 4 : images.length} data-gallery-id={galleryId}>
            {images.slice(0, 4).map((img, index) => (
              <ImageLink key={index} img={img} />
            ))}
          </div>
        )}
        {extra && <div className={style.extra}>{extra}</div>}
      </div>
    </div>
  );
};

const TimelineInner = ({ data, title, description, compact = false }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const galleryId = useRef(`pswp-gallery-${Math.random().toString(36).substr(2, 9)}`).current;

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };
    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => resizeObserver.disconnect();
  }, [data]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(`.${style.item}`);
    if (items.length === 0) return;

    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const updateProgress = () => {
      const bodyRect = ref.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const midpoint = viewportH * 0.5;
      const scrolledInBody = midpoint - bodyRect.top;
      const progress = Math.min(Math.max(scrolledInBody / bodyRect.height, 0), 1);
      setScrollProgress(progress);
    };

    const observer = new IntersectionObserver(updateProgress, {
      threshold: thresholds
    });

    items.forEach(item => observer.observe(item));
    updateProgress();
    return () => observer.disconnect();
  }, [data]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const galleryEls = ref.current.querySelectorAll('.pswp-gallery');
    if (galleryEls.length === 0) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: `[data-gallery-id="${galleryId}"]`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      mainClass: style.pswpRoot,
      paddingFn: viewportSize => {
        const isMobile = viewportSize.x < MOBILE_BREAKPOINT;
        return {
          top: isMobile ? 16 : 40,
          bottom: isMobile ? 16 : 40,
          left: isMobile ? 12 : 20,
          right: isMobile ? 12 : 20
        };
      },
      zoom: true,
      closeOnVerticalDrag: true,
      imageClickAction: 'zoom-or-close',
      tapAction: 'toggle-controls'
    });

    lightbox.addFilter('itemData', itemData => {
      const img = itemData.element?.querySelector('img');
      if (!img?.naturalWidth || !img?.naturalHeight) return itemData;
      return {
        ...itemData,
        w: img.naturalWidth,
        h: img.naturalHeight,
        thumbCropped: true
      };
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, [data, galleryId]);

  const progressHeight = scrollProgress * height;
  const progressOpacity = scrollProgress <= 0 ? 0 : scrollProgress >= 0.1 ? 1 : scrollProgress / 0.1;

  return (
    <div className={`${style.container}${compact ? ` ${style.compact}` : ''}`}>
      <div className={style.header}>
        {title && <h2 className={style.headerTitle}>{title}</h2>}
        {description && <p className={style.headerDesc}>{description}</p>}
      </div>

      <div ref={ref} className={style.body}>
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} galleryId={galleryId} />
        ))}

        <div style={{ height: height + 'px' }} className={style.track}>
          <div
            style={{
              height: progressHeight,
              opacity: progressOpacity
            }}
            className={style.progress}
          />
        </div>
      </div>
    </div>
  );
};

const Timeline = withLocale(TimelineInner);

export default Timeline;
