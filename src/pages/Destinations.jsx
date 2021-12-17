import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { device } from '../breakpoints';

import bgDesktop from '../assets/destination/background-destination-desktop.jpg';
import bgTablet from '../assets/destination/background-destination-tablet.jpg';
import bgMobile from '../assets/destination/background-destination-mobile.jpg';

const DestinationsStyled = styled.section`
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

const Destinations = () => {
  return (
    <DestinationsStyled>
      <Title>
        <span>01</span>PICK YOUR DESTINATION
      </Title>
      <Outlet />
    </DestinationsStyled>
  );
};

export default Destinations;
