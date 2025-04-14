import React from 'react'
import { useAppContext } from '../../AppContext';
import '../styling/ExperienceTemp.css'

type ExperienceProps = {
	companyName: string;
	role: string;
	location: string;
	date: string;
	description: string;
	darkImg: string;
	lightImg: string;
  };
  
  const Experience = ({
	companyName,
	role,
	location,
	date,
	description,
	darkImg,
	lightImg
  }: ExperienceProps) => {
	const { light } = useAppContext();
	return (
	  <div className='exptemp'>
		<div>
			<img src={light ? darkImg : lightImg}/>
		</div>
		<div>
			<h2>{companyName}</h2>
			<p><i>{role}</i></p>
			<p>{location} | {date}</p>
			<p>{description}</p>
		</div>
	  </div>
	);
  };
  

export default Experience
