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
  relative
  h-[500px]
  max-h-screen
  w-full
  max-w-[2400px]
  sm:h-[750px]
  md:h-[1024px]
  lg:h-[750px]
`;

const TrinketsContainer = tw.div`
  h-full
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
