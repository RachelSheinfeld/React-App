import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, RouterProvider } from 'react-router'
import AppRouter from './Router/AppRouter'
import Header from './components/Header'
import { Router } from 'react-router'
import router from './Router/router'

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
