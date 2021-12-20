import styled from 'styled-components';
import MiniNavBar from './MiniNavBar';
import { device } from '../breakpoints';

const DestinationStyled = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  place-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  @media ${device.xl} {
    margin: 0 160px;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    margin-top: 100px;
  }
`;

const DestPicture = styled.picture`
  align-self: center;
  margin-bottom: 26px;
  & img {
    object-fit: cover;
    width: 170px;
    height: 170px;
    @media ${device.md} {
      width: 300px;
      height: 300px;
    }

    @media ${device.xl} {
      width: 445px;
      height: 445px;
    }
  }

  @media ${device.xl} {
    grid-column: 1/2;
    grid-row: 2/3;
    margin-right: 150px;
    align-self: flex-start;
    justify-self: center;
  }
`;

const DestName = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0;

  @media ${device.xl} {
    margin-bottom: 14px;
  }
`;
const DestText = styled.p`
  text-align: center;
  padding: 0 2rem;
  @media ${device.md} {
    padding: 0 4rem;
  }
  @media ${device.xl} {
    text-align: left;
    padding: 0;
  }
`;
const DestSeparation = styled.hr`
  border: 1px solid #383b4b;
  width: 85%;

  @media ${device.xl} {
    width: 100%;
  }
`;
const DestInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  @media ${device.md} {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media ${device.xl} {
    justify-content: flex-start;
  }
`;

const DestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & .info-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    letter-spacing: 2.36px;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  & .info-subtitle {
    font-family: 'Bellefair', serif;
    font-size: 28px;
    text-transform: uppercase;
    margin: 0;
  }

  @media ${device.xl} {
    margin-right: 80px;
    min-width: 160px;
  }
`;

const StyledNavBar = styled.div`
  margin-bottom: 20px;
  @media ${device.md} {
    margin-bottom: 32px;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  width: 327px;
  height: 448px;
  text-align: center;
  align-items: center;
  @media ${device.md} {
    width: 573px;
  }
  @media ${device.xl} {
    grid-column: 2/3;
    grid-row: 2/3;
    width: 445px;
    height: 472px;
    align-items: start;
    text-align: start;
    align-self: flex-start;
    margin-top: 64px;
    justify-self: flex-start;
  }
`;

const Destination = ({ dest }) => {
  return (
    <DestinationStyled>
      <DestPicture>
        <source
          type="image/webp"
          srcSet={`${process.env.PUBLIC_URL}/${dest.images.webp}`}
        />
        <img
          src={`${process.env.PUBLIC_URL}/${dest.images.png}`}
          alt={dest.name}
        />
      </DestPicture>

      <Hero>
        <StyledNavBar>
          <MiniNavBar />
        </StyledNavBar>
        <DestName>{dest.name}</DestName>
        <DestText>{dest.description}</DestText>
        <DestSeparation />
        <DestInfo>
          <DestWrapper>
            <p className="info-title">AVG. DISTANCE</p>
            <p className="info-subtitle">{dest.distance}</p>
          </DestWrapper>
          <DestWrapper>
            <p className="info-title">EST. TRAVEL TIME</p>
            <p className="info-subtitle">{dest.travel}</p>
          </DestWrapper>
        </DestInfo>
      </Hero>
    </DestinationStyled>
  );
};

export default Destination;
