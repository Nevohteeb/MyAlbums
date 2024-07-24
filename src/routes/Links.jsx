import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home'

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Links