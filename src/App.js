import React from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Expenses from "./Expenses.js";

export function Home() {
  return (
    <>
      <Navbar />
      <About />
    </>
  )
}

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}
