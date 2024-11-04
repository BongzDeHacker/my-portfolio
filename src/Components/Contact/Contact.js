import React from "react";
import hand from './Img/icons8-backhand-index-pointing-down-medium-light-skin-tone-48.png';

function Contact(){
    return(
        <div>
            <h1 className="font-bold text-sky-400 relative left-[770px] top-[-50px]">
                Contact
            </h1>

          

         <div className="bg-slate-300 w-[600px] h-[400px] relative left-[450px] bottom-[10px] rounded-md ">
         <form>
         <h1 className="font-bold relative left-[230px] bottom-[-20px]">Get In Touch</h1>
         <img className="relative left-[330px] top-[-5px] w-[30px] h-[30px]" src={hand} alt=""/>

            <input id="input1" className="bg-transparent relative bottom-[-10px] left-[30px] 
            border-0 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 p-2" 
            type="name" placeholder="Your Name" />


            <input className="bg-transparent relative bottom-[-60px] right-[167px] 
            border-0 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 p-2" 
            type="email" placeholder="Your Email" />

            <input className="bg-transparent relative bottom-[-110px] left-[-365px]
            border-0 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 p-2
            " type="text" placeholder="Your Subject" />


            <textarea className="bg-transparent relative bottom-[-120px] left-[30px] w-[300px] h-[100px]
            border-0 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 p-2" 
            type="text" placeholder="Write your message"></textarea>


            <button className="bg-transparent relative bottom-[-160px] left-[-30px]">Submit</button>
         </form>
         </div>
         
        </div>
    )
}

export default Contact;