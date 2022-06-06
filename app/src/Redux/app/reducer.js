import {SET_DATA,FETCH_DATA} from'./action'

const initState={
    data:[ ],
}


export const dataReducer=(state=initState,{type,payload})=>{
    switch(type){
        case SET_DATA:
            return {
                ...state,
                data: payload
            }
            case FETCH_DATA:
                return {
                    ...state,
                    data: payload
                }
        default:
            return state    


    }
}


