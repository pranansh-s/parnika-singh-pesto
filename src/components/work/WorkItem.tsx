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
      style={{ gridTemplateColumns: `20vw repeat(${experience.length}, minmax(0, 1fr))` }}
    >
      <Header>
        <WorkHeading>{name} /</WorkHeading>
        {experience.map((exp, idx) => (
          <Experience href={exp.link} key={idx}>
            {exp.name}
          </Experience>
        ))}
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
  uppercase
`;

const Divider = tw.hr`
  absolute
  left-0
  w-screen
`;

const PosterContainer = tw.div`
  col-span-full
  col-start-2
  grid
  h-[500px]
  grid-cols-subgrid
  gap-0
  overflow-clip
`;

const ExperiencePosters = tw.div`
  grid
`;

const Poster = tw(Image)`
  cursor-pointer
  h-full
  w-full
  object-cover
  aspect-video
  transition-opacity
  hover:opacity-80
`;

const AboutText = tw.p`
  pr-6
  text-left
  text-xl
  text-white/80
`;

const Experience = tw(Link)`
  p-sm
  w-max
  cursor-pointer
  text-xl
  font-bold
  uppercase
  transition-colors
  hover:text-blue-400
`;
