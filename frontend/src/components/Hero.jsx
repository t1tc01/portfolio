import React from 'react'

const Hero = () => {

  return (
    <div id='home' className='h-screen w-[1280px] flex items-center justify-center overflow-visible'>
      <div className='w-full flex-col'>
        <p className='text-[#03045E] text-3xl mb-4'>Hello, I'm Hoang,</p>
        <h1 className='text-[#03045E] text-8xl font-extrabold mb-7'>Software</h1>
        <h1 className='text-[#03045E] text-8xl font-extrabold mb-4'>Engineer</h1>
        <p className='text-[#03045E] text-3xl mb-4'>based in Vietnam</p>
        <a href="./assets" download="resume.pfg"  className='px-10 py-3 bg-[#F5EE84] after:rounded-md after:border-2 after:border-black relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0  after:z-0 hover:after:-translate-x-1.5 hover:after:-translate-y-1.5'>
          <a className='z-10 relative'>Résume</a>
        </a>
        
      </div>
      <div className='flex w-full justify-center items-center relative'>
        <img src="./assets/Avatar/Vector.png" alt="" />
        <img src="./assets/Avatar/Group 10.png" alt="" className='absolute bottom-0 left-12'/>
        <img src="./assets/Avatar/Group_6.png" alt="" className='absolute top-0 right-12'/>
        <img src="./assets/Avatar/myavt2.png" alt="My Avatar" className='absolute'/>
      </div>
    </div>
    
  )
}

export default Hero