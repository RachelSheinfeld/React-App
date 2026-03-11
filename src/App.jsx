import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider, useDispatch } from 'react-redux'
import Massege from './components/Massege'
import ShowInput from './components/ShowInput'
import Store from './state/Store'



function App() {
  
  return (
    
    <Provider store={Store}>
      <>
      <Massege/>
      <ShowInput/>
      </>
    </Provider>
     
    
  )
}

export default App
