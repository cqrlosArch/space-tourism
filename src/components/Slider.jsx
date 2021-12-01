import styled from "styled-components";
import {  NavLink } from "react-router-dom";


const Nav = styled.nav`
  text-align: center;
`;

const StyledLink = styled(NavLink)`
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
          className={(navData) => (navData.isActive ? ".active" : "")}
          exact
          to="/crew/douglashurley"
        />
        <StyledLink
          className={(navData) => (navData.isActive ? ".active" : "")}
          exact
          to="/crew/markshuttleworth"
        />
        <StyledLink
          className={(navData) => (navData.isActive ? ".active" : "")}
          exact
          to="/crew/victorglover"
        />
        <StyledLink
          className={(navData) => (navData.isActive ? ".active" : "")}
          exact
          to="/crew/Anoushehansari"
        />
      </Nav>
    </>
  );
};

export default Slider;