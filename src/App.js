import React, { Fragment, useState } from 'react'
import logo from './logo.svg'
import { Switch, Route } from 'react-router-dom'
import './App.scss';

import SideBar from './components/side_bar/side_bar'
import Navigation from './components/navigation/navigation'
import Landing from './pages/landing/landing'
import About from './pages/about/about'
import Contact from './pages/contact/contact'

function App() {
  const [motto1, setMotto1] = useState('Your next starts')
  const [motto2, setMotto2] = useState('design with us')
  return (
    <div>
      <div className='col-3'>
        <SideBar motto1={motto1} />
      </div>
      <div className='col-9 main-section'>
        <Navigation />
        <Switch>
          <Route exact path='/'><Landing motto2={motto2} /></Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
