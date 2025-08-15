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
        <Title>about me</Title>
        Pesto aka <b>Parnika</b>, is a brand strategist, creative tinkerer and copywriter based out of Bombay with over
        8 years of experience in advertising & marketing across fashion, lifestyle and crypto brands.
      </Content>
      <Trinket
        image={'/trinkets/trinket-12.webp'}
        rotate={-20}
        size={0.3}
        mobile={true}
        defaultTop={[10, 5]}
        defaultLeft={[5, 10]}
      />
    </DetailsContainer>
  );
};

export default Details;

const DetailsContainer = tw.div`
  relative
  flex
  w-[90vw]
  max-w-[1000px]
  flex-col
  items-center
  gap-0
  font-sans
  lg:flex-row
  lg:gap-10
  xl:gap-24
`;

const Content = tw.div`
  text-secondary/80
  text-center
  text-xl
  leading-8
  lg:text-left
  lg:text-2xl
  lg:leading-12
`;

const Title = tw.h2`
  text-secondary
  font-mono
  text-6xl
  leading-[9rem]
  font-black
  lowercase
  lg:text-7xl
`;
