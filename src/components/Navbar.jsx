import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../breakpoints';

const NavbarStyled = styled.nav`
  height: 100vh;

  @media ${device.md} {
    height: 96px;
    width: 500px;
  }

  @media ${device.xl} {
    padding-left: 123px;
    width: 65vw;
    height: 96px;
  }
`;

const ListStyled = styled.ul`
  transition: transform 0.3s ease-in-out;
  height: inherit;
  inset: 0 0 0 30%;
  z-index: 1;
  position: fixed;
  padding: min(10rem, 15vh) 2rem;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateX(${({ open }) => (open ? '0' : '240px')});
  @supports (backdrop-filter: blur(2rem)) {
    backdrop-filter: opacity(${({ open }) => (open ? '1' : '0')}) blur(2rem);
    background-color: rgba(255, 255, 255, 0.04);
  }

  @media ${device.md} {
    inset: 0;
    right: 0;
    top: 0;
    padding: 1rem;
    position: relative;
    display: flex;
    visibility: visible;
    backdrop-filter: opacity(1) blur(2rem);
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    transform: translateX(0);
  }

  @media ${device.xl} {
    padding-left: 80px;
    justify-content: flex-start;
  }
`;

const ItemStyled = styled.li`
  margin-bottom: 3rem;

  @media ${device.md} {
    margin-bottom: 0;

    padding: 0.5rem;
  }

  @media ${device.xl} {
    margin-left: 20px;
  }
`;

const LinkStyled = styled(NavLink).attrs(({ className }) => ({
  className: className.isActive ? 'active' : 'inactive',
  end: true,
}))`
  text-decoration: none;
  color: var(--white);
  font-family: var(--barlowCondensed);
  font-size: 1rem;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  & span {
    margin-right: 0.5rem;
    font-weight: 600;
    @media ${device.md} {
      display: none;
    }
    @media ${device.xl} {
      display: inline-block;
    }
  }

  @media ${device.xl} {
    font-size: 16px;
    padding: 36px 0;
    &:hover {
      border-bottom: 2px solid gray;
    }
    &.active {
      border-bottom: 2px solid white;
    }
  }
`;

const Navbar = ({ open }) => {
  return (
    <NavbarStyled>
      <ListStyled open={open}>
        <ItemStyled>
          <LinkStyled to="/" className={(navData) => navData.isActive}>
            <span>00</span>Home
          </LinkStyled>
        </ItemStyled>
        <ItemStyled>
          <LinkStyled
            to="/destination"
            className={(navData) => navData.isActive}
          >
            <span>01</span>Destination
          </LinkStyled>
        </ItemStyled>
        <ItemStyled>
          <LinkStyled to="/crew" className={(navData) => navData.isActive}>
            <span>02</span>Crew
          </LinkStyled>
        </ItemStyled>
        <ItemStyled>
          <LinkStyled
            to="/technology"
            className={(navData) => navData.isActive}
          >
            <span>03</span>Technology
          </LinkStyled>
        </ItemStyled>
      </ListStyled>
    </NavbarStyled>
  );
};

export default Navbar;
