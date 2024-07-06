import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from "../redux/actions/authActions"
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
  const dispatch = useDispatch()
  const {user, isLoading, isError} = useSelector(state=>state.authReducer)
  useEffect(()=>{
    if(!user)
      dispatch(getMe())
  }, [user])
  if(user)
    return (
      <>welcome <span className="text-primary">{user.name}</span></>
    )
  if(isError)
    return <Navigate to="/login"/>
  if(isLoading) {
    return <div>
      loading...
    </div>
  }
}

export default Dashboard