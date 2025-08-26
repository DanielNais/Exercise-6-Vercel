import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader'

function App() {

  return (
    <div style={{display: "grid", placeItems: "center"}}> 
      <Loader />
    </div>
  )
}

export default App