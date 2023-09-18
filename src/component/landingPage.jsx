/* eslint-disable react/no-unescaped-entities */
// landing page for the app 
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
import axios from "axios";
export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
   const submitMessage = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3016/users/contact", {
      name: name,
      email: email,
      message: message,
    });
    window.alert("Thank you for your message!");
   }
  return (
    <section id="landing-page" className="bg-black  w-screen">
      <div className=" flex flex-col gap-6 w-full items-center justify-center">
        <div
          id="nav"
          className=" flex flex-row justify-evenly md:justify-between
         items-center w-5/6 p-4"
        >
          <div id="logo-div" className="flex justify-center items-center  ">
            <img
              src="https://file.rendit.io/n/x71t4g9TJWktoYkEISBD.png"
              className="w-full h-full  "
              id="FlexPro logo"
            />
          </div>
          <div id="links" className="flex justify-center items-center gap-6 ">
            <a  href="/#weOffer">
              <span className="text-white text-center text-xl font-['Raleway'] hover:text-[#3c42de] transform hover:scale-110 transition duration-500">
                Nutrition
              </span>
            </a>
            <a  href="/#Image2">
              <span className="text-white text-center text-xl font-['Raleway'] transform  transition duration-500  hover:text-[#3c42de]">
                Fitness
              </span>
            </a>

            <Link
              to="/login"
              className="text-center text-2xl font-['Raleway']
                        font-bold capitalize text-black rounded-3xl
                         w-24 bg-white hover:text-[#3c42de]
                         transform hover:scale-110 transition duration-500 border hover:border-[#3c42de]"
            >
              Login
            </Link>
          </div>
        </div>
        <div
          id="hero"
          className="flex flex-col justify-between items-center w-4/6 lg:flex-row"
        >
          <div className="flex flex-col justify-center items-center gap-6 p-4 h-full">
            <span
              className="text-center text-3xl  font-['Lato']
                 capitalize text-white  h-full w-full md:text-5xl"
            >
              Welcome to FlexPro
            </span>
            <span
              className="text-center text-xl font-['Lato']
                 capitalize text-white w-full md:text-2xl"
            >
              Are you ready to embark on a journey towards a healthier, fitter
              you?
            </span>

            <Link
              to="/login"
              className="text-center text-2xl font-['Raleway']
                        font-bold capitalize text-black rounded-3xl
                         w-28 bg-white hover:text-[#3c42de]
                         transform hover:scale-110 transition border hover:border-[#3c42de] duration-500"
            >
              start
            </Link>
          </div>

          <div>
            <img
              src="https://file.rendit.io/n/MtiGq2LGItlmMo2sfduL.png"
              className="w-full"
              id="Image1"
            />
          </div>
        </div>
        <hr className="bg-[#d9d9d9] mb-20 w-4/6 h-px " />
        <div
          id="weOffer"
          className="flex flex-col w-screen justify-center items-center gap-6 "
        >
          <h2 className="text-center  text-3xl md:text-5xl font-['Lato'] capitalize text-white w-5/6 ">
            What Does FlexPro Offer
          </h2>
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <div
              className="flex flex-col sm:w-full lg:flex-row md:justify-center  justify-evenly
              items-center gap-6  w-5/6 p-6 md:w-full lg:w-5/6"
            >
              <div className="flex flex-col justify-center items-center  w-2/6">
                <span className="text-center text-xl md:text-2xl font-['Lato'] capitalize text-white  w-80">
                  Personalized Calorie and Protein Tracking
                </span>
                <span className="text-center text-sm md:text-lg font-['Lato'] capitalize text-white  w-72">
                  FlexPro lets you effortlessly track your calorie and protein
                  intake, ensuring youre getting the nutrients you need to fuel
                  your workouts and achieve your goals
                </span>
              </div>

              <img
                src="https://images.pexels.com/photos/7991936/pexels-photo-7991936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className=" w-5/6 h-full lg:w-3/6 transform hover:scale-105 transition duration-500  grayscale"
                id="Image3"
              />
            </div>
            <div
              className="flex justify-evenly items-center flex-col sm:w-full lg:flex-row
             md:justify-center  lg:w-5/6 p-6 gap-6 w-4/6"
            >
              <img 
                src="https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-5/6 h-full lg:w-3/6 transform hover:scale-105 transition duration-500 grayscale   "
                id="Image2"
              />
              <div className=" flex flex-col justify-center items-center w-2/6">
                <span className="text-center text-xl md:text-2xl font-['Lato'] capitalize text-white w-80">
                  Tailored Workout Plans
                </span>
                <span className="text-center text-sm md:text-xl font-['Lato'] capitalize text-white w-72">
                  Say goodbye to confusion at the gym. FlexPro provides you with
                  beginner-friendly workout plans designed to suit your fitness
                  level and objectives
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-5/6 h-full  flex flex-col justify-center 
        items-center bg-none  md:bg-[url('https://file.rendit.io/n/x71t4g9TJWktoYkEISBD.png')]  bg-no-repeat 
        bg-auto gap-6"
        >
          <hr className="bg-[#d9d9d9] mb-20 w-3/6 h-px shrink-0 mt-12  " />
          {/* <img
            src="https://file.rendit.io/n/qI8CXxvyaNbWuTiJ9QaQ.png"
            className="w-96 h-full self-start ml-6 inline "
            id="FlexLogoWhite1"
          /> */}
          <h2 className="text-center text-2xl md:text-5xl font-['Lato'] capitalize text-white h-12 w-full">
            About Us
          </h2>

          <span className="text-center text-sm md:text-xl font-['Lato'] capitalize text-white mb-24 w-full md:w-4/6">
            <strong> Hello there! I'm the creator of FlexPro,</strong> <br /> a
            developer who's passionate about both coding and fitness.
            Recognizing the need for an app that seamlessly combines nutrition
            tracking and tailored workouts.
            <br />
            I've crafted FlexPro to merge technology and fitness in a way that
            simplifies your journey to a healthier lifestyle.
            <br />
            <strong className="mt-4">
              Join me in reshaping fitness with FlexPro.
              <br />
              Cheers!
            </strong>
          </span>
        </div>

        <hr className="bg-[#d9d9d9] mb-20 w-1/6 h-px" />
        <div className="flex flex-col justify-center items-center gap-6 w-screen mb-4">
          <h2 className="text-center text-2xl md:text-4xl font-['Lato'] capitalize text-white ">
            Contact Us
          </h2>
          <div className="flex flex-col justify-center items-center gap-4 w-5/6">
            <input
              type="text"
              id="name"
              className=" group w-4/6 p-2 rounded-3xl"
              placeholder="Name"
              onChange={(e) => {setName(e.target.value)}}
            />
            <input
              type="email"
              className="w-4/6 p-2 rounded-3xl"
              placeholder="Email"
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <textarea
              className="w-4/6 p-2  h-32 rounded-3xl"
              placeholder="Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button
            onClick={submitMessage}
              className="text-center text-xl font-['Raleway'] font-bold 
            capitalize bg-white rounded-3xl w-32 text-black p-2
            transform hover:scale-110 transition duration-500 border hover:border-[#3c42de] hover:text-[#3c42de] "
            >
              Submit
            </button>
          </div>
          <FiArrowUp
            size={50}
            className="text-white  relative left-28 md:top-0  
           md:left-80
           animate-bounce hover:text-[#3c42de]"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row  justify-center items-center">
        <img
              src="https://file.rendit.io/n/x71t4g9TJWktoYkEISBD.png"
              className="w-28 h-28  "
              id="FlexPro logo"
            />
        <span className="text-sm text-center text-white w-4/6  md:w-3/6 m-4">
             <strong>Disclaimer </strong> 
             Disclaimer: This protein intake calculation is based on general guidelines from reputable sources,
              including ISSN. It offers estimated daily protein requirements for fitness enthusiasts, considering age,
               gender, activity level, and weight goals. Note that this estimate may not be 100% accurate.
                Consult a healthcare professional for personalized advice.

        </span>
        </div>
      
      </div>
    </section>
  );
}
