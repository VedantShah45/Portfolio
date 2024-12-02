import React from 'react'
import { ACHIEVEMENTS } from '../constants'
import { motion } from 'framer-motion'

export default function Achievements() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className='my-20 text-center text-4xl'
            >
            Achievements
        </motion.h1>
        <div>
            {ACHIEVEMENTS.map((achievement,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'
                    >
                        <p className='mg-2 text-md text-neutral-400'>{achievement.year}</p>
                    </motion.div>
                    <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                        className='w-full max-w-xl lg:w-3/4'
                    >
                        <h6 className='mb-2 font-semibold'>
                            {achievement.title}
                            <span className='text-sm text-purple-400'>
                                {" "+achievement.company}
                            </span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>{achievement.description}</p>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}
