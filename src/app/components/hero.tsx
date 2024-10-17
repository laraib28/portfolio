"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <main className="bg-black text-white">
            <div className="flex flex-col md:flex-row items-center px-6 mx-0 space-y-0  ">
                {/* Text Section */}
                <div className="flex-1 mb-32 md:w-1/2 md:pr-10 sm:pr-10">
                    <h1 className="py-10 max-w-md text-4xl font-bold text-left text-orange-400">
                        Hello! I Am
                    </h1>
                    <div className="text-4xl font-bold text-orange-200 mb-4">
                        <Typewriter 
                            options={{
                                strings: ['Laraib Tabbassum Full Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="text-left w-96 m-10 mb-48">
                        I am a dedicated Full Stack Web Developer with a strong focus on building 
                        responsive, dynamic web applications. My expertise lies in HTML, CSS, Tailwind CSS,
                        JavaScript, and TypeScript, which enables me to create intuitive and efficient user experiences.
                        With a commitment to writing clean, maintainable code, I continuously strive to
                        deliver high-quality solutions. Currently, I am expanding my skills by learning Next.js, which allows me to develop scalable,
                        high-performance web applications that meet modern industry standards.
                    </p>
                    <a href="cv.pdf" className="flex justify-self-center px-40 py-0">
                        <button className="inline-flex rounded-full text-white font-semibold bg-orange-600 border-0 py-2 px-6 hover:bg-orange-400 text-lg border-white">
                            Resume
                        </button>
                    </a>
                </div>
                
                {/* Image Section */}
                <div className="flex-1 flex justify-end md:w-1/2 mr-16">
                    <div className="rounded-lg shadow-lg mb-16">
                        <img src="\pic.jpg" height="100" width="250" alt="hero" />
                    </div>
                </div>
            </div>
        </main>
    );
}
