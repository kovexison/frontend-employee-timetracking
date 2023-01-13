import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";
import ClockInOut from './components/ClockInOut'

function App() {
  return (
    <Router>
      <Route exact path="/" component = {EmployeeList} />
      <Route path="/employees/:id" component = {EmployeeDetail} />
      <Route path="/employees/:id/clock-in-out" component = {ClockInOut} />
    </Router>
  );
}

export default App;
