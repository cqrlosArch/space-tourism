import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  text-align: center;
`;

const StyledLink = styled(NavLink).attrs(({ className }) => ({
  className: className.isActive ? 'active' : 'inactive',
}))`
  font-family: 'Bellefair', serif;
  font-size: 16px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  line-height: 40px;
  color: #ffffff;
  background-color: transparent;
  border-radius: 50%;
  margin: 0 8px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  display: inline-block;
  text-decoration: none;
  &:hover {
    border: 2px solid rgba(255, 255, 255);
  }
  &.active {
    border: none;
    color: #0b0d17;
    background-color: #ffffff;
  }
`;

const CircleSlider = () => {
  return (
    <>
      <Nav>
        <StyledLink
          className={(navData) => navData.isActive}
          aria-current="true"
          to="/technology/launchvehicle"
        >
          1
        </StyledLink>
        <StyledLink
          className={(navData) => navData.isActive}
          to="/technology/spaceport"
        >
          2
        </StyledLink>
        <StyledLink
          className={(navData) => navData.isActive}
          to="/technology/spacecapsule"
        >
          3
        </StyledLink>
      </Nav>
    </>
  );
};

export default CircleSlider;
