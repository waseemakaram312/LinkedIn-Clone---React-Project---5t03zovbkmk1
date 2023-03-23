import { Avatar } from '@material-ui/core'
import React from 'react'
import { FiMoreVertical } from "react-icons/fi";
import { AiFillLike} from "react-icons/ai";
import { FaRegCommentDots} from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { BsSend} from "react-icons/bs";
import "../styles/post.css"

function Post({name, description, massage, photoURL}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <div className='post__headerLeft'>
                <Avatar src='photoURL'/>
                <div className='post_profile_details'>
                    <h3><b>{name}</b></h3>
                    <p> {description}</p>
                </div>

            </div>
           <FiMoreVertical/>

        </div>
        <div className='post__body'>
            <p>{massage}</p>
        </div>
       <div className='post__footer'>
        <div className='post__footer__option'>
             <AiFillLike/> 
             <span>Like</span>  
        </div>
        <div className='post__footer__option'>
             <FaRegCommentDots/> 
             <span>Comment</span>  
        </div>
        <div className='post__footer__option'>
             <BiRepost/> 
             <span>Report</span>  
        </div>
        <div className='post__footer__option'>
             <BsSend/> 
             <span>Send</span>  
        </div>

       </div>
    </div>
  )
}

export default Post