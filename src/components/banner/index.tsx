import tw from 'tailwind-styled-components';

import { BANNER_TRINKETS } from '@/constants/trinket';

import Trinket from '../common/Trinket';

const Banner = () => {
  return (
    <BannerContainer id="home">
      <TrinketsContainer>
        {BANNER_TRINKETS.map((trinket, idx) => (
          <Trinket key={idx} {...trinket} />
        ))}
      </TrinketsContainer>
      <BannerHeading>
        Pesto&apos;s <br />
        Pandora
      </BannerHeading>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = tw.section`
  h-screen
  w-full
`;

const TrinketsContainer = tw.div`
  relative
  top-1/2
  -translate-y-1/2
  lg:h-[700px]
  md:h-[1024px]
  h-[750px]
`;

const BannerHeading = tw.h1`
  absolute
  top-1/2
  left-1/2
  w-[80%]
  -translate-x-1/2
  -translate-y-1/2
  text-center
  font-mono
  text-6xl
  tracking-tighter
  sm:text-8xl
  md:w-max
`;
