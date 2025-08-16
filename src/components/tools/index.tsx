'use client';

import { motion } from 'motion/react';
import tw from 'tailwind-styled-components';

import { TOOLS_TAGS } from '@/constants/tags';

import HCarousel from '../common/HCarousel';

const Tools = () => {
  return (
    <ToolsContainer id="tools">
      <motion.h2 className='md:!text-6xl !text-4xl' initial={{ scale: 0.75 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
        Tools I ❤️
      </motion.h2>
      <HCarousel type="image" items={TOOLS_TAGS} />
    </ToolsContainer>
  );
};

export default Tools;

const ToolsContainer = tw.section`
flex
w-full
flex-col
items-center
gap-16
`;
