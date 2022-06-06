import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Posts from './Posts'
import ReqAuth from './ReqAuth'

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}>  </Route>
        <Route path='/posts' element={
            <ReqAuth>
                <Posts/>
            </ReqAuth>
        }></Route>
    
        </Routes>
    </div>
  )
}

export default AllRoutes