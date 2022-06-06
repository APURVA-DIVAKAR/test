import React from 'react'
import { useSelector } from 'react-redux'

const PostItem = () => {
    
    const post = useSelector(state=>state.data.data)
    const DATA = post.map(el=>{
        const{id,title,body}= el;
       
        return(
            <div key={id}>
            <div style={{border:'1px solid gray',textAlign:"center"}}>
               <h4>{title}</h4>
               <p>{body}</p>
            </div>
        </div>
        )
    })
   
  return <>{DATA}</>
}

export default PostItem