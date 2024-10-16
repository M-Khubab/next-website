import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
          <h2 className='text-white text-2xl font-bold'>About US</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci voluptatem  soluta suscipit aspernatur doloremque, necessitatibus cumque officiis.</p>
        </div>
        <div>
          <h2 className='text-white text-2xl font-bold'>Quick Links</h2>
          <ul>
            <li className='flex flex-col'>
              <a href='#' className='hover:text-white transition-colors duration-300'>Home</a>
              <a href="#" className="hover:text-white transition-colors duration-300">About</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Courses</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-white text-2xl font-bold'>Follow US</h2>
          <ul>
          <li className='flex flex-col'>
            <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
            <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
          </li>
          </ul>
        </div>
        <div>
          <h2 className='text-white text-2xl font-bold'>Contact Us</h2>
          <ul>
            <li className='flex flex-col'>
              <a href="#" className="hover:text-white transition-colors duration-300">Email</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Phone</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Address</a>
            </li>
          </ul>
        </div>
      </div>
      <p className='text-center py-4'>© 2024 Your Company. All rights reserved.</p>
    </div>
  )
}

export default Footer;
