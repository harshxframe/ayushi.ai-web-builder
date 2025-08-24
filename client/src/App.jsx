import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Routers, Routes, Route, Link } from 'react-router-dom';
import Canvas from './pages/Canvas';
import NotFound from './pages/NotFound';
import PreviewWeb from './pages/PreviewWeb';

function App() {
 
  return (
    <>
    <Routers>
 <Routes>
        <Route path="/" element={<Canvas />} />
        <Route path="/error" element={<NotFound />} />
        <Route path='/preview' element={<PreviewWeb />} />
      </Routes>
    </Routers>
    </>
  )
}

export default App
