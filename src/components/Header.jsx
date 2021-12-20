import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu';
import { device } from '../breakpoints';

import logo from '../assets/shared/logo.svg';
import { useState } from 'react';

const HeaderStyled = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-width: 100%;
  height: 90px;
  z-index: 1;

  @media ${device.xl} {
    height: 96px;
    padding-left: 55px;
    margin-top: 40px;
  }
`;

const Separate = styled.div`
  display: none;
  @media ${device.xl} {
    position: absolute;
    top: 50%;
    display: block;
    width: 35vw;
    border: 1px solid rgba(255, 255, 255, 0.2515);
    margin: auto 0;
    left: 180px;
    z-index: 3;
  }
`;

const Logo = styled.img`
  margin: 0 1rem;
  width: 40px;
  height: 40px;
  @media ${device.tablet} {
    width: 48px;
    height: 48px;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <HeaderStyled>
      <Link to="/">
        <Logo src={logo} alt="logo" />
        <Separate />
      </Link>
      <Navbar open={isOpen} />
      <BurgerMenu toggleNavbar={toggleNavbar} open={isOpen} />
    </HeaderStyled>
  );
};

export default Header;
