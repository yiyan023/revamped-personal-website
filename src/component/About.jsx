import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useAppContext } from '../AppContext'
import './styling/About.css'
import Yiyan from '../assets/imgs/yiyan.png'

const About = () => {
	const { session } = useAppContext();
	const [ idx, setIdx ] = useState(0);
	const [ cIdx, setCIdx ] = useState(0);
	const [ displayedText, setDisplayedText ] = useState("")

	const rotatedText = ["software developer", "dreamer", "innovator"];


	useEffect(() => {
		let charTimer;
	
		if (cIdx < rotatedText[idx]?.length) {
			charTimer = setTimeout(() => {
				setDisplayedText((prev) => prev + rotatedText[idx][cIdx]);
				setCIdx(cIdx + 1);
			}, 100); 
		} else {
			const wordTimer = setTimeout(() => {
				setIdx((prevIdx) => (prevIdx + 1) % rotatedText.length);
				setDisplayedText("");
				setCIdx(0);
			}, 1500);
	
			return () => clearTimeout(wordTimer);
		}
	
		return () => clearTimeout(charTimer);
	}, [idx, cIdx]);
	
	

	return (
		<div className='about'>
			<div className='info'>
				<Navbar />
				<h1>hi <span className='highlight'>{session ? session : "there"}</span> 👋, i'm <span className='highlight'>yiyan</span></h1>
				<h3 className='roles'>{displayedText}</h3>
				<p className='links'>
					<a target="_blank" href='https://drive.google.com/file/d/13hMotHEbqZqr-Rs-L3cPDaQ0vRvZuK5n/view?usp=sharing'>cv</a> · <a target="_blank" href='https://www.linkedin.com/in/yiyanhh/'>linkedin</a> · <a target="_blank" href='mailto:y84huang@uwaterloo.ca'>email</a> · <a target="_blank" href='https://github.com/yiyan023'>github</a>
				</p>
				<p className='interests'>k-drama, pokemon & badminton enthusiast</p>
			</div>
			<div className='img'>
				<img src={Yiyan}/>
			</div>
		</div>
	)
}

export default About
