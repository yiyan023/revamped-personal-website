import React, { useEffect, useRef } from 'react'
import '../styling/Story.css'

const Story = () => {
	const storyRef = useRef(null);
	useEffect(() => {
        const resizeDiv = () => {
			storyRef.current.style.height = `calc(${window.innerHeight}px - 50px)`;
			storyRef.current.style.width = `80%`;
		  };

		resizeDiv();

        window.addEventListener("resize", resizeDiv);
        return () => window.removeEventListener("resize", resizeDiv);
    }, [storyRef.current]);

  return (
	<div className='story' ref={storyRef}>
	  <h1>my story</h1>
	  <p>i grew up loving puzzles. whether it was rubik’s cubes, sudoku, or ted riddles, i loved the thrill and ambiguity of problem-solving. this passion led me to pursue software development and fuel my interests into real impact. i grew to love coding and building, and i’m looking to push my limits.</p>
	  <p>i faced a lot of backlash for growing up in non-traditional backgrounds. on top of building my technical skills, i want to help minority groups dream big and break into tech. i’ve impacted 1000+ hackers as an organizer at hack the north, and 300+ gender minority students as a uwaterloo women in computer science (wics) executive.</p>
	</div>
  )
}

export default Story
