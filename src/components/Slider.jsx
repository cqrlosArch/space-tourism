import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  text-align: center;
`;

const StyledLink = styled(NavLink).attrs(({ className }) => ({
  className: className.isActive ? 'active' : 'inactive',
}))`
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 8px;
  background-color: rgba(100, 100, 100, 0.7);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: #717171;
  }
  &.active {
    background-color: #fff;
  }
`;

const Slider = () => {
  return (
    <>
      <Nav>
        <StyledLink
          to="/crew/douglashurley"
          className={(navData) => navData.isActive}
        />
        <StyledLink
          to="/crew/markshuttleworth"
          className={(navData) => navData.isActive}
        />
        <StyledLink
          to="/crew/victorglover"
          className={(navData) => navData.isActive}
        />
        <StyledLink
          to="/crew/Anoushehansari"
          className={(navData) => navData.isActive}
        />
      </Nav>
    </>
  );
};

export default Slider;
