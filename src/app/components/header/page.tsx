"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { FaBars } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Toggle the mobile menu
  const onClickHandler = () => {
    setIsOpen(!isOpen) // This will toggle between true and false
  }

  return (
    <header className="flex justify-between items-center bg-orange-400 text-black p-4">
      {/* Mobile Menu Button */}
      <button title='menu button' onClick={onClickHandler} className="md:hidden">
        <FaBars size={24} className="ml-3" />
      </button>

      {/* Logo Section */}
      <div className="flex items-center">
        <Image src="/l.png" alt="logo" width={40} height={40} />
      </div>

      {/* Main Navigation for Desktop */}
      <nav className="hidden md:block">
        <ul className="flex justify-center gap-8">
          <li className="hover:bg-orange-300 hover:cursor-pointer hover:scale-125 px-2">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-orange-300 hover:cursor-pointer hover:scale-125 px-2">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:bg-orange-300 hover:cursor-pointer hover:scale-125 px-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:bg-orange-300 hover:cursor-pointer hover:scale-125 px-2">
            <Link href="/project">Project</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-orange-400 md:hidden">
          <ul className="flex flex-col px-4 gap-6 py-4">
            <li className="hover:bg-orange-300 hover:cursor-pointer hover:scale-110">
              <Link href="/" onClick={onClickHandler}>Home</Link>
            </li>
            <li className="hover:bg-orange-300 hover:cursor-pointer hover:scale-110">
              <Link href="/about" onClick={onClickHandler}>About</Link>
            </li>
            <li className="hover:bg-orange-300 hover:cursor-pointer hover:scale-110">
              <Link href="/contact" onClick={onClickHandler}>Contact</Link>
            </li>
            <li className="hover:bg-orange-300 hover:cursor-pointer hover:scale-110">
              <Link href="/project" onClick={onClickHandler}>Project</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
