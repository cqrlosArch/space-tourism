import styled from 'styled-components'

const TechnologyStyled = styled.div`

`;

const Technology = ({tech}) =>{
  return(
    <TechnologyStyled>
       {tech.name}
    </TechnologyStyled>
    );
}

export default Technology