import React from 'react'
import Navbar from './Navbar'
import ExpList from './experience/ExpList'
import './styling/Experience.css'

const Experience = () => {
  return (
	<div className='experience'>
		<Navbar />
	  	<ExpList />
	</div>
  )
}

export default Experience
