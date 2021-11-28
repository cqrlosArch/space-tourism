import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarStyled = styled.nav`
  position: absolute;
  transition: transform 0.3s ease-in-out;
  height: 100vh;
`;

const ListStyled = styled.ul`
  height: inherit;
  inset: 0 0 0 30%;
  z-index: 1;
  position: fixed;
  padding: min(10rem, 15vh) 2rem;
  filter: opacity(${({ open }) => (open ? '1' : '0')});
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateX(${({ open }) => (open ? '0' : '240px')});
  @supports (backdrop-filter: blur(2rem)) {
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(2rem);
  }

`;

const ItemStyled = styled.li`
  margin-bottom: 3rem;
`;

const LinkStyled = styled(NavLink)`
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
  }
`;

const Navbar = ({ open }) => {
  return (
    <NavbarStyled >
      <ListStyled open={open}>
        <ItemStyled>
          <LinkStyled
            to="/"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' activated' : '')
            }
          >
            <span>00</span>Home
          </LinkStyled>
        </ItemStyled>
        <ItemStyled>
          <LinkStyled
            to="/destination"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' activated' : '')
            }
          >
            <span>01</span>Destination
          </LinkStyled>
        </ItemStyled>
        <ItemStyled>
          <LinkStyled
            to="/crew"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' activated' : '')
            }
          >
            <span>02</span>Crew
          </LinkStyled>
        </ItemStyled>
        <ItemStyled>
          <LinkStyled
            to="/technology"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' activated' : '')
            }
          >
            <span>03</span>Technology
          </LinkStyled>
        </ItemStyled>
      </ListStyled>
    </NavbarStyled>
  );
};

export default Navbar;
