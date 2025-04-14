import React from 'react'
import About from './about/About'
import Navbar from './Navbar'
import Story from './about/Story'
import './styling/Home.css'

const Home = () => {
  return (
	<div className='home'>
	  <Navbar />
	  <About />
	  <Story />
	</div>
  )
}

export default Home
