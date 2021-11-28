import styled from 'styled-components';

const WrapperStyled = styled.div`
  height: 100vh;
  position: relative;
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
