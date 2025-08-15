'use client';

import { motion } from 'motion/react';
import tw from 'tailwind-styled-components';

import { TOOLS_TAGS } from '@/constants/tags';

import HCarousel from '../common/HCarousel';

const Tools = () => {
  return (
    <ToolsContainer id="tools">
      <Title initial={{ scale: 0.75 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
        Tools I ❤️
      </Title>
      <HCarousel type="image" items={TOOLS_TAGS} />
    </ToolsContainer>
  );
};

export default Tools;

const Title = tw(motion.h2)`
  font-mono
  mx-auto
  text-6xl
  lg:text-7xl
  font-bold
  uppercase
  md:text-left
  whitespace-nowrap
  text-secondary
`;

const ToolsContainer = tw.section`
  flex
  items-center
  w-full
  flex-col
  gap-16
  mb-48
`;
