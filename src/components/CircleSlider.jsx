import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../breakpoints';

const Nav = styled.nav`
  text-align: center;
`;

const StyledLink = styled(NavLink).attrs(({ className }) => ({
  className: className.isActive ? 'active' : 'inactive',
  end: true,
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
  @media ${device.md} {
    line-height: 60px;
    height: 60px;
    width: 60px;
    font-size: 20px;
    margin: 0 12px;
  }
  &:hover {
    border: 2px solid rgba(255, 255, 255);
  }
  &.active {
    border: none;
    color: #0b0d17;
    background-color: #ffffff;
  }

  @media ${device.xl} {
    display: block;
    height: 80px;
    width: 80px;
    line-height: 80px;
    margin: 16px 0;
    font-size: 32px;
  }
`;

const CircleSlider = () => {
  return (
    <>
      <Nav>
        <StyledLink
          className={(navData) => navData.isActive}
          aria-current="true"
          to="/technology"
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
