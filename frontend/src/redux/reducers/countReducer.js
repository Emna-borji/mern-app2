import { INCREMENT, INCREMENTASYNC, INCREMENTBY10, SETLOADING } from "../actions/types"

const initialState = {
    count : 0,
    loading : false
}

const countReducer = (state = initialState, action)=>{
    switch (action.type) {
        case INCREMENT :
            return {...state, count : state.count+1}
        case INCREMENTBY10 : 
            return {...state, count : state.count+action.payload}
        case SETLOADING :
            return {...state, loading : true}
        case INCREMENTASYNC : 
            return {...state, count : state.count+1, loading : false}
        default:
            return state
    }
}

export default countReducer