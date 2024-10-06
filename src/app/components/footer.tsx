import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <main className='bg-black text-white'>
      <div className='font-bold text-center '>
        <h1>Thanks for Visiting</h1>
      </div>
      <div>
      <p>"Thank you for visiting my portfolio. If you're interested in collaborating or have any questions, feel free to reach out via the contact section. I'm always open to exciting new opportunities and projects."</p>
      </div>
      
      <div className="flex items-left gap-40 m-8 ml-96 ">
            <a href="https://github.com/laraib28 " target='-blank' rel="noopener noreferrer" > 
            <Image src="/git-link.webp" alt="GitHub" width={30} height={30}/>
            </a>
            <a href="https://www.linkedin.com/in/laraib-adnan-744955252/" target='-blank' rel="noopener noreferrer">
            <Image src="/linkdin.png"  alt="linkedin"  width={30} height={30} />
            </a>
       </div>
    </main>
  )
}

export default Footer
