import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import {List} from './pages/List';
import Login from './pages/Login';
import Fof from './pages/Fof';
import Users from './pages/Users'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list/:id' component={List}/>
          //<Route path='/login' component={Login}/>
          <Route path='/fof/:id' component={Fof}/>
          <Route path='/users' component={Users}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
        <Home/>
      </Switch>
    );
  }
}

export default App;