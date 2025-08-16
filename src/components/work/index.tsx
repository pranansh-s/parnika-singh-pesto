import tw from 'tailwind-styled-components';

import WorkItem from '@/components/work/WorkItem';

import { WORK_ITEMS } from '@/constants/work-block';

const Work = () => {
  return (
    <WorkContainer id="work">
      {WORK_ITEMS.map((item, idx) => (
        <WorkItem key={idx} {...item} />
      ))}
    </WorkContainer>
  );
};

export default Work;

const WorkContainer = tw.section`
  flex
  max-w-[2400px]
  flex-col
  gap-[10rem]
`;
