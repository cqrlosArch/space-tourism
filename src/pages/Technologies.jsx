import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { device } from '../breakpoints';

import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgMobile from '../assets/technology/background-technology-mobile.jpg';

const TechnologiesStyled = styled.section`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
  @media ${device.md} {
    background-image: url(${bgTablet});
    padding-top: 100px;
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
`;

const Technologies = () => {
  return (
    <TechnologiesStyled>
      <Title>
        <span>03</span>SPACE LAUNCH 101
      </Title>
      <Outlet />
    </TechnologiesStyled>
  );
};

export default Technologies;
