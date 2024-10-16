import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function Herosection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center'>
      <Spotlight className='top-40 left-0 md:left-60 md:top-20 fill=white'/>
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to to-neutral-400'>Become a Full-Stack Developer Today!</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Embark on your full-stack web development journey. Gain essential skills
             in front-end and back-end technologies, enabling you to build robust, interactive applications that enhance user experiences and solve real-world problems.</p>
             <div className='m-4'>
                <Link href={"/courses"}>
                <Button borderRadius='1.75rem' className='bg-black text-white border-neutral-100'>
                  Explore courses
                </Button>
                </Link>
             </div>
      </div>
    </div>
  )
}

export default Herosection
