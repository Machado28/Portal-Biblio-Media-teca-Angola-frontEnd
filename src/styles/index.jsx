 import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body, html{
    margin: 0;
    padding: 0;
    background-color: #fff;
    color: #ffffff;
  }

  a{
    text-decoration: none;
  }
li{
  list-style:none;
}
  body{
    background-color: #484eed;
  }

*{
   box-sizing: border-box;

   font-family: 'PT Sans', cursive;
}
`

export default GlobalStyle