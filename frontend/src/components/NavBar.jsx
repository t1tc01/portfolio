import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillGitlab } from "react-icons/ai";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";


  
  
const NavBar = () => {
  return (
    <div className="  bg-[#FBF8CC] flex justify-between items-center w-[1280px] h-[100px] fixed top-0 text-[#03045E]" > 
        <div>
            <a href="#home" className='font-semibold'>Hoang Phan</a>
        </div>
        <ul className='flex justify-between gap-16'>
            <li>
                <a href="#home">Home</a>
            </li>
            <li><a href="#about">About</a></li>
            <li ><a href="#mywork">Work</a></li>
        </ul>

        <ul className='flex justify-between gap-6'>
            <li>
                <a href="https://github.com/t1tc01" target="_blank"><AiFillGithub /></a>
            </li>
            <li>
                <a href="https://gitlab.com/t1tc01" target="_blank"><AiFillGitlab/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/t1tc01/" target="_blank"><AiFillLinkedin/></a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar