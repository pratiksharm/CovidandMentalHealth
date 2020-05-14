import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import {HashRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Post from './components/Post'
function App() {
  return (
    <HashRouter basename="/">
    <div>
      <Dashboard>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About}/>
          <Route path="/:slug" exact component={Post}/>
        </Switch>
        
      </Dashboard>
    </div>
    </HashRouter>
  )}

export default App;
