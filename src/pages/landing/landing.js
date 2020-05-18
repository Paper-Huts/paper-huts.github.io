import React, { Fragment, useState } from 'react'

import Header from '../../components/header/header'

const Landing = props => {
  const [title, setTitle] = useState('Graphic')
  return (
    <Header title={title} />
  )
}

export default Landing