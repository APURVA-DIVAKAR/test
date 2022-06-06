import React,{useEffect} from 'react'
import PostItem from '../Components/PostItem';
import { fetchData } from '../Redux/app/action';
import {useDispatch,useSelector} from 'react-redux';


const Posts = () => {
    const dispatch = useDispatch();
    useEffect(()=>{       
        dispatch(fetchData())
    },[]);
    const post = useSelector(state=>state.data.data)
    const { token, isLoading, isError } = useSelector((state) => state.isAuth);
    if (isLoading) {
        return (
          <div>
            Loading....
          </div>
        );
      }
      if (isError) {
        return <h1>Oops... Something went wrong</h1>;
      }
    
    if(post.length===0 ){
        return <div>...Loading</div>
     }
 
      return (
    <div>
        <PostItem/>
    </div>
  )
      
}

export default Posts