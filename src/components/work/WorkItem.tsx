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
            {exp.name && (
              <Label initial={{ opacity: 0.4 }} whileInView={{ opacity: 0.8 }} transition={{ delay: 0.3 }}>
                {exp.name}
              </Label>
            )}
          </ExperiencePosters>
        ))}
      </PosterContainer>
    </WorkItemContainer>
  );
};

export default WorkItem;

const WorkItemContainer = tw(motion.div)`
  relative
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
  col-span-full
  text-2xl
  font-bold
  tracking-[0.5rem]
  uppercase
  xl:col-span-1
`;

const Divider = tw.hr`
  -mx-lg
  col-span-full
  w-screen
`;

const Label = tw(motion.span)`
  xl:hidden
  block
  absolute
  w-full
  bottom-8
  text-primary
  font-sans
  text-lg
  font-bold
  bg-secondary
  py-6
  px-3
`;

const PosterContainer = tw.div`
  col-span-full
  grid
  h-full
  grid-cols-subgrid
  gap-2
  overflow-clip
  xl:col-start-2
`;

const ExperiencePosters = tw.div`
  relative
  flex
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
  col-span-full
  mb-10
  pr-6
  text-left
  text-lg
  lg:text-xl
  xl:col-span-1
  xl:mb-0
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
