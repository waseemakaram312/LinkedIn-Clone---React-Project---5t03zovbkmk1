import { Avatar } from '@material-ui/core'
import React from 'react'

function HeaderOption({Icon, title, avatar}) {
  return (
    <div className='header__option'>
        {
            Icon &&<Icon></Icon>
            }
            {
                avatar && <Avatar name = {avatar}/>
            }
        <span>{title}</span>

    </div>
  ) 
}

export default HeaderOption