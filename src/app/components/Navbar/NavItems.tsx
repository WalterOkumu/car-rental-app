import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { SCREENS } from '../Responsive';

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.li`
  ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700

    `}
`;

export const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu>
        <ListContainer>
          <NavItem>
            <a href='/'>Home</a>
          </NavItem>
          <NavItem>
            <a href='/cars'>Cars</a>
          </NavItem>
          <NavItem>
            <a href='/services'>Services</a>
          </NavItem>
          <NavItem>
            <a href='/contact'>Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      <NavItem>
        <a href='/'>Home</a>
      </NavItem>
      <NavItem>
        <a href='/cars'>Cars</a>
      </NavItem>
      <NavItem>
        <a href='/services'>Services</a>
      </NavItem>
      <NavItem>
        <a href='/contact'>Contact Us</a>
      </NavItem>
    </ListContainer>
  );
};
