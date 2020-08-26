import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './app.css';
import Sort from './containers/sort';
import Home from './containers/home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navContainer">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sort">Sort</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/sort">
              <Sort />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
