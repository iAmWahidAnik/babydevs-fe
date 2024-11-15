"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
    const pathName = usePathname();
  return (
    <div className='common-width backdrop-blur-md bg-white/30 text-white rounded-t-sm mb-5'>
      <div className='flex items-center justify-between p-5'>
        <div>
          <Link href={"/"}><Image width={70} height={70} src={"https://i.ibb.co.com/fY813Fk/babydevs1.png"}></Image></Link>
        </div>

        <ul className='flex gap-5 uppercase tracking-wider sour'>
          <Link className={pathName === "/" && "text-green-500"} href={"/"}><li>Home</li></Link>
          <Link className={pathName === "/services" && "text-green-500"} href={"/services"}><li>Services</li></Link>
          <Link className={pathName === "/portfolio" && "text-green-500"} href={"/portfolio"}><li>Portfolio</li></Link>
          <Link className={pathName === "/about" && "text-green-500"} href={"/about"}><li>About</li></Link>
          <Link className={pathName === "/contact" && "text-green-500"} href={"/contact"}><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
