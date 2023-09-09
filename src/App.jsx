import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  function chanceCard(){
    randNum = Math.floor(Math.random*6)+1
    return(
      <button onClick={handleClick}><img/></button>
    )
  }

  return (
    <>
    
    </>
  )
}

export default App
