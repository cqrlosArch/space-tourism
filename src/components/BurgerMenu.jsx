import styled from 'styled-components';
import close from '../assets/shared/icon-close.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import { device } from '../breakpoints';


const BurgerMenuStyled = styled.div`
  background: ${({ open }) => (open ? `url(${close})` : `url(${hamburger})`)}
    no-repeat center;
  background-size: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-right: 5px;
  right: 0;
  position: absolute;
  transition: background 0.3s ease-in-out;
  z-index: 10;
  @media ${device.md} {
		display: none;
	}
`;

const BurgerMenu = ({ toggleNavbar, open }) => {
  return <BurgerMenuStyled open={open} onClick={toggleNavbar} />;
};

export default BurgerMenu;
