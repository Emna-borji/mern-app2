import React from 'react'
import { increment, incrementBy10 } from './redux/actions/countActions'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.countReducer.count)
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(incrementBy10())}>+10</button>
        <button>async 10</button>
        <p>{count}</p>
    </div>
  )
}

export default Counter