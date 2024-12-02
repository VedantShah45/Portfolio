import React from 'react'
import {FaLinkedin,FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from 'react-icons/fa6'

export default function Navbar() {
  return (
    <nav className='mb-8 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src="" alt="" />
        </div>
        <div className='m-6 text-2xl flex items-center justify-center gap-4'>
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}
