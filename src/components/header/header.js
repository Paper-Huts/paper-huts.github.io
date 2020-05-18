import React from 'react'

import './header.scss'

const Header = ({ title }) => (
  <div className='row'>
    <div className='header'>
      <h1>{title}</h1>
    </div>
  </div>
)

export default Header