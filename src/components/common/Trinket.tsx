'use client';

import { useState } from 'react';
import Image from 'next/image';

import { TrinketItem } from '@/types';
import { motion } from 'motion/react';
import tw from 'tailwind-styled-components';

type ITrinketProps = TrinketItem & {
  key?: number;
};

const Trinket: React.FC<ITrinketProps> = ({ image, defaultTop, defaultLeft, size, rotate, key }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  return (
    <StyledTrinketImage
      drag
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      $isDragging={isDragging}
      src={image}
      width={700}
      height={700}
      priority
      style={{ scale: size, top: `${defaultTop}%`, left: `${defaultLeft}%`, rotate: `${rotate}deg` }}
      alt={`trinket-${key ?? image}`}
    />
  );
};

export default Trinket;

const StyledTrinketImage = tw(motion.create(Image))<{ $isDragging: boolean }>`
  absolute
  select-none
  touch-none
  cursor-grab
  will-change-transform
  ${({ $isDragging }) => ($isDragging ? 'cursor-grabbing' : 'cursor-grab')}
  -translate-x-1/2
  -translate-y-1/2
`;
