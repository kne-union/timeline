import { useMotionValue, useTransform, motion } from 'framer-motion';
import React, { useLayoutEffect, useRef, useState } from 'react';
import withLocale from './withLocale';
import style from './style.module.scss';

const MIN_SCALE = 0.7;
const MAX_SCALE = 1;

const TimelineItem = ({ item }) => {
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
      // 距离视口中线的比例，0=正中间，1=最远
      const distRatio = Math.min(Math.abs(midpoint - itemCenter) / (viewportH * 0.5), 1);
      // 越近越大，越远越小
      const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * (1 - distRatio);
      scaleProgress.set(scale);
    };

    const observer = new IntersectionObserver(updateScale, { threshold: thresholds });
    observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [scaleProgress]);

  const scaleTransform = useTransform(scaleProgress, [MIN_SCALE, MAX_SCALE], [MIN_SCALE, MAX_SCALE]);

  return (
    <div ref={itemRef} className={style.item}>
      <div className={style.sticky}>
        <div className={style.dotWrapper}>
          <div className={style.dot} />
        </div>
        <motion.h3 className={style.itemTitleDesktop} style={{ scale: scaleTransform }}>
          {item.title}
        </motion.h3>
      </div>

      <div className={style.content}>
        <h3 className={style.itemTitleMobile}>{item.title}</h3>
        {item.content}
      </div>
    </div>
  );
};

const TimelineInner = ({ data, title, description }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const scrollProgress = useMotionValue(0);

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
          <TimelineItem key={index} item={item} />
        ))}

        {/* 灰色轨道线 + 彩虹进度线，放在 body 内部，穿过圆点 */}
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
