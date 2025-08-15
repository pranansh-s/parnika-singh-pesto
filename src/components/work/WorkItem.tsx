'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { WorkBlock } from '@/types';
import { motion } from 'motion/react';
import tw from 'tailwind-styled-components';

type IWorkItemProps = WorkBlock;

const WorkItem: React.FC<IWorkItemProps> = ({ name, descrp, experience }) => {
  const router = useRouter();

  return (
    <WorkItemContainer
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="work-item"
      style={{ gridTemplateColumns: `20vw repeat(${experience.length}, minmax(0, 1fr))` }}
    >
      <Header>
        <WorkHeading>{name} /</WorkHeading>
        {experience.map(
          (exp, idx) =>
            exp.name && (
              <Experience href={exp.link} key={idx}>
                {exp.name}
              </Experience>
            )
        )}
        <Divider />
      </Header>
      <AboutText>{descrp}</AboutText>
      <PosterContainer>
        {experience.map((exp, expIdx) => (
          <ExperiencePosters onClick={() => router.push(exp.link)} key={expIdx}>
            {exp.posters.map((poster, posterIdx) => (
              <Poster
                key={`${expIdx}/${posterIdx}`}
                src={poster}
                width={500}
                height={500}
                alt={`poster-${expIdx}/${posterIdx}`}
                loading="lazy"
              />
            ))}
          </ExperiencePosters>
        ))}
      </PosterContainer>
    </WorkItemContainer>
  );
};

export default WorkItem;

const WorkItemContainer = tw(motion.div)`
  gap-y-lg
  grid
  font-sans
`;

const Header = tw.header`
  col-span-full
  grid
  grid-cols-subgrid
  items-end
`;

const WorkHeading = tw.h3`
  py-sm
  text-2xl
  font-bold
  tracking-[0.5rem]
  text-nowrap
  uppercase
  xl:text-wrap
`;

const Divider = tw.hr`
  absolute
  left-0
  w-screen
`;

const PosterContainer = tw.div`
  col-span-full
  grid
  h-full
  grid-cols-subgrid
  gap-0
  overflow-clip
  xl:col-start-2
`;

const ExperiencePosters = tw.div`
  flex
  flex-wrap
`;

const Poster = tw(Image)`
  cursor-pointer
  w-full
  object-cover
  transition-opacity
  hover:opacity-80
`;

const AboutText = tw.p`
  text-secondary/80
  mb-10
  w-screen
  pr-6
  text-left
  text-xl
  xl:mb-0
  xl:w-full
`;

const Experience = tw(Link)`
  p-sm
  w-max
  cursor-pointer
  2xl:text-lg
  text-base
  font-bold
  uppercase
  transition-colors
  hover:text-blue-400
  xl:block
  hidden
`;
