import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
      </Routes>
    </HashRouter>
  )
}

export default App