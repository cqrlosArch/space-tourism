import styled from 'styled-components';
import CircleSlider from './CircleSlider';
import { device } from '../breakpoints';

const TechnologyStyled = styled.article`
  display: grid;
  justify-items: center;
  justify-self: center;
  grid-template-columns: 327px;
  grid-template-rows: repeat(3, min-content);
  margin-top: 140px;
  @media ${device.md} {
    grid-template-columns: 458px;
    margin-top: 220px;
  }
  @media ${device.xl} {
    grid-template-columns: repeat(3, min-content);
    grid-template-rows: auto;
    justify-items: flex-start;
    margin-top: 0;
    width: 100%;
    justify-content: space-between;
  }
`;

const TechnologyPicture = styled.picture`
  width: 100vw;
  align-self: center;
  margin-top: 32px;
  margin-bottom: 34px;
  & img {
    width: 100%;
    object-fit: cover;
  }
  @media ${device.xl} {
    grid-column: 3/4;
    align-self: flex-end;
    display: block;
    width: 515px;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 26px;
  @media ${device.xl} {
    grid-column: 2/3;
    grid-row: 1/2;
    width: 490px;
    text-align: start;
      padding-right:2rem;
    align-self: center;
  }
`;

const Title = styled.div`
  font-family: Barlow Condensed;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 2.36px;
  text-transform: uppercase;
  color: #d0d6f9;
  margin-bottom: 8px;
  @media ${device.md} {
    margin-top: 1rem;
  }
  @media ${device.xl} {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;

const Name = styled.h3`
  margin-bottom: 16px;
  @media ${device.md} {
    margin: 0.5rem;
  }
  @media ${device.xl} {
    margin: 0;
  }
`;

const SliderWrapper = styled.div`
  grid-row: 2/3;
  @media ${device.xl} {
    padding-left: 130px;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: center;
    justify-self: center;
    margin-right: 80px;
  }
`;

const Technology = ({ tech }) => {
  return (
    <TechnologyStyled>
      <TechnologyPicture>
        <source
          media="(max-width: 768px)"
          srcSet={`${process.env.PUBLIC_URL}/${tech.images.landscape}`}
        />
        <source
          media="(min-width: 992px)"
          srcSet={`${process.env.PUBLIC_URL}/${tech.images.portrait}`}
        />
        <img
          src={`${process.env.PUBLIC_URL}/${tech.images.portrait}`}
          alt={tech.name}
        />
      </TechnologyPicture>
      <SliderWrapper>
        <CircleSlider />
      </SliderWrapper>

      <Hero>
        <Title>The terminology...</Title>
        <Name>{tech.name}</Name>
        <p>{tech.description}</p>
      </Hero>
    </TechnologyStyled>
  );
};

export default Technology;
