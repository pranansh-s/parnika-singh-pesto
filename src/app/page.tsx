import tw from 'tailwind-styled-components';

import About from '@/components/about';
import Banner from '@/components/banner';
import Contact from '@/components/contact';
import InstagramCarousel from '@/components/instagram';
import Tools from '@/components/tools';
import Work from '@/components/work';

export default function HomePage() {
  return (
    <HomeContainer>
      <Banner />
      <About />
      <Work />
      <Tools />
      <Contact />
      <InstagramCarousel />
    </HomeContainer>
  );
}

const HomeContainer = tw.div`
  flex
  w-full
  flex-col
  items-center
  gap-24
  lg:gap-36
`;
