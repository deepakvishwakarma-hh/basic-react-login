import './App.css';
import React, { useState } from "react"
import { Switch, Route } from "react-router-dom";
import Login from "./L-Component/Login"
import Dashboard from "./L-Component/Dashboard"
import Home from "./X_Component/Home"
function App() {
  const [toDashboard, setToDashboard] = useState("not updated")

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login setToDashboard={setToDashboard} />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard data={toDashboard} />
        </Route>
        <Route exact path={"/home"}>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
