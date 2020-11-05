import React from "react";
import { User } from "./pages/User";
// import * as Profile from "./pages/profile";
import Profile from "./pages/Profile";
// import { Container } from "./components/Container";
// import { BrowserRouter, Route } from "react-router-dom";

import { BrowserRouter, Route } from "react-router-dom";

const Router = () => (
  // <Router>

  <BrowserRouter>
    <Route exact path="/" component={User} />
    <Route exact path="/user/:id" component={Profile} />
  </BrowserRouter>
  // </Router>
);

export default Router;
