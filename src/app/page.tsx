import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Project from "./project/page";

export default function Home (){
  return (
    <main>
       <Hero/> 
         <About/>  
         <Project/> 
        <Contact/>
    </main>
  )
}