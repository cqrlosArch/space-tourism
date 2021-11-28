import styled from 'styled-components';
import close from '../assets/shared/icon-close.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';

const BurgerMenuStyled = styled.div`
  background: ${({ open }) =>(open ? `url(${close})` : `url(${hamburger})`)} no-repeat center;
  background-size:50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 5px;
  position: relative;
  transition: background 0.3s ease-in-out;
  z-index: 2;
`;

const BurgerMenu = ({ toggleNavbar,open }) => {
  return <BurgerMenuStyled open={open} onClick={toggleNavbar}/>;
};

export default BurgerMenu;
