import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { device } from '../breakpoints';

import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
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

  @media ${device.md} {
		background-image: url(${bgTablet});
    overflow: hidden;
	}
	@media ${device.xl} {
		background-image: url(${bgDesktop});
	}
`;

const Title = styled.h5`
  & span {
    color: gray;
    font-weight: 700;
    padding-right: 18px;
    
  }
  @media ${device.md} {
    align-self: flex-start;
    margin-left: 2rem;
  }
  @media ${device.xl} {
    margin-top: 100px;
    margin-left: 180px;
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
