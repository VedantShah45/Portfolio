import React from 'react'
import {FaLinkedin,FaGithub} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className='mb-8 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src="" alt="" />
        </div>
        <div className='m-6 text-2xl flex items-center justify-center gap-4'>
            <a href="https://www.linkedin.com/in/vedantshah45?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
            <a href="https://github.com/VedantShah45"><FaGithub /></a>
            <a href="https://leetcode.com/u/VedantShah45/"><SiLeetcode /></a>
        </div>
    </nav>
  )
}
