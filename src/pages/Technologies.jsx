import styled from 'styled-components'
import { Outlet } from 'react-router-dom';
const TechnologiesStyled = styled.div`

`;

const Technologies = () =>{
  return(
    <TechnologiesStyled>
       Technologies
       <Outlet/>
    </TechnologiesStyled>
    );
}

export default Technologies