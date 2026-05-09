import { useMotionValue, useTransform, motion } from 'framer-motion';
import React, { useLayoutEffect, useRef, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import withLocale from './withLocale';
import style from './style.module.scss';

const MIN_SCALE = 0.7;
const MAX_SCALE = 1;

const TimelineItem = ({ item, galleryId }) => {
  const itemRef = useRef(null);
  const scaleProgress = useMotionValue(MIN_SCALE);

  useLayoutEffect(() => {
    if (!itemRef.current) return;

    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const updateScale = () => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const midpoint = viewportH * 0.5;
      const itemCenter = rect.top + rect.height * 0.5;
      const distRatio = Math.min(Math.abs(midpoint - itemCenter) / (viewportH * 0.5), 1);
      const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * (1 - distRatio);
      scaleProgress.set(scale);
    };

    const observer = new IntersectionObserver(updateScale, { threshold: thresholds });
    observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [scaleProgress]);

  const scaleTransform = useTransform(scaleProgress, [MIN_SCALE, MAX_SCALE], [MIN_SCALE, MAX_SCALE]);

  const { title, content, images, extra } = item;

  return (
    <div ref={itemRef} className={style.item}>
      <div className={style.sticky}>
        <div className={style.dotWrapper}>
          <div className={style.dot} />
        </div>
        <motion.h3 className={style.itemTitleDesktop} style={{ scale: scaleTransform }}>
          {title}
        </motion.h3>
      </div>

      <div className={style.content}>
        <h3 className={style.itemTitleMobile}>{title}</h3>
        {content && <p className={style.contentText}>{content}</p>}
        {images && images.length > 0 && (
          <div className={`${style.imageGrid} pswp-gallery`} data-count={images.length > 4 ? 4 : images.length} data-gallery-id={galleryId}>
            {images.slice(0, 4).map((img, index) => {
              const src = typeof img === 'string' ? img : img.src;
              const alt = typeof img === 'string' ? '' : img.alt || '';
              const width = typeof img === 'string' ? 1200 : img.width || 1200;
              const height = typeof img === 'string' ? 800 : img.height || 800;
              return (
                <a key={index} className={style.imageLink} href={src} target="_blank" data-pswp-width={width} data-pswp-height={height} data-cropped="true" onClick={e => e.preventDefault()}>
                  <img src={src} alt={alt} className={style.image} loading="lazy" />
                </a>
              );
            })}
          </div>
        )}
        {extra && <div className={style.extra}>{extra}</div>}
      </div>
    </div>
  );
};

const TimelineInner = ({ data, title, description }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const scrollProgress = useMotionValue(0);
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
      scrollProgress.set(progress);
    };

    const observer = new IntersectionObserver(updateProgress, {
      threshold: thresholds
    });

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [data, scrollProgress]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const galleryEls = ref.current.querySelectorAll('.pswp-gallery');
    if (galleryEls.length === 0) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: `[data-gallery-id="${galleryId}"]`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      mainClass: style.pswpRoot,
      padding: { top: 40, bottom: 40, left: 20, right: 20 },
      zoom: true,
      closeOnVerticalDrag: true
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, [data, galleryId]);

  const heightTransform = useTransform(scrollProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollProgress, [0, 0.1], [0, 1]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        {title && <h2 className={style.headerTitle}>{title}</h2>}
        {description && <p className={style.headerDesc}>{description}</p>}
      </div>

      <div ref={ref} className={style.body}>
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} galleryId={galleryId} />
        ))}

        <div style={{ height: height + 'px' }} className={style.track}>
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform
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
