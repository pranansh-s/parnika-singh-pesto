'use client';

import { motion } from 'motion/react';
import tw from 'tailwind-styled-components';

import { TOOLS_TAGS } from '@/constants/tags';

import HCarousel from '../common/HCarousel';

const Tools = () => {
  return (
    <ToolsContainer>
      <Title initial={{ scale: 0.75 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
        Tools I Love ❤️
      </Title>
      <HCarousel type="image" items={TOOLS_TAGS} />
    </ToolsContainer>
  );
};

export default Tools;

const Title = tw(motion.h2)`
  absolute
  xl:tracking-[3rem]
  lg:tracking-wider
  tracking-normal
  left-1/2
  translate-y-1/2
  sm:translate-y-0
  -translate-x-1/2
  font-mono
  text-6xl
  sm:text-8xl
  font-bold
  uppercase
  md:text-left
  md:text-9xl
  whitespace-nowrap
  text-white/60
`;

const ToolsContainer = tw.div`
  flex
  w-full
  flex-col
  gap-24
`;
