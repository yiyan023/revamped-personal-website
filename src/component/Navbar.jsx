import React, { useEffect, useRef, useState } from 'react'
import Oshawott from '../assets/imgs/oshawott.png'
import './styling/Navbar.css'
import { useAppContext } from '../AppContext'
import { AiFillMoon, AiFillSun } from 'react-icons/ai';
import { FaSuitcase } from 'react-icons/fa';
import { BiSolidParty } from "react-icons/bi";
import { MdBrush } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const { light, toggleLight } = useAppContext();
	const [small, setSmall] = useState(() => {
		return JSON.parse(localStorage.getItem("small")) ?? window.innerWidth < 500;
	});
	const navigate = useNavigate();
	const location = useLocation();
	const expRef = useRef(null);
	const portRef = useRef(null);
	const funRef = useRef(null);

	const navigateExperience = () => {
		navigate('/experience')
	}
	const navigateHome = () => {
		navigate('/home')
	}

	const navigatePortfolio = () => {
		navigate('/portfolio')
	}

	const navigateFun = () => {
		navigate('/fun')
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 500) {
				setSmall(true);
			} else {
				setSmall(false)
			}
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [])

	useEffect(() => {
		localStorage.setItem("small", JSON.stringify(small));
	}, [small]);

	useEffect(() => {
		switch(location.pathname) {
			case '/experience':
				if (expRef.current) {
					expRef.current.style.color = light ? '#184887' : '#B9E5FF'
					expRef.current.style.textDecoration = 'underline'
				}

				break;
			
			case '/portfolio':
				if (portRef.current) {
					portRef.current.style.color = light ? '#184887' : '#B9E5FF'
					portRef.current.style.textDecoration = 'underline'
				}

				break;
			
			case '/fun':
				if (funRef.current) {
					funRef.current.style.color = light ? '#184887' : '#B9E5FF'
					funRef.current.style.textDecoration = 'underline'
				}

				break;
		}
	}, [location, light])

	return (
		<div className='nav-container'>
		<div className='links-div'>
			<img src={Oshawott} />
			<a onClick={navigateHome}><b>{small ? "yh" : "yiyan huang"}</b></a>
			<a onClick={navigateExperience} ref={expRef}>{small ? <FaSuitcase /> : "experience"}</a>
			<a onClick={navigatePortfolio} ref={portRef}>{small ? <MdBrush /> : "portfolio"}</a>
			<a onClick={navigateFun} ref={funRef}>{small ? <BiSolidParty /> : "for fun"}</a>
		</div>
		<button onClick={toggleLight}>
			{light ? (
				<AiFillSun />
			): (
				<AiFillMoon />
			)}
		</button>
		</div>
	)
}

export default Navbar
