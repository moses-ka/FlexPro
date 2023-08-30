import React from "react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col justify-center items-center p-6 drop-shadow-xl  mb-12 h-screen"
      >
        <div
          className="flex flex-col justify-evenly items-center gap-6 bg-gray-600 rounded-[50px] p-4 w-full h-5/6 mt-2  drop-shadow-xl   "
        >
          <div
            className="h-2/6 
              flex justify-center items-center hover:delay-150 
              bg-my-firstImg bg-cover bg-center bg-no-repeat  bg-gray-50 rounded-[50px]
                      w-5/6 group transform hover:scale-110 transition duration-500"
                    
          >
          
            <span
              className=" text-center text-black
                          font-serif  font-extrabold inline lg:hidden  group-hover:inline hover:delay-150 blur-none 
                           text-4xl"
            >
              Workout
            </span>
          </div>

          <div
            className="h-2/6  
            flex justify-center items-center
                 hover:delay-150 bg-my-thirdImg bg-cover bg-center
                 bg-no-repeat  rounded-[50px] 
                      w-5/6 group transform hover:scale-110 transition duration-500"
          >
            <span
              className=" text-center text-black
                          font-serif font-extrabold   inline lg:hidden  group-hover:inline hover:delay-150 blur-none 
                           text-4xl"
            >
              nutrition
            </span>
          </div>

          <div
            className="h-2/6 
                 flex justify-center items-center
                 hover:delay-150 bg-my-secImg bg-cover bg-center
                 bg-no-repeat  rounded-[50px]
                      w-5/6 group transform hover:scale-110 transition duration-500 "
          >
               <span  className=" text-center font-extrabold text-black font-serif    inline lg:hidden group-hover:inline hover:delay-150 blur-none  text-4xl" 
            >
              Recipes
            </span>
          </div>
     
        </div>
      </section>
    </>
  );
}
