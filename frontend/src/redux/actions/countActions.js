import { INCREMENT, INCREMENTASYNC, INCREMENTBY10, SETLOADING } from "./types"

export const increment = ()=>{
    return {
        type : INCREMENT
    }
}

export const incrementBy10 = ()=>{
    return {
        type : INCREMENTBY10, 
        payload : 10
    }
}

export const incrementAsync = ()=> {
    return async(dispatch)=> {
        dispatch({type : SETLOADING}) 
        await new Promise(resolve=>setTimeout(resolve, 2000))
        dispatch({type : INCREMENTASYNC})
    }
}
