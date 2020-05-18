import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../logo.svg'
import './side_bar.scss'

const SideBar = ({ motto1 }) => (
  <div className='side-bar'>
    <div className='row logo-space'>
      <Link to='/'>
        <img src={logo} className="paperhuts-logo" alt="logo" />
      </Link>
    </div>
    <div>
      <p className='motto1'>{motto1}</p>
    </div>
  </div>
)

export default SideBar