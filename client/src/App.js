import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import getAll from './components/getAll';
import search from './components/search';
import getById from './components/getById';
import addNew from './components/addNew';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Awesome Quotes
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/getAll'} className="nav-link">getAll</Link>
              </li>
              <li className="nav-item">
                <Link to={'/search'} className="nav-link">Search</Link>
              </li>
              <li className="nav-item">
                <Link to={'/getById'} className="nav-link">ById</Link>
              </li>
              <li className="nav-item">
                <Link to={'/add'} className="nav-link">Add</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={getAll} />
          <Route exact path='/getAll' component={getAll} />
          <Route exact path='/search' component={search} />
          <Route exact path='/add' component={addNew} />
          <Route exact path='/getById/' component={getById} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
