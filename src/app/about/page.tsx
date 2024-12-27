"use client"
import { useState } from "react"

export default function About() {
    // Single state to track which section is open
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Function to toggle active section
    const handleButtonClick = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <section className="bg-black text-white">
            <div className="flex justify-center p-10 sm:p-8">
                <h1 className="font-extrabold text-4xl p-2 text-center">ABOUT ME</h1>
            </div>

            <div className="flex justify-center text-center border-x-2 border-y-2 rounded-md border-yellow-700 p-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
                <p className="text-center max-w-xl">
                    I am Laraib Tabbassum, a passionate and driven Full-Stack Web Developer. My journey in web development started one year ago at GIAIC, where I learned HTML, CSS, JavaScript, TypeScript, and Tailwind CSS. I am also currently pursuing a course in Artificial Intelligence. I am constantly improving my skills and staying up-to-date with the latest technologies to build modern, high-performance web applications. My goal is to blend creativity with technical expertise to deliver exceptional user experiences.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-8 font-bold p-8 text-center">
                {/* Button to toggle Skills */}
                <div>
                    <button className="hover:text-orange-200" onClick={() => handleButtonClick('skills')}>
                        Skills
                    </button>
                    {activeSection === 'skills' && (
                        <div>
                            <ul className="list-disc text-left pl-6">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Button to toggle Education */}
                <div>
                    <button className="hover:text-orange-200" onClick={() => handleButtonClick('education')}>
                        Education
                    </button>
                    {activeSection === 'education' && (
                        <div>
                            <ul className="list-disc text-left pl-6">
                                <li>B.com</li>
                                <li>Virtual Assistant of Amazon Private Label</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Button to toggle Certifications */}
                <div>
                    <button className="hover:text-orange-200" onClick={() => handleButtonClick('certification')}>
                        Certification
                    </button>
                    {activeSection === 'certification' && (
                        <div>
                            <ul className="list-disc text-left pl-6">
                                <li>Certified in Web Development</li>
                                <li>Certified in AI Basics</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
