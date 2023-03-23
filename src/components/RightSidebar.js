import React from 'react'
import { BsInfoLg } from "react-icons/bs";
import "../styles/widget.css"


function RightSidebar() {
  return (
    <div className='widget'>
      <div className='widge_top'>
        <div className='widge__header'>
          <h4>LinkedIn News</h4>
          <BsInfoLg/>

        </div>
        <div className='widget__body'>
          <ul className='widget__option'>
            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago * 4,455 readers</p>
            </li>
             <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago * 4,455 readers</p>
            </li>
             <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago * 4,455 readers</p>
            </li>
             <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago * 4,455 readers</p>
            </li>
             <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago * 4,455 readers</p>
            </li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default RightSidebar