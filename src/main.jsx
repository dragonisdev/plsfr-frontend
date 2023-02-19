import React, {FC} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'

import Search from '../pages/Search'

import styled from "styled-components";
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import FAQ from '../pages/FAQ'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Search' element={<Search/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      
  </BrowserRouter>,
)
