import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route    component={Header} />
      <Switch>
        <Route exact path="/" />
      </Switch>
    </BrowserRouter>
  );
};
export { Routes };
