import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Newsboard } from './Components/Newsboard'

const App = () => {
  let [category,setCategory]= useState("technology");
  console.log(import.meta.env.VITE_API_KEY)
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default App
