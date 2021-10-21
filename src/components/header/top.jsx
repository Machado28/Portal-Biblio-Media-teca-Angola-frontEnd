import React from "react";
import { TopStyled } from "./style";

const Top = (prop) => {
  return (
    <TopStyled>
      {prop.listMenu.map((item) => {
        return <li>{item.name}</li>;
      })}
    </TopStyled>
  );
};
export default Top;
