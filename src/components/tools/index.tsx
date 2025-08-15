'use client';

import { motion } from 'motion/react';
import tw from 'tailwind-styled-components';

import { TOOLS_TAGS } from '@/constants/tags';

import HCarousel from '../common/HCarousel';

const Tools = () => {
  return (
    <ToolsContainer id="tools">
      <motion.h2 initial={{ scale: 0.75 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
        Tools I ❤️
      </motion.h2>
      <HCarousel type="image" items={TOOLS_TAGS} />
    </ToolsContainer>
  );
};

export default Tools;

const ToolsContainer = tw.section`
  flex
  items-center
  w-full
  flex-col
  gap-16
  lg:mb-24
  mb-48
`;
