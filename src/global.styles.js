import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  padding: 20px 40px;
  font-family: "Asap Condensed";

  @media screen and (max-width:800px){
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}
`;
