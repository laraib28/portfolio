import Link from "next/link"
import Image from "next/image"
export default function Project (){
    return (
        
            <section className="max-w{1320} mx-auto bg-black text-white">             
                    <h1  className="text-center font-extrabold text-4xl py-5">PROJECTS</h1>   

                    <div className="max-w-{1320px} mx -auto grid lg:grid-col-3 md:grid-cols-2 sm:grid-cols-1 sm:items-center  gap-10  sm:px-8 md:px10">

                <div className="text-center  font-semibold shadow-lg rounded  hover:scale-125 duration-1000 md:">
                    {/* 45 Assigment */}
                    <div className="overflow-hidden">
                    <h1>Typescript 45-Assigment</h1>

                    <Image src="/45 assigment ts.PNG" alt="45 assigment" width={300} height={300} className="mx-auto" />
                    <Link href= "https://github.com/laraib28/Typescript-45-excercise-with-node-js.git" target="-blank">View Project</Link>
                    </div>
                </div>
                {/* simple calculator */}
                <div className=" text-center  font-semibold shadow-lg rounded hover:scale-125 duration-1000">

                    <div className="overflow-hidden "> 
                    <h1>Simple Calculator</h1>
                    <Image src="/simple calculator.PNG" alt="Simple calculator" height={300} width={300} className="mx-auto"/>
                <Link href= "https://github.com/laraib28/simple-calculator.git" target="-blank">View Project</Link>
                    </div>
                </div>
                {/* Countdown timer */}
                <div className="text-center  font-semibold shadow-lg rounded hover:scale-125 duration-1000">
                    <div className="overflow-hidden"> 
                    <h1>Count Down Timer</h1>
                    <Image src="/countdown timer.PNG" alt="Countdown timer" height={300} width={300} className="mx-auto"/>
                <Link href= "https://github.com/laraib28/countdown-timer.git" target="-blank">View Project</Link>
                    </div>
                </div>
                {/* //Weather gadjet */}
                <div className="text-center  font-semibold shadow-lg rounded hover:scale-125 duration-1000 ">
                    <div className="overflow-hidden">
                    <h1>Weather Gadget</h1> 
                    <Image src="/weather gadget.PNG" alt="weather gadget" height={300} width={300} className="mx-auto" />
                <Link href= "https://github.com/laraib28/countdown-timer.git" target="-blank">View Project</Link>
                    </div>
                   
                </div>
                </div>
                

            </section>
        
    )
}