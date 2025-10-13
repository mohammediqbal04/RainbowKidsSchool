import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Curriculam from './pages/Curriculam'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import { LoaderOne } from "./components/ui/loader.jsx"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // simulate loading for 2.5 seconds (you can adjust this)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#fdf8ff]">
        <LoaderOne />
      </div>
    )
  }

  return (
    <Router>
      <Navbar />
      <div className="pt-[85px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curriculam" element={<Curriculam />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
