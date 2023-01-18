import React, {FC} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

import Search from '../pages/Search'

import styled from "styled-components";



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>}></Route>
        <Route path='/Search' element={<Search/>}></Route>
        
      </Routes>
      
  </BrowserRouter>,
)
