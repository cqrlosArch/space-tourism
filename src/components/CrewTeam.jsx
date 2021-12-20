import styled, { createGlobalStyle } from 'styled-components';
import Slider from './Slider';
import { device } from '../breakpoints';

const CrewStyled = styled.article`
  display: grid;
  justify-items: center;
  justify-self: center;
  grid-template-columns: 327px;
  grid-template-rows: repeat(3, min-content);
  @media ${device.md} {
    grid-template-columns: 458px;
    margin-top: 2rem;
  }
  @media ${device.xl} {
    grid-template-columns: 750px 600px;
    grid-template-rows: 600px auto;
  }
`;

const CrewPicture = styled.picture`
  text-align: center;
  height: 220px;
  width: 200px;
  @media ${device.md} {
    grid-row: 4 / 5;
    height: 480px;
    width: auto;
    display: flex;
    justify-content: center;
  }
  @media ${device.xl} {
    height: 700px;
    grid-column: 2/3;
    grid-row: 1/3;
    align-self: flex-end;
  }
  & img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    overflow: hidden;
    @media ${device.md} {
      margin-top: 2rem;
    }
    @media ${device.xl} {
      height: 700px;
    }
  }
`;

const Border = styled.hr`
  border: 1px solid #383b4b;
  margin-top: 0;
  margin-bottom: 32px;
  width: 100%;
  @media ${device.md} {
    display: none;
  }
`;

const CrewInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 32px;
  @media ${device.md} {
    grid-row: 1 / 2;
    height: 260px;
    justify-content: space-evenly;
  }
`;

const CrewTitle = styled.h4`
  opacity: 0.5;
  margin-bottom: 8px;
  @media ${device.md} {
    margin: 0;
  }
  @media ${device.xl} {
    width: 444px;
    text-align: left;
    margin-bottom: 1rem;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 32px;
  @media ${device.md} {
    grid-row: 1/2;
    margin-bottom: 40px;
  }
  @media ${device.xl} {
    grid-column: 1/2;
    grid-row: 1/2;
    text-align: start;
    justify-self: flex-start;
    margin-top: 150px;
    margin-left: 100px;
    margin-bottom: 0px;
  }
`;
const SilderContainer = styled.div`
  @media ${device.xl} {
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: center;
    justify-self: flex-start;
    margin-left: 100px;
    margin-bottom: 4rem;
  }
`;
const CrewName = styled.h3`
  margin-bottom: 16px;
  @media ${device.md} {
    margin: 0;
  }
  @media ${device.xl} {
    text-align: left;
  }
`;

const CrewDesc = styled.p`
  margin-bottom: 3rem;
  @media ${device.md} {
    margin: 0;
  }

  @media ${device.xl} {
    width: 444px;
    text-align: left;
    margin-top: 2rem;
  }
`;

const CrewTeam = ({ cr }) => {
  return (
    <CrewStyled>
      <CrewPicture>
        <source
          type="image/webp"
          srcSet={`${process.env.PUBLIC_URL}/${cr.images.webp}`}
        />
        <img
          src={`${process.env.PUBLIC_URL}/${cr.images.png}`}
          alt={createGlobalStyle.name}
        />
      </CrewPicture>
      <Border />
      <SilderContainer>
        <Slider />
      </SilderContainer>
      <Hero>
        <CrewInfo>
          <CrewTitle>{cr.role}</CrewTitle>
          <CrewName>{cr.name}</CrewName>
          <CrewDesc>{cr.bio}</CrewDesc>
        </CrewInfo>
      </Hero>
    </CrewStyled>
  );
};

export default CrewTeam;
