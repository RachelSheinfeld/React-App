import React from 'react'
import { useSelector } from 'react-redux'

const Massege = () => {
    const mass=useSelector((state)=>state.inputSlice.value);
  return (
    <>
    <h1>your Massege </h1>
    <h3>{mass}</h3>
    </>
  )
}

export default Massege