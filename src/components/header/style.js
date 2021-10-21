import styled from "styled-components";

const DefaultFlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
 justify-content:flex-end;
`;

const HeaderStyled = styled(DefaultFlexBox)`
   background: #fff;
  border-bottom: #eee 2px solid;
  height: 100px;
  width: 100%;
  color: #dd5a08;
`;
export default HeaderStyled;

export const TopStyled = styled(DefaultFlexBox)`
  align-items: center;
  padding-right:2rem;
  background: -webkit-linear-gradient(left, #431c0f, #270b02);
  width: 100%; 
  height: 35px;

  li {
    color: #fff;
    font-size: 12px;
    padding-right:2rem;
  
  }
`;
