import React, { Fragment } from 'react'
import logo from './logo.svg'
import { Switch, Route } from 'react-router-dom'
import './App.scss';

import SideBar from './components/side_bar/side_bar'
import Navigation from './components/navigation/navigation'
import Landing from './pages/landing/landing'
import About from './pages/about/about'
import Contact from './pages/contact/contact'

function App() {
  return (
    <div className='row'>
      <div className='col-3'>
        <SideBar />
      </div>
      <div className='col-9'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
