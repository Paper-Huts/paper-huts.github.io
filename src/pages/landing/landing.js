import React, { Fragment, useState } from 'react'

import './landing.scss'

import Header from '../../components/header/header'

const Landing = ({ motto2 }) => {
  const [title, setTitle] = useState('Graphic')
  return (
    <div className='landing-section'>
      <div className='row'>
        <Header title={title} />
      </div>
      <div className='row'>
        <span>{motto2}</span>
      </div>
    </div>
  )
}

export default Landing