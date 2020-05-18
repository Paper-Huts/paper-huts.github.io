import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './navigation.scss'

import About from '../../pages/about/about'
import Contact from '../../pages/contact/contact'

const Navigation = () => {
  const [navList, setNavList] = useState([
    { id: 1, title: 'Our Story', path: '/about'},
    { id: 2, title: 'Contact', path: '/contact' }
  ])

  return (
    <div className='row'>
      {navList.map(navItem => (
        <Link to={navItem.path} 
          className='navItem' 
          key={navItem.id}>
            {navItem.title}
        </Link>
      ))}
    </div>
  )
}

export default Navigation