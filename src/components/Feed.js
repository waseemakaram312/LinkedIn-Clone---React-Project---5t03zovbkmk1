import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import { FcAddImage } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import Post from './Post';
import "../styles/feed.css"
// import Firebase from "firebase";
// import {db} from "./Firebase";



function Feed() {
  const [input, setInput]= useState();
  const submitPost=(e)=>{
      e.preventDefault();
      db.collection("posts").add({
        name: "SaeB",
        description:"this is the firest project",
        massage:input,
        photoURL:"https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
        // timestamp:Firebase.firestore.FieldValue.serverTimestamps(),
        

      });
      setInput("");
   }
  return (
    <div className='feed'>
      <div className='feed__input'>
        <div className='feed__form'>
        <Avatar src='https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'/>
        <form onSubmit={submitPost}>
          <input type="text" placeholder='Start a post' value={input} onChange={e=>setInput(e.target.value)}/>
          <input type="submit" placeholder='Start a post'/>
        </form>
        </div>

      
      <div className='feed__option'>
      <div className='option'>
        <FcAddImage style={{scale:"1.5"}}/>
        <span>Photo</span>
      </div>
      <div className='option'>
        <FcVideoCall style={{scale:"1.5"}}/>
        <span>Video</span>
      </div>
      <div className='option'>
        <FcCalendar style={{scale:"1.5"}}/>
        <span>Event</span>
      </div>
      <div className='option'>
        <FcViewDetails style={{scale:"1.5"}}/>
        <span>Write Artical</span>
      </div>
      </div>
      </div>
      <Post name="SaeB" description="this is test" massage="We can do any this using coding kwolagege" photoURL="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"/>
     







    </div>
  )
}

export default Feed