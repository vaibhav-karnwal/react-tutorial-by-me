import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/section/About";
import Home from "./Components/section/Home";
import Users from "./Components/section/Users";
import Nested from "./Components/Nested_Components/Nested";
import bookland from "./bookland/Main"
import useStateInObjects from "./Components/useState/useStateInObject";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/users' component={Users}/>
          <Route exact path='/nested_components' component={Nested}/>
          <Route exact path="/bookland" component={bookland}/>
          <Route exact path="/useStateInObjects" component={useStateInObjects}/>
        </Switch>
      </>
  );
}