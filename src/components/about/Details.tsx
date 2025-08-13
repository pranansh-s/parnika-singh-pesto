'use client';

import Image from 'next/image';

import tw from 'tailwind-styled-components';

import me from '@/../public/me.webp';
import Trinket from '../common/Trinket';

const Details = () => {
  return (
    <DetailsContainer>
      <Image width={400} height={400} src={me} alt="parnika-singh" />
      <Content>
        <Title>Pesto</Title>
        aka <b>Parnika</b>, is a brand strategist, creative tinkerer and copywriter based out of Bombay with over 8
        years of experience in advertising & marketing across fashion, lifestyle and crypto brands.
      </Content>
      <Trinket image={'/trinkets/trinket-12.png'} rotate={-20} size={0.45} defaultTop={20} defaultLeft={5} />
    </DetailsContainer>
  );
};

export default Details;

const DetailsContainer = tw.div`
  relative
  flex
  w-[95vw]
  max-w-[1000px]
  flex-col
  items-center
  justify-center
  gap-0
  lg:flex-row
  lg:gap-10
  xl:gap-24
`;

const Content = tw.div`
  text-center
  text-xl
  leading-8
  text-white/80
  lg:text-left
  lg:text-3xl
  lg:leading-16
`;

const Title = tw.h3`
  text-5xl
  leading-[7rem]
  text-white
  font-black
  lowercase
  lg:text-6xl
`;
