import React from "react";
import HeaderStyled from "./style";
import Top from './top'
import Nav from './top'
import dataTop from "./dataTop";
import dataMenu from "./dataTop";

const Header = ({listMenu_1,listMe}) => {
  return( <HeaderStyled  >
    <Nav listMenu= {dataMenu}>
      
    </Nav>
    <Top listMenu={dataTop}>
    </Top>
  </HeaderStyled>);
};
export default Header;
