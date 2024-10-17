import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact () {
    return ( 
   <div className=" bg-black text-white ">
   <div className="text-center font-bold p-10 text-4xl">
        <h1>Contact</h1>
        </div>
        <div className="text-center px-4">
        <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        </div>
         <div className="flex items-left gap-40 m-8 ml-96 ">
            <a href="https://github.com/laraib28 " target='-blank' rel="noopener noreferrer" > 
            <Image src="/git-link.webp" alt="GitHub" width={50} height={50}/>
            </a>
            <a href="https://www.linkedin.com/in/laraib-adnan-744955252/" target='-blank' rel="noopener noreferrer">
            <Image src="/linkdin.png"  alt="linkedin"  width={40} height={50} />
            </a>
            <div className=' flex justify-center items-start gap-5'>
                <label htmlFor="email" className= "text-white block mb-2 font-medium">Your email</label>
                <input type="email" id='emial' placeholder='abc@gmail.com'className=' border-orange-600 rounded-lg border-4 divide-x-2 ' /> 
                <label htmlFor="Message" className= "text-white block mb-2 text-sm font-medium">Message</label>
                <input type="Message" id='Message' placeholder='Message ' required className= " border-orange-600 rounded-lg border-4 divide-x-2" /> 
            <div>
                <button className="items-end bg-orange-600 rounded-lg  p-2">Message</button>
            </div>
            </div>

        </div>
    </div>
)}