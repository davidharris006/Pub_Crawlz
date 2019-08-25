import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Topbar from "./components/Topbar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Topbar />
      <Router>

       <Route exact path="/" render={() => <Home />} />
      </Router>

      
    </div>
  );
}

export default App;
