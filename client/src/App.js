import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Link } from 'react-router-dom';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link style={{fontWeight: 'bold', textDecoration: "none",}} to= '/login'> LOGIN </Link>
        <Link style={{fontWeight: 'bold', textDecoration: "none", marginLeft: "4%",}}to= '/bubble-page'> BubblePage </Link>
          <Route path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path='/bubble-page' component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
