import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { useAppContext } from '../AppContext'
import './styling/Login.css'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const { setSession } = useAppContext();
	const navigate = useNavigate();
	const buttonRef = useRef(null);
	const inputRef = useRef(null);
	const [ input, setInput ] = useState("")

	const login = () => {
		setSession(input);
		navigate('/home');
	}

	useEffect(() => {
		inputRef.current?.focus();
	}, [])

	useEffect(() => {
		const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                buttonRef.current.click();
            }
        };

		window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
	}, [])

	return (
		<div>
			<Navbar />
			<h1>hi there</h1>
			<div className='login-div'>
				<input type="text" placeholder="what is your name?" value={input} onChange={(e) => {setInput(e.target.value)}} ref={inputRef}/>
				<button className="login-btn" onClick={login} ref={buttonRef}><FaArrowRight /></button>
			</div>
		</div>
	)
}

export default Login
