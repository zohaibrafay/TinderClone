import React from 'react'
import {Person} from '@mui/icons-material'
import {Forum} from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';
import './Header.css'
function Header() {
  return (
    <>
      <div className='header'>
      <IconButton>
          <Person fontSize='large' className="header__icon" />
      </IconButton>
      <img className='header__logo' src='https://www.pngfind.com/pngs/m/13-130341_tinder-logo-png-pluspng-tinder-logo-png-transparent.png' alt="" />
      <IconButton>
          <Forum fontSize='large' className="header__icon" />
      </IconButton>

      </div>
    </>
  )
}

export default Header