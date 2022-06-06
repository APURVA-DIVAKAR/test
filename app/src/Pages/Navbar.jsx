import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
    const{token} =useSelector((state) => state.isAuth);
  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
        <Link style={{textDecoration:"none",color:"black"}} to='/'>Home</Link>
        <Link  style={{textDecoration:"none",color:"black"}} to='/posts'>Posts</Link>
        <div>
         {token !=="" && <h4>{token}</h4>}
        </div>
    </div>
  )
}

export default Navbar