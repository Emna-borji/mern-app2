import { INCREMENT, INCREMENTBY10 } from "../actions/types"

const initialState = {
    count : 0
}

const countReducer = (state = initialState, action)=>{
    switch (action.type) {
        case INCREMENT :
            return {...state, count : state.count+1}
        case INCREMENTBY10 : 
            return {...state, count : state.count+action.payload}
        default:
            return state
    }
}

export default countReducer