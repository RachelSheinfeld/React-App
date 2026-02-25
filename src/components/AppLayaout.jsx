import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

export const AppLayaout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
