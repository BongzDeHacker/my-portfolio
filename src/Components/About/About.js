import React from "react";
import soft from './Img/images.png';

function About(){
    return(
        <div>
            <h1 className="font-bold text-sky-400 relative left-[770px] bottom-[-30px]">
                About Me
            </h1>

             <img className="relative left-[420px]" src={soft} alt=""/> 

            
            <p className="text-xs relative left-[770px] bottom-[140px]">
                As passionate software developer with a Diploma in Software Development from Tshwane University of Technology.<br/>
                 My journey in coding began with a strong foundation in C++ and SQL, <br/>
                 and I’ve since expanded my skill set through self-directed learning. <br/>
                 I’ve taught myself JavaScript, Python, React.js, and Tailwind CSS, <br/>
                 and I’ve also completed an online bootcamp focused on HTML and CSS, <br/>
                 where I honed my ability to build responsive, user-friendly websites<br/>
                 My expertise lies in crafting dynamic and engaging interfaces through clean and optimized code. <br/>
                 I leverage Integrated Development Environment (IDE) tools to enhance productivity and ensure high-quality results.
                 </p>
        </div>
    )
}

export default About;