import React from 'react'
import PersonIcon from '@mui/icons-material'
import IconButton from '@mui/icons-material'
function Header() {
  return (
    <>
    <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
    </IconButton>
    </>
  )
}

export default Header