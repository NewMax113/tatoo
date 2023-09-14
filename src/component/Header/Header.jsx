import React, { memo } from 'react'
import Navigation from './Navigation/Navigation'
import header from './Header.module.css'

const Header = () => {
  return (
    <div className={header.nav_bar}>
      <Navigation />
    </div>
  )
}

export default Header