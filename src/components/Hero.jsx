import React, { useState } from 'react'
import { HERO_CONTENT } from '../constants/index'
import ProfilePic from '../assets/profile.jpg'
import { motion } from 'framer-motion'
import { PiReadCvLogoLight } from "react-icons/pi";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Toggle the clicked state
    setClicked(!clicked);
    // Reset the clicked state after 400ms (matching the transition duration)
    setTimeout(() => {
      setClicked(false);
    }, 5000);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-center lg:pl-10">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col w-full items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Vedant Shah
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Web and App Developer
            </motion.span>
            <motion.a
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              href="https://drive.google.com/file/d/1QEXTPJ5CSPB3rfOIbriaie9e8qNJBJ8X/view?usp=sharing"
              onClick={handleClick}
              className="relative flex items-center justify-center mt-5 px-3 py-3 text-white w-20 h-8 border-2 border-white rounded-lg overflow-hidden"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: clicked ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 origin-left bg-white"
              />
              <PiReadCvLogoLight
                className="z-10"
                size={18}
                color={clicked ? 'black' : 'white'}
              />
              <span
                className={`relative flex-row items-center justify-center pl-1 z-10 text-center ${
                  clicked ? 'text-black' : 'text-white'
                } transition-colors duration-300`}
                style={{ fontSize: 18 }}
              >
                CV
              </span>
            </motion.a>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl font-light py-6 tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-96 rounded-lg"
              src={ProfilePic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
