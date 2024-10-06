"use client"
import Link from "next/link"
import { useState } from "react"
  export default function Header  () {
    const [isOpen, setIsOpen] =useState(false)
    return (
        <header className="flex justify-between  bg-orange-400 text-black  " >
            
            <img src="l.png" width={70} height={40}/>
        
             
            <nav className=" ">
                <ul className="flex justify-center gap-16 px-14 py-5 " >
                    <li className=" hover:bg-orange-300  hover:cursor-pointer  hover:scale-125 hover"> <Link href="/"> Home</Link></li>
                    <li className=" hover:bg-orange-300  hover:cursor-pointer hover:scale-125  hover"> <Link href="/about"> About</Link></li>
                    <li className=" hover:bg-orange-300  hover:cursor-pointer  hover:scale-125 hover"> <Link href="/contact"> contact</Link></li>
                    <li className=" hover:bg-orange-300  hover:cursor-pointer  hover:scale-125 hover"> <Link href="/project"> Project</Link></li>
                </ul>
            </nav>
            <div className="md:hidden flex items-center">
                <button onClick={()=>{
                    setIsOpen
                }

                }>

                </button>
            </div>
            
        </header>
        
    )
} 