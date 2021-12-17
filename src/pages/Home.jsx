import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../breakpoints';

// import bgDesktop from '../assets/home/background-home-desktop.jpg';
import bgTablet from '../assets/home/background-home-tablet.jpg';
import bgMobile from '../assets/home/background-home-mobile.jpg';

const HomeStyled = styled.section`
  background: url(${bgMobile}) no-repeat;
  background-size: cover;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  @media ${device.md} {
    background-image: url(${bgTablet});
    justify-content: space-around;
  }
`;

const Hero = styled.div`
  width: 327px;
  height: 276px;
  text-align: center;
  margin-top: 80px;
  font-family: var(--bellefair);
  > * {
    margin-bottom: 16px;
  }
  & h1 {
    margin-top: 1rem;
  }
  @media ${device.md} {
    width: 450px;
    height: 334px;
  }
`;

const Button = styled(Link)`
  margin-top: 3rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-grid;
  padding: 0 2em;
  border-radius: 50%;
  background-color: var(--white);
  color: var(--dark);
  place-items: center;
  font-family: var(--bellefair);
  text-transform: uppercase;
  aspect-ratio: 1;
  text-decoration: none;

  @media ${device.md} {
    margin-top: 0;
    width: 242px;
    height: 242px;
    font-size: 25px;
    line-height: 36.67px;
    letter-spacing: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -2;
    background: hsl(0 0% 100% / 0.1);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 600ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <Hero>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </Hero>
      <div>
        <Button to="/destination">Explore</Button>
      </div>
    </HomeStyled>
  );
};

export default Home;
