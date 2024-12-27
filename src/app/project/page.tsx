import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <section className="max-w-[1320px] mx-auto bg-black text-white py-10">
      <h1 className="text-center font-extrabold text-4xl py-5">PROJECTS</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-6 md:px-10">
        {/* 45 Assignment */}
        <div className="text-center font-semibold shadow-lg rounded-lg hover:scale-105 duration-300 bg-gray-800 p-4">
          <h1 className="text-lg font-bold mb-3">Typescript 45-Assignment</h1>
          <Image
            src="/45 assigment ts.PNG"
            alt="45 assignment"
            width={300}
            height={300}
            className="mx-auto rounded-md"
          />
          <Link
            href="https://github.com/laraib28/Typescript-45-excercise-with-node-js.git"
            target="_blank"
            className="inline-block mt-3 text-blue-400 hover:text-blue-600"
          >
            View Project
          </Link>
        </div>

        {/* Simple Calculator */}
        <div className="text-center font-semibold shadow-lg rounded-lg hover:scale-105 duration-300 bg-gray-800 p-4">
          <h1 className="text-lg font-bold mb-3">Simple Calculator</h1>
          <Image
            src="/simple calculator.PNG"
            alt="Simple Calculator"
            width={300}
            height={300}
            className="mx-auto rounded-md"
          />
          <Link
            href="https://github.com/laraib28/simple-calculator.git"
            target="_blank"
            className="inline-block mt-3 text-blue-400 hover:text-blue-600"
          >
            View Project
          </Link>
        </div>

        {/* Countdown Timer */}
        <div className="text-center font-semibold shadow-lg rounded-lg hover:scale-105 duration-300 bg-gray-800 p-4">
          <h1 className="text-lg font-bold mb-3">Countdown Timer</h1>
          <Image
            src="/countdown timer.PNG"
            alt="Countdown Timer"
            width={300}
            height={300}
            className="mx-auto rounded-md"
          />
          <Link
            href="https://github.com/laraib28/countdown-timer.git"
            target="_blank"
            className="inline-block mt-3 text-blue-400 hover:text-blue-600"
          >
            View Project
          </Link>
        </div>

        {/* Weather Gadget */}
        <div className="text-center font-semibold shadow-lg rounded-lg hover:scale-105 duration-300 bg-gray-800 p-4">
          <h1 className="text-lg font-bold mb-3">Weather Gadget</h1>
          <Image
            src="/weather gadget.PNG"
            alt="Weather Gadget"
            width={300}
            height={300}
            className="mx-auto rounded-md"
          />
          <Link
            href="https://github.com/laraib28/countdown-timer.git"
            target="_blank"
            className="inline-block mt-3 text-blue-400 hover:text-blue-600"
          >
            View Project
          </Link>
        </div>
      </div>
    </section>
  );
}
