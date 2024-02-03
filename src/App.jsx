import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Newsboard } from './Components/Newsboard'

const App = () => {
  let [category,setCategory]= useState("technology");
  
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default App
