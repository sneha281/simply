import React from 'react'
import './App.css'
import Blog from './pages/Blog/index.js'
import Home from './pages/Home/index.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
       
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />

            <Route exact path="/blog" element={<Blog/>} />
           
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

