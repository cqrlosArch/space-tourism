import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
  html{
    font-size: 1rem;
    box-sizing: border-box;
   
  }
  :root{
    --bellefair: 'Bellefair', serif;
    --barlowCondensed:'Barlow Condensed', sans-serif;
    --barlow:'Barlow', sans-serif;
    --white: #fff;
    --dark: #0b0d17;
    --light: #D0D6F9;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  body {
    font-family: var(--bellefair);
    font-weight:400;
    margin: 0;
    min-height: 100vh;
    color:var(--white);
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

h1,
h2,
h3,
h4,
h5,
p {
  color: var(--white);
  font-weight: 400;
}

h1 {
  font-family: var(--bellefair);
  font-size: 150px;
  text-transform: uppercase;
}

h2 {
  font-family: var(--bellefair);
  font-size: 100px;
  text-transform: uppercase;
}

h3 {
  font-family: var(--bellefair);
  font-size: 56px;
  text-transform: uppercase;
}

h4 {
  font-family: var(--bellefair);
  font-size: 32px;
  text-transform: uppercase;
}

h5 {
  font-family: var(--barlowCondensed);
  font-size: 28px;
  letter-spacing: 4.75px;
  text-transform: uppercase;
}

p {
  font-family: var(--barlow);
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
}


@media only screen and (max-width: 1439px) {
  h2 {
    font-size: 80px;
  }

  h3 {
    font-size: 40px;
    line-height: 46px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.38px;
  }

  p {
    font-size: 16px;
    line-height: 28px;
  }
}

@media only screen and (max-width: 767px) {
  h1 {
    font-size: 80px;
  }

  h2 {
    font-size: 52px;
  }

  h3 {
    font-size: 24px;
    line-height: 28px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 2.7px;
  }

  p {
    font-size: 15px;
    line-height: 25px;
  }
}

*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

*::-webkit-scrollbar-thumb {
  background: rgba(90, 90, 90);
}

*::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.4);
}
`;

export default GlobalStyle;
