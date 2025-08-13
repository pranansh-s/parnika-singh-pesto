'use client';

import { useRef } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

import { motion, useAnimationFrame, useTransform, wrap } from 'motion/react';
import tw from 'tailwind-styled-components';

import useScrollVelocity from '@/hooks/useScrollVelocity';

import abstract from '@/../public/abstract.webp';
import mail from '@/../public/icons/email.svg';
import insta from '@/../public/icons/instagram.svg';
import x from '@/../public/icons/x.svg';
import mailbox from '@/../public/mailbox.webp';
import papers from '@/../public/papers.webp';

type IContactFieldProps = {
  icon: StaticImport;
  link: string;
  text: string;
  className?: string;
};

const ContactField: React.FC<IContactFieldProps> = ({ icon, link, text, className }) => {
  return (
    <ContactFieldContainer className={className}>
      <Image width={30} height={30} src={icon} alt={text} />
      <Link target="_blank" className="hover:opacity-60" href={link}>
        {text}
      </Link>
    </ContactFieldContainer>
  );
};

const Contact = () => {
  const { baseX, velocityFactor } = useScrollVelocity();
  const rotate = useTransform(baseX, v => wrap(0, -105.5, v));
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let rotateBy = directionFactor.current * 25 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    rotateBy += directionFactor.current * rotateBy * velocityFactor.get();

    baseX.set(baseX.get() + rotateBy);
  });

  return (
    <ContactContainer>
      <GraphicContainer>
        <Image width={400} height={400} src={mailbox} alt="mailbox" />
        <RotatingImage
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          style={{ rotate }}
          src={abstract}
          alt="abstract"
        />
      </GraphicContainer>
      <Connect>
        <ConnectTitle>Let&apos;s Connect</ConnectTitle>
        <BackgroundImage src={papers} alt="papers" />
        <ContactFields>
          <ContactField
            className="col-span-2"
            text="parnikasingh12@gmail.com"
            link="mailto:parnikasingh12@gmail.com"
            icon={mail}
          />
          <ContactField
            className="col-span-2 md:col-span-1"
            text="@pestomesto"
            link="https://www.instagram.com/pestomessto?igsh=OTh1MW5nYzYwOGU="
            icon={insta}
          />
          <ContactField
            className="col-span-2 md:col-span-1 md:-ml-24"
            text="@pesto_panini_"
            link="https://x.com/pesto_panini_?t=WbAgp57PwCsSexn-c0u8Nw&s=09"
            icon={x}
          />
        </ContactFields>
      </Connect>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = tw.section`
  grid
  h-[85vh]
  w-[95vw]
  max-w-[1000px]
  grid-cols-1
  place-items-center
  pb-24
  md:grid-cols-2
`;

const GraphicContainer = tw.div`
  relative
  hidden
  md:block
`;

const ConnectTitle = tw.h3`
  text-center
  text-6xl
  font-bold
  uppercase
  md:text-left
  lg:text-8xl
`;

const ContactFieldContainer = tw.div`
  flex
  items-center
  gap-5
`;

const ContactFields = tw.div`
  grid
  grid-cols-2
  place-items-center
  gap-10
  text-2xl
  font-bold
  underline
  md:place-items-start
`;

const Connect = tw.div`
  relative
  flex
  flex-col
  gap-12
`;

const BackgroundImage = tw(Image)`
  absolute
  rotate-90
  opacity-35
  md:scale-50
  scale-75
  top-0
  -right-1/4
  -z-10
`;

const RotatingImage = tw(motion(Image))`
  aspect-square
  absolute
  top-10
  -z-10
  w-full
`;
