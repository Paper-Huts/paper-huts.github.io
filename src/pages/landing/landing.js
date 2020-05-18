import React, { Fragment, useState } from 'react'

import './landing.scss'

import Header from '../../components/header/header'

const Landing = ({ motto2 }) => {
  const [title, setTitle] = useState('Graphic')
  return (
    <div className='landing-section'>
      <div className='row landing-header'>
        <Header title={title} />
      </div>
      <div className='row'>
        <p className='motto2'>{motto2}</p>
      </div>
    </div>
  )
}

export default Landing