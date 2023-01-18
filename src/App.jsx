import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'


import styled from "styled-components";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
        <HeroSection />
    </Layout>
  )
}

export default App
