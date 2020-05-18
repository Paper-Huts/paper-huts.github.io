import React, { Fragment } from 'react'

import logo from '../../logo.svg'
import './side_bar.scss'

const SideBar = ({ motto }) => (
  <Fragment>
    <row>
    <img src={logo} className="paperhuts-logo" alt="logo" />
    </row>
    <row>
      <p>{motto}</p>
    </row>
  </Fragment>
)

export default SideBar