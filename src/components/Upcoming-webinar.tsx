import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link'

const Upcomingwebinar = () => {
     const projects = [
        {
          title: "Stripe",
          description:
            "A technology company that builds economic infrastructure for the internet.",
          link: "https://stripe.com",
        },
        {
          title: "Netflix",
          description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
          link: "https://netflix.com",
        },
        {
          title: "Google",
          description:
            "A multinational technology company that specializes in Internet-related services and products.",
          link: "https://google.com",
        },
        {
          title: "Meta",
          description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
          link: "https://meta.com",
        },
        {
          title: "Amazon",
          description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
          link: "https://amazon.com",
        },
        {
          title: "Microsoft",
          description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
          link: "https://microsoft.com",
        },
      ];
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
           <div className='text-center'>
            <h2 className='text-base font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
            <p className='text-4xl font-bold pt-10'>ENHANCE YOUR CODING JOURNEY</p>
           </div>
           <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
           <div className='mt-10 text-center'>
            <Link href={"/"} className='px-4 py-2 rounded border'>
              View All Webinar
            </Link>
           </div>
        </div>
    </div>
  )
}

export default Upcomingwebinar
