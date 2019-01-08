import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './app/pages/Home';
import Portfolio from './app/pages/Portfolio';
import About from './app/pages/About';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </main>
  );

export default Main;