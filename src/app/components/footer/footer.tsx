import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <main className='bg-black text-white p-6'>
      {/* Title Section */}
      <div className='font-bold text-center'>
        <h1 className='text-2xl sm:text-3xl'>Thanks for Visiting</h1>
      </div>

      {/* Text Section */}
      <div className='text-center max-w-md mx-auto mt-4'>
        <p className='text-sm sm:text-base'>
          "Thank you for visiting my portfolio. If you're interested in collaborating or have any questions, feel free to reach out via the contact section. I'm always open to exciting new opportunities and projects."
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-10 mt-8">
        <a href="https://github.com/laraib28" target='_blank' rel="noopener noreferrer">
          <Image src="/git-link.webp" alt="GitHub" width={30} height={30} />
        </a>
        <a href="https://www.linkedin.com/in/laraib-adnan-744955252/" target='_blank' rel="noopener noreferrer">
          <Image src="/linkdin.png" alt="LinkedIn" width={30} height={30} />
        </a>
      </div>
    </main>
  )
}

export default Footer
