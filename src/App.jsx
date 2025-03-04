import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './component/Login';
import About from './component/About';
import Experience from './component/Experience';
import Portfolio from './component/Portfolio';
import Fun from './component/Fun';
import { AppProvider } from './AppContext';

function App() {

  return (
    <AppProvider>
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path='/home' element={<About />} />
				<Route path="/experience" element={<Experience />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path="/fun" element={<Fun />} />
			</Routes>
		</Router>
	</AppProvider>
  )
}

export default App
