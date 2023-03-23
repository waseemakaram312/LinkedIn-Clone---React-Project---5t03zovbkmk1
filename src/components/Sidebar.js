import React from 'react'
import '../styles/sidebar.css'
import { Avatar } from '@material-ui/core'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='side__profile'>
        <img src='https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?auto=format&h=200'/>
        <div className='profile__details'>
          <Avatar/>
          <h4>SaeB</h4>
          <p>Web Devoloper</p>
        </div>
        <div className='profile__stats'>
          <span>Who view your profile</span>
          <span className='stat__number'>20</span>
        </div>
        <div className='profile__stats'>
          <span>Connection<br/><b>Grow your Network</b></span>
          <span className='stat__number'>150</span>
        </div>

      </div>
      <div className='sidebar__recent'>
        <p>Recent</p>
        <p className='hash'><span>#</span>branding</p>
        <p className='hash'><span>#</span>marketing</p>
        <p className='hash'><span>#</span>webdevelopment</p>
        <p className='hash'><span>#</span>programing</p>
        <p className='hash'><span>#</span>reactjs</p>
        <p className='hash'><span>#</span>reduxtoolkit</p>

      </div>
    </div>
  )
}

export default Sidebar