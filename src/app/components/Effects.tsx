import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  duration?: number;
};

export function Reveal({ children, delay = 0, distance = 24, duration = 0.55 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

type CountUpProps = {
  to: number;
  duration?: number;
};

export function CountUp({ to, duration = 1.15 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const animateValue = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(eased * to));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animateValue);
      }
    };

    frame = window.requestAnimationFrame(animateValue);
    return () => window.cancelAnimationFrame(frame);
  }, [duration, isInView, prefersReducedMotion, to]);

  return <span ref={ref}>{value}</span>;
}
