import tw from 'tailwind-styled-components';

import { JOB_TAGS, WORK_TAGS } from '@/constants/tags';

import HCarousel from '../common/HCarousel';
import Details from './Details';

const About = () => {
  return (
    <AboutContainer id="about">
      <HCarousel items={JOB_TAGS} />
      <Details />
      <HCarousel items={WORK_TAGS} type="image" dir="right" />
    </AboutContainer>
  );
};

export default About;

const AboutContainer = tw.section`
  mb-36
  flex
  w-full
  flex-col
  items-center
  space-y-32
`;
