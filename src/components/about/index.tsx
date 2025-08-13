import tw from 'tailwind-styled-components';

import { JOB_TAGS, WORK_TAGS } from '@/constants/tags';

import HCarousel from '../common/HCarousel';
import Details from './Details';

const About = () => {
  return (
    <AboutContainer>
      <HCarousel items={JOB_TAGS} />
      <Details />
      <HCarousel items={WORK_TAGS} dir="right" />
    </AboutContainer>
  );
};

export default About;

const AboutContainer = tw.section`
  flex
  flex-col
  items-center
  space-y-16
`;
