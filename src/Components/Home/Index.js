import React from "react";
import wave from "./IndexImg/waving.png";
import pin from "./IndexImg/icons8-pin-30.png";
import linkedin from "./IndexImg/linkedin.png";
import github from "./IndexImg/github.png";
import js from "./IndexImg/icons8-javascript-48.png";
import rjs from "./IndexImg/icons8-react-js-40.png";
import htm from "./IndexImg/icons8-html-5-48.png";
import cs from "./IndexImg/icons8-css-48.png";
import wind from "./IndexImg/icons8-tailwindcss-48.png";
import myimg from './IndexImg/bongz.jpg';
import Header from '../NavBar/Header';



function Index(){
    return(
        <div>
            <Header />
            <img className="relative left-[900px] top-[140px] border-4 
              h-96 w-96 rounded-full object-cover object-center" src={myimg} alt=""/>
            <h1 className="text-5xl font-bold relative left-[200px] top-[-150px]">Software Developer</h1>
            <img className=" relative left-[650px] top-[-190px]" src={wave} alt="" />

            <p className="font-light relative left-[200px] top-[-150px]">Hi, I'm Bongubuzwe Mafuya. A dedicated software developer based in Cape Town, South Africa. </p>
            <img className="relative left-[845px] top-[-179px]" src={pin} alt="" />
            
            <a href="https://www.linkedin.com/in/bongubuzwe-mafuya-7b5282262/" target="blank">
            <img className="relative left-[200px] top-[-150px] h-[30px]" src={linkedin} alt="" />
            </a>
            <a href="https://github.com/BongzDeHacker?tab=repositories" target="blank">
            <img className="relative left-[250px] top-[-180px] h-[30px]" src={github} alt="" />
            </a>
            <p className="relative left-[200px] top-[-90px] font-bold">Application Stack ==</p>

            <img className="relative left-[400px] top-[-115px] h-[30px]" src={rjs} alt="" />
            <img className="relative left-[470px] top-[-145px] h-[30px]" src={js} alt="" />
            <img className="relative left-[540px] top-[-175px] h-[30px]" src={htm} alt="" />
            <img className="relative left-[610px] top-[-205px] h-[30px]" src={wind} alt="" />
            <img className="relative left-[680px] top-[-235px] h-[30px]" src={cs} alt="" />
            
           


        
        </div>
    )
}

export default Index;