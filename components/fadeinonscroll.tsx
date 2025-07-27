'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

type FadeInOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  duration?: number;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
};

export default function FadeInOnScroll({
  children,
  className,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  threshold = 0.2,
  triggerOnce = true,
}: FadeInOnScrollProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce, threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const offsetMap = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  const offset = offsetMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
