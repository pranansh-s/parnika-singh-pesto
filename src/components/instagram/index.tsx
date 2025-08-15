'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import { INSTAGRAM_EMBEDS } from '@/constants';
import { motion } from 'framer-motion';
import { InstagramEmbed } from 'react-social-media-embed';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const InstagramCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(4);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === Math.ceil(INSTAGRAM_EMBEDS.length / itemsPerView - 1) ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;

      if (width < 640) setItemsPerView(1);
      else if (width < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  return (
    <CarouselContainer ref={carouselRef}>
      <Title>Playground</Title>
      <Slider animate={{ x: -currentIndex * (carouselRef.current ? carouselRef.current.offsetWidth : 0) }} transition={{ duration: 0.7 }}>
        {INSTAGRAM_EMBEDS.map((postUrl, idx) => (
          <Embed style={{ width: (carouselRef.current ? carouselRef.current.offsetWidth : 0) / itemsPerView }} key={idx} url={postUrl} />
        ))}
        <ViewMore href="https://www.instagram.com/pestomessto" target='_blank'>
          <span style={{ writingMode: 'vertical-rl' }} className='text-shadow-lg mr-16 md:mr-24'>Read More</span>
        </ViewMore>
      </Slider>
      <Controls>
        <NavButton onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </NavButton>

        <NavButton onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </NavButton>
      </Controls>
    </CarouselContainer>
  );
};

export default InstagramCarousel;

const CarouselContainer = tw.div`
  relative
  w-screen
  space-y-12
  overflow-clip
  md:w-full
`;

const Title = tw.h2`
  mx-auto
  w-max
  font-mono
  text-6xl
  font-bold
  lg:text-7xl
`;

const ViewMore = tw(Link)`
  from-secondary
  h-screen
  max-h-[740px]
  md:min-w-[250px]
  min-w-[150px]
  -translate-x-full
  flex
  justify-end
  items-center
  bg-gradient-to-l
  to-transparent
  font-sans
  text-4xl
  font-black
  text-black
`;

const Embed = tw(InstagramEmbed)`
  max-w-screen
  w-full
  md:pr-12
  flex-shrink-0
`;

const Slider = tw(motion.div)`
  flex
  overflow-y-clip
  will-change-transform
`;

const Controls = tw.div`
  absolute
  top-1/2
  pointer-events-none
  flex
  w-full
  translate-y-24
  justify-between
  px-3
  md:px-5
`;

const NavButton = tw.button`
  pointer-events-auto
  bg-secondary
  text-primary
  aspect-square
  h-16
  cursor-pointer
  rounded-full
  transition-opacity
  hover:opacity-60
  md:h-12
`;
