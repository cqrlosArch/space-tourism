import styled from 'styled-components';
import MiniNavBar from './MiniNavBar';

const DestinationStyled = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  place-items: center;
`;

const DestPicture = styled.picture`
  align-self: center;
  margin-bottom: 26px;
  & img {
    object-fit: cover;
    width: 170px;
    height: 170px;
  }
`;

const DestName = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0;
`;
const DestText = styled.p`
  text-align: center;
  padding: 0 2rem;
`;
const DestSeparation = styled.hr`
  border: 1px solid #383b4b;
  width: 85%;
`;
const DestInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const DestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;

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
      <MiniNavBar />
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
    </DestinationStyled>
  );
};

export default Destination;
