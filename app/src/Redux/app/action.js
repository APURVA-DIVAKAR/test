import axios from "axios"

export const SET_DATA="SET_DATA"
export const FETCH_DATA="FETCH_DATA"

export const setProducts=products=>{
    return{
        type: SET_DATA,
        payload: products
    }
}
export const fetchData=()=>{
    return async function (dispatch) {
        try{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            dispatch({
                type:FETCH_DATA,
                payload:res.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
    
}