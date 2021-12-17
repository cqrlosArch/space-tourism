import styled from 'styled-components';
import CircleSlider from './CircleSlider';
import { device } from '../breakpoints';

const TechnologyStyled = styled.article`
  display: grid;
  justify-items: center;
  justify-self: center;
  grid-template-columns: 327px;
  grid-template-rows: repeat(3, min-content);
  margin-bottom: 2rem;
  @media ${device.md} {
    grid-template-columns: 450px;
  }
`;


const TechnologyPicture = styled.picture`
  width: 100vw;
	align-self: center;
	margin-top: 32px;
	margin-bottom: 34px;
  & img{
    width: 100%;
    object-fit: cover;
  }
`;

const Hero = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-top: 26px;


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
    margin-top:1rem;
  }

`;

const Name = styled.h3`
	margin-bottom: 16px;
  @media ${device.md} {
    margin:.5rem;
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

        <CircleSlider />
    
      <Hero>
				<Title>The terminology...</Title>
				<Name>{tech.name}</Name>
				<p>
					{tech.description}
				</p>
			</Hero>
    </TechnologyStyled>
  );
};

export default Technology;
