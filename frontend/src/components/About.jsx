import React from 'react'
import Title from './Title'

const About = () => {
  return (
    <div id="about" className='w-[1280px] flex gap-40 flex-col mb-52' >
        <Title title={"about."} content={"About my journey..."}/>
        <ul className='list-disc w-3/4 self-end'>
            <li className='mb-20'>
                <h3 className='mb-2 text-[#03045E] font-semibold text-2xl'>10/2020-7/2024</h3>
                <p className='text-[#03045E] text-2xl'>Bachelor of computer science and information technology, Hanoi University of Science - VNU</p>
            </li>
            <li className='mb-20'>
                <h3 className='mb-2 text-[#03045E] font-semibold text-2xl'>3/2023-9/2023</h3>
                <p className='text-[#03045E] text-2xl'>Intern AI Engineer, A Class Tech</p>
            </li>
            <li className='mb-20'>
                <h3 className='mb-2 text-[#03045E] font-semibold text-2xl'>3/2024-Present</h3>
                <p className='text-[#03045E] text-2xl'>Intern Software Engineer, TECHVIFY</p>
            </li>
        </ul>
    </div>

  )
}

export default About