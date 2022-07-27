import React from 'react'
import MainHeader from './MainHeader-son'
import NavLinks from './NavLink-grandson'

function MainNav() {
  return (
<MainHeader>
  <nav>
  <NavLinks/>
  </nav>
</MainHeader>
    )
}

export default MainNav