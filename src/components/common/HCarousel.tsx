'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { motion, useAnimationFrame, useTransform, wrap } from 'motion/react';
import tw from 'tailwind-styled-components';

import useScrollVelocity from '@/hooks/useScrollVelocity';

type ICarouselProps = {
  items: string[];
  type?: 'text' | 'image';
  dir?: 'left' | 'right';
};

const HCarousel: React.FC<ICarouselProps> = ({ items, type = 'text', dir = 'left' }) => {
  const { baseX, velocityFactor } = useScrollVelocity();
  const directionFactor = useRef<number>(dir === 'left' ? 1 : -1);
  const x = useTransform(baseX, v => `${wrap(0, -50 + (type === 'image' ? -50 : 0), v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * 1.5 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = dir === 'left' ? -1 : 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = dir === 'left' ? 1 : -1;
    }

    if (dir === 'left') {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
    } else {
      moveBy -= directionFactor.current * moveBy * velocityFactor.get();
    }

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <CarouselContainer>
      <Slider style={{ x }} $isText={type === 'text'}>
        {items
          .concat(items)
          .concat(items)
          .concat(items)
          .map((tag, idx) =>
            type === 'text' ? (
              <CarouselItem key={idx}>|&nbsp;&nbsp;{tag}&nbsp;&nbsp;</CarouselItem>
            ) : (
              <CarouselImage width={100} height={100} key={idx} src={tag} alt={`tool-${idx}`} />
            )
          )}
      </Slider>
    </CarouselContainer>
  );
};

export default HCarousel;

const CarouselContainer = tw.div`
  relative
  w-full
  max-w-[2400px]
  overflow-x-clip
`;

const Slider = tw(motion.div)<{ $isText: boolean }>`
  flex
  absolute
  ${({ $isText }) => ($isText ? 'gap-0 bg-secondary' : 'md:gap-[48px] gap-[10px]')}
  items-center
  will-change-transform
`;

const CarouselItem = tw.pre`
  text-primary
  py-3
  font-sans
  text-2xl
  md:text-3xl
  font-semibold
  uppercase
  lg:text-4xl
`;

const CarouselImage = tw(Image)`
  w-auto
  md:h-[100px]
  sm:h-[75px]
  h-[50px]
  md:mx-12
  mx-8
`;
