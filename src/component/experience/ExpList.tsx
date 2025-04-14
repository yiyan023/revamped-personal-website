import React from 'react'
import { ExperienceJSON } from './ExpInfo'
import ExperienceTemp from './ExperienceTemp'

const ExpList = () => {
	const experiences = ExperienceJSON
  return (
	<div>
    {experiences.map((experience) => (
      <ExperienceTemp
		companyName={experience["company"]}
		role={experience["role"]}
		location={experience["location"]}
		date={experience["date"]}
		description={experience["desc"]}
		darkImg={experience['dark']}
		lightImg={experience['light']}
	  />
    ))}
  </div>
  )
}

export default ExpList
