import React from 'react';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes >
        <Route exact path = "/" element = { <Home /> }/> 
        <Route path = "/about" element = { <About /> }/> 
        <Route path = "/service"element = { <Service /> }/> 
        <Route path = "/contact" element = { <Contact /> }/>
        </Routes> 
  <Footer/>
    </>
  )
}

export default App;