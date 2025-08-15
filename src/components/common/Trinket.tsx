'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { TrinketItem } from '@/types';
import { motion } from 'motion/react';
import tw from 'tailwind-styled-components';

type ITrinketProps = TrinketItem & {
  key?: number;
};

const Trinket: React.FC<ITrinketProps> = ({ image, defaultTop, defaultLeft, size, rotate, mobile, key }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      if (width < 768) setIsMobileView(true);
      else setIsMobileView(false);
    };

    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    (!isMobileView || mobile) && (
      <StyledTrinketImage
        drag
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        $isDragging={isDragging}
        src={image}
        width={400}
        height={400}
        priority
        style={{
          scale: size - (isMobileView ? 0.05 : 0),
          top: `${isMobileView ? defaultTop[1] : defaultTop[0]}%`,
          left: `${isMobileView ? defaultLeft[1] : defaultLeft[0]}%`,
          rotate: `${rotate}deg`,
        }}
        alt={`trinket-${key ?? image}`}
      />
    )
  );
};

export default Trinket;

const StyledTrinketImage = tw(motion.create(Image))<{ $isDragging: boolean }>`
  absolute
  select-none
  touch-none
  cursor-grab
  aspect-auto
  2xl:w-[650px]
  w-[500px]
  will-change-transform
  ${({ $isDragging }) => ($isDragging ? 'cursor-grabbing z-[100]' : 'cursor-grab')}
  -translate-x-1/2
  -translate-y-1/2
`;
