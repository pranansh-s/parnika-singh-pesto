import { TOOLS } from '@/constants';
import tw from 'tailwind-styled-components';

import About from '@/components/about';
import Banner from '@/components/banner';
import HCarousel from '@/components/common/HCarousel';
import Contact from '@/components/contact';
import Work from '@/components/work';

export default function HomePage() {
  return (
    <HomeContainer>
      <Banner />
      <About />
      <Work />
      <HCarousel type="image" items={TOOLS} />
      <Contact />
    </HomeContainer>
  );
}

const HomeContainer = tw.div`
  flex
  w-full
  max-w-[2400px]
  flex-col
  items-center
  gap-36
`;

// INSTA_FEED
