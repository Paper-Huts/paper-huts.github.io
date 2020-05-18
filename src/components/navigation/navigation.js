import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEdit, faPhone } from '@fortawesome/free-solid-svg-icons'

import './navigation.scss'

import About from '../../pages/about/about'
import Contact from '../../pages/contact/contact'

const Navigation = () => {
  const [navList, setNavList] = useState([
    { id: 0, title: 'Home', path: '/', fa_icon: faHome },
    { id: 1, title: 'Our Story', path: '/about', fa_icon: faEdit },
    { id: 2, title: 'Contact', path: '/contact', fa_icon: faPhone }
  ])

  return (
    <div className='navigation'>
      {navList.map(navItem => (
        <Link to={navItem.path} 
          className='navItem' 
          key={navItem.id}>
            <FontAwesomeIcon icon={navItem.fa_icon} />&nbsp;
            {navItem.title} |
        </Link>
      ))}
    </div>
  )
}

export default Navigation