import React from "react";
import HeaderStyled from "./style";
import Top from './top'
import dataTop from "./dataTop";

const Header = ({listMenu_1,listMe}) => {
  return( <HeaderStyled >
    <Top listMenu={dataTop}>
    </Top>
  </HeaderStyled>);
};
export default Header;
