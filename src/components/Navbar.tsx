// next.js mai react hooks use karnay kay lia first "use client" likhna parta hai.
"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/utills/cn";
import Link from "next/link";

function Navbar() {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-black rounded-full")} >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active}  item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
         <div className="flex flex-col space-y-4 text-sm ">
         <HoveredLink href="/courses">All Courses</HoveredLink>
         <HoveredLink href="/">HTML</HoveredLink>
         <HoveredLink href="/">CSS</HoveredLink>
         <HoveredLink href="/">JavaScript</HoveredLink>
         <HoveredLink href="/">Next.js</HoveredLink>
         <HoveredLink href="/">SQL</HoveredLink>
         <HoveredLink href="/">Node.js</HoveredLink>
         </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact US"></MenuItem> 
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
