import React from 'react'
import {  useDispatch } from 'react-redux'
import{setValue} from '../state/Slice'

const ShowInput = () => {
    const dispatch=useDispatch();
  return (
      <>    
      <input onChange={(e)=>dispatch(setValue(e.target.value))} placeholder="type"/>
      </>
 )
}

export default  ShowInput