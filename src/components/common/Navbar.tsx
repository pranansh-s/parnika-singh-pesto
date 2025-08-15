import { NAV_LINKS } from '@/constants';
import tw from 'tailwind-styled-components';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NameTag>Parnika</NameTag>
      <NavItemContainer>
        {NAV_LINKS.map((link, idx) => (
          <NavItem key={idx}>{link.name}</NavItem>
        ))}
      </NavItemContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = tw.div`
  lg:px-lg
  px-md
  py-md
  bg-primary
  fixed
  top-0
  left-1/2
  z-50
  flex
  w-full
  max-w-[2400px]
  -translate-x-1/2
  justify-between
  gap-6
  md:gap-48
`;

const NavItemContainer = tw.ul`
  flex
  max-w-[1200px]
  flex-1
  items-center
  justify-between
`;

const NavItem = tw.li`
  p-md
  cursor-pointer
  font-sans
  text-sm
  font-semibold
  transition-colors
  hover:text-blue-500
  md:text-base
`;

const NameTag = tw.h2`
  cursor-pointer
  font-sans
  text-3xl
  font-black
  uppercase
  md:text-5xl
`;
