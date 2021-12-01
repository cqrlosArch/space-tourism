import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

// import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
// import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgMobile from '../assets/crew/background-crew-mobile.jpg';

const CrewStyled = styled.section`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
`;

const Title = styled.h5`
  & span {
    color: gray;
    font-weight: 700;
    padding-right: 18px;
  }
`;
const Crew = () => {
  return (
    <CrewStyled>
      <Title>
        <span>02</span>MEET YOUR CREW
      </Title>
      <Outlet />
    </CrewStyled>
  );
};

export default Crew;
