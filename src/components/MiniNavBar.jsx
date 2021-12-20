import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../breakpoints';

const Nav = styled.nav`
  width: 238px;
  height: 28px;
  background-color: transparent;

  @media ${device.md} {
    width: 285px;
    height: 34px;
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkContainer = styled.li`
  display: flex;
  align-items: center;
  height: 28px;
`;

const StyledLink = styled(NavLink).attrs(({ className }) => ({
  className: className.isActive ? 'active' : 'inactive',
  end: true
}))`
  color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  letter-spacing: 2.36px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid gray;
  }

  &.inactive {
    border-bottom:none;
  }

  &.active,
  &.default {
    border-bottom: 2px solid white;
  }


 

  @media ${device.md} {
    height: 34px;
    font-size: 14px;
    padding: 0;
  }

  @media ${device.xl} {
		font-size: 16px;
	}
`;

const MiniNavBar = () => {
  return (
    <>
      <Nav>
        <StyledMenu>
          <LinkContainer>
            <StyledLink
              className={(navData) => navData.isActive}
              to="/destination"
            >
              Moon
            </StyledLink>
          </LinkContainer>
          <LinkContainer>
            <StyledLink
              className={(navData) => navData.isActive}
              to="/destination/mars"
            >
              Mars
            </StyledLink>
          </LinkContainer>
          <LinkContainer>
            <StyledLink
              className={(navData) => navData.isActive}
              to="/destination/europa"
            >
              Europa
            </StyledLink>
          </LinkContainer>
          <LinkContainer>
            <StyledLink
              className={(navData) => navData.isActive}
              to="/destination/titan"
            >
              Titan
            </StyledLink>
          </LinkContainer>
        </StyledMenu>
      </Nav>
      <Outlet />
    </>
  );
};

export default MiniNavBar;
