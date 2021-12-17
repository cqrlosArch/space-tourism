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
  & img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    overflow: hidden;
    @media ${device.md} {
      margin-top: 2rem;
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
`;

const CrewName = styled.h3`
  margin-bottom: 16px;
  @media ${device.md} {
    margin: 0;
  }
`;

const CrewDesc = styled.p`
  margin-bottom: 3rem;
  @media ${device.md} {
    margin: 0;
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
      <Slider />
      <CrewInfo>
        <CrewTitle>{cr.role}</CrewTitle>
        <CrewName>{cr.name}</CrewName>
        <CrewDesc>{cr.bio}</CrewDesc>
      </CrewInfo>
    </CrewStyled>
  );
};

export default CrewTeam;
