import { INCREMENT, INCREMENTBY10 } from "./types"

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
