// import { FaAutoprefixer } from 'react-icons/fa';
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import {Routes, Route } from 'react-router-dom'
// import { Routes,Route} from '@chakra-ui/react'
function App() {

  return (
    <>
    
    <Navbar/>
    
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    

    </>
  )
}

export default App
