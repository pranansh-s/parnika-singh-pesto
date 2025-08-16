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
import telegram from '@/../public/icons/telegram.svg';
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
    <ContactFieldContainer href={link} target="_blank" className={className}>
      <Image width={30} height={30} className="scale-[0.9] md:scale-100" src={icon} alt={text} />
      <StyledLink>{text}</StyledLink>
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
    <ContactContainer id="contact">
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
        <h2 className="md:!ml-0">Hire Me</h2>
        <ConnectSubTitle>Let&apos;s Connect</ConnectSubTitle>
        <BackgroundImage src={papers} alt="papers" />
        <ContactFields>
          <ContactField text="parnikasingh12@gmail.com" link="mailto:parnikasingh12@gmail.com" icon={mail} />
          <ContactField text="@parnika97" link="https://t.me/parnika97" icon={telegram} />
          <ContactField
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
  h-[400px]
  max-h-screen
  max-w-[1000px]
  grid-cols-1
  place-items-center
  lg:my-24
  my-16
  md:h-[500px]
  md:grid-cols-2
`;

const StyledLink = tw.span`
  text-2xl
  font-sans
  group-hover:text-blue-500
  group-hover:underline
`;

const GraphicContainer = tw.div`
  relative
  hidden
  md:block
`;

const ConnectSubTitle = tw.h2`
  text-secondary/80
  mb-10
  !scale-100
  text-center
  !font-sans
  !text-2xl
  font-bold
  capitalize
  italic
  md:mb-5
  md:!ml-0
  md:text-left
  md:!text-3xl
`;

const ContactFieldContainer = tw(Link)`
  group
  flex
  w-max
  text-lg
  items-center
  gap-5
`;

const ContactFields = tw.div`
  flex
  flex-col
  flex-nowrap
  items-center
  gap-12
  text-xl
  font-bold
  md:flex-row
  md:flex-wrap
  md:items-start
  md:gap-6
`;

const Connect = tw.div`
  relative
  flex
  flex-col
  gap-10
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

const RotatingImage = tw(motion.create(Image))`
  aspect-square
  absolute
  top-10
  -z-10
  w-full
`;
