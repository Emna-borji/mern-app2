import React from 'react'
import { increment, incrementAsync, incrementBy10 } from './redux/actions/countActions'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.countReducer.count)
    const loading = useSelector((state)=>state.countReducer.loading)
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(incrementBy10())}>+10</button>
        <button onClick={()=>dispatch(incrementAsync())}>{loading ? "Please wait..." : "async +"}</button>
        <p>{count}</p>
    </div>
  )
}

export default Counter