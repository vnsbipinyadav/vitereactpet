import React from 'react'
import Header from '../components/Header'
import About from './About'
import Service from './Service'
import Price from '../components/Price'
import Team from '../components/Team'
import Features from '../components/Features'


const Home = () => {
  return (
    <>
    <Header/>
    <About/>
    <Service/>
    <Price/>
    <Team/>
    <Features/>

    </>
  )
}

export default Home