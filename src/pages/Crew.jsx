import styled from 'styled-components'
import { Outlet } from 'react-router-dom';

const CrewStyled = styled.div`

`;

const Crew = () =>{
  return(
    <CrewStyled>
       Crew
       <Outlet/>
    </CrewStyled>
    );
}

export default Crew