import './App.css';
import React,{useState} from "react"
import { Switch, Route } from "react-router-dom";
import Login from "./L-Component/Login"
import Dashboard from "./L-Component/Dashboard"

function App() {
const [toDashboard, setToDashboard] = useState("not updated")

  return (
    <>
      <Switch>
        <Route exact path="/">
        <Login setToDashboard={setToDashboard}/>
        </Route>
        <Route exact path="/dashboard">
        <Dashboard data={toDashboard}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
