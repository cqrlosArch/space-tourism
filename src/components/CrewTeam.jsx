import styled, { createGlobalStyle } from 'styled-components';
import Slider from './Slider';

const CrewStyled = styled.article`
  display: grid;
  justify-items: center;
  justify-self: center;
  grid-template-columns: 327px;
  grid-template-rows: repeat(3, min-content);
`;

const CrewPicture = styled.picture`
  text-align: center;
  height: 220px;
  width: 200px;
  & img {
    object-fit: cover;
    object-position: center;
    height: 100%;
  }
`;

const Border = styled.hr`
  border: 1px solid #383b4b;
  margin-top: 0;
  margin-bottom: 32px;
  width: 100%;
`;

const CrewInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 32px;
`;

const CrewTitle = styled.h4`
  opacity: 0.5;
  margin-bottom: 8px;
`;

const CrewName = styled.h3`
  margin-bottom: 16px;
`;

const CrewDesc = styled.p`
  margin-bottom: 3rem;
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
