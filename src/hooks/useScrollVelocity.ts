import { useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'motion/react';

const useScrollVelocity = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });

  return { baseX, velocityFactor };
};

export default useScrollVelocity;
