import React from 'react'
import {Replay} from '@mui/icons-material'
import {Close} from '@mui/icons-material'
import {StarRate} from '@mui/icons-material'
import {Favorite} from '@mui/icons-material'
import {FlashOn} from '@mui/icons-material'
import './SwipeButtons.css'
import IconButton from '@mui/material/IconButton';
function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className="swipeButtons__repeat">
            <Replay fontSize='large' />
        </IconButton>
        <IconButton className="swipeButtons__left">
            <Close fontSize='large' />
        </IconButton>
        <IconButton className="swipeButtons__star">
            <StarRate fontSize='large' />
        </IconButton>
        <IconButton className="swipeButtons__right">
            <Favorite fontSize='large' />
        </IconButton>        
        <IconButton className="swipeButtons__lightning">
            <FlashOn fontSize='large' />
        </IconButton>
    </div>
  )
}

export default SwipeButtons