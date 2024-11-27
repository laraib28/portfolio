"use client";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <main className="bg-black text-white">
            <div className="flex flex-col md:flex-row items-center px-6 mx-auto space-y-10 md:space-y-0 md:space-x-10 max-w-screen-lg">
                {/* Text Section */}
                <div className="flex-1 mb-32 md:w-1/2 md:pr-40 sm:px-6">
                    <h1 className="py-10 max-w-md text-3xl sm:text-4xl font-bold text-left text-orange-400">
                        Hello! I Am
                    </h1>
                    <div className="text-2xl sm:text-4xl font-bold text-orange-200 mb-4">
                        <Typewriter
                            options={{
                                strings: ['Laraib Tabbassum Full Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="text-left w-full md:w-96 mb-8 sm:mb-12">
                        "I am a Full Stack Web Developer skilled in HTML, CSS, Tailwind CSS, JavaScript, and TypeScript, focused on building responsive, dynamic applications. Currently, I’m expanding my expertise with Next.js to create scalable, high-performance solutions."
                    </p>
                    <a href="cv.pdf" className="flex justify-self-center px-0 md:px-40 py-0">
                        <button className="inline-flex rounded-full text-white font-semibold bg-orange-600 border-0 py-2 px-6 hover:bg-orange-400 text-lg">
                            Resume
                        </button>
                    </a>
                </div>
                
                {/* Image Section */}
                <div className="flex-1 flex justify-center md:justify-end md:w-1/2">
                    <div className="rounded-lg shadow-lg mb-20 sm:mb-0 sm:mt-10">
                        <Image src="/pic.jpg" height={100} width={150} alt="hero" className="object-cover" />
                    </div>
                </div>
            </div>
        </main>
    );
}
