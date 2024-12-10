"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import coursedate from "../data/coding_courses.json"
// import { button } from "framer-motion/client";

function Featuredcourses(){
    return (
        <div className="py-12 bg-slate-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">Learn  With  The  Best</p>
            </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {coursedate.courses.map((course) => (
                <div key={course.id} className=" rounded-lg p-6">
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">

                <h3 className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">{course.name}</h3> 
                <p className="text-sm text-white-600 dark:text-neutral-400">{course.description}</p>
                <h2 className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">{course.price}</h2>
                    </BackgroundGradient>
          </div>
        ))}
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"} className="px-4 py-2 rounded border ">
            <button>
            View All courses
            </button>
            </Link>

        </div>
      
    </div>
    </div>
  )
} 


export default Featuredcourses;
