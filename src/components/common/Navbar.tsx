'use client';

import Link from 'next/link';

import { NAV_LINKS } from '@/constants';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarContainer>
      <NameTag onClick={() => router.push('/')}>Parnika</NameTag>
      <NavItemContainer>
        {NAV_LINKS.map((link, idx) => (
          <NavItem href={link.path} key={idx}>
            {link.name}
          </NavItem>
        ))}
      </NavItemContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NameTag = tw.h1`
  cursor-pointer
  lg:text-6xl
  font-sans
  font-black
  uppercase
  text-4xl
`;

const NavbarContainer = tw.div`
  lg:px-lg
  px-md
  py-md
  bg-primary
  fixed
  top-0
  left-0
  z-50
  flex
  w-screen
  max-w-[2400px]
  items-center
  justify-between
  gap-6
  md:gap-48
  xl:left-1/2
  xl:-translate-x-1/2
`;

const NavItemContainer = tw.ul`
  flex
  max-w-[1200px]
  flex-1
  items-center
  justify-between
`;

const NavItem = tw(Link)`
  p-md
  cursor-pointer
  font-sans
  text-sm
  font-semibold
  transition-colors
  hover:text-blue-500
  md:text-base
`;
