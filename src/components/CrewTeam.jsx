import styled from 'styled-components'

const CrewStyled = styled.div`

`;

const CrewTeam = ({cr}) =>{
  console.log(cr)
  return(
    <CrewStyled>
      {cr.name}
    </CrewStyled>
    );
}

export default CrewTeam