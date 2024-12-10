import Footer from '@/components/Footer'
import React from 'react'


const page = () => {
  return (
    <div className='bg-black text-white text-center items-center justify-center mt-40 p-5 flex flex-col'>
    <h1 className='text-4xl font-bold pb-5'>Contact Us</h1>
    <p className='text-xl text-wrap pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci voluptatem <br />  soluta suscipit aspernatur doloremque, necessitatibus cumque officiis </p>
    <input type="text" placeholder="Enter your Email" className='rounded-lg p-2 w-3/6 bg-zinc-900 mt-6' />
    <input type="text" placeholder="Enter your Massage" className='rounded-lg p-2 w-3/6 h-36 bg-zinc-900 mt-5 text-start' />
    <button className='rounded-lg p-2 w-3/6 bg-zinc-900 mt-5 mb-44'>Submit</button>
    <Footer/>
    </div>
  )
}

export default page