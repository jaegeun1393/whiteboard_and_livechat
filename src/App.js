import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./NavBar";
import Home from "./main_components/Home";
import Check from './classroom/check';

import "./App.css";


function App() {
  document.title = "Example";

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/join/drawing/:socketId" component={Check} />
        <Route path="/join/drawing" component={Check} />
      </Switch>
    </div>
  );
}

export default App;
