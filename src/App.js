import React,{useEffect} from "react";
import { Routes } from "./routes/index.js";
import GlobalStyle from './styles/index'


export default function App() {
 
 
  // useEffect(() => {
  //  WebFont.load({
  //    google: {
  //      families: ['Droid Sans', 'Chilanka']
  //    }
  //  });
  // }, []);
  return (
    <>
    <GlobalStyle></GlobalStyle>
      <Routes/>
    </>
  );
}
