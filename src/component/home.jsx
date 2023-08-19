import React from "react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex w-full flex-col justify-center 
         p-6 drop-shadow-xl mb-12 "
      >
        <div
          className="flex  flex-col justify-center items-center 
            gap-8 bg-gray-400 rounded-[50px]  p-6 w-full h-full
             lg:w-auto drop-shadow-xl  "
        >
          <div
            className="h-[140px] hover:scale-[102%]
              flex justify-center items-center hover:delay-150 
              bg-my-firstImg bg-cover bg-center bg-no-repeat  bg-gray-50 rounded-[50px]
                      w-full group"
          >
           
            <span
              className=" text-center text-black
                          font-serif   hidden group-hover:inline hover:delay-150 blur-none 
                           text-4xl"
            >
              Workout
            </span>
          </div>

          <div
            className="h-[140px] hover:scale-[102%] 
            flex justify-center items-center
                 hover:delay-150 bg-my-thirdImg bg-cover bg-center
                 bg-no-repeat  rounded-[50px] 
                      w-full group"
          >
            <span
              className=" text-center text-black
                          font-serif   hidden group-hover:inline hover:delay-150 blur-none 
                           text-4xl"
            >
              nutrition
            </span>
          </div>

          <div
            className="h-[140px] hover:scale-[102%] 
                 flex justify-center items-center
                 hover:delay-150 bg-my-secImg bg-cover bg-center
                 bg-no-repeat  rounded-[50px]
                      w-full group "
          >
               <span  className=" text-center text-black font-serif   hidden group-hover:inline hover:delay-150 blur-none  text-4xl" 
            >
              Recipes
            </span>
          </div>
     
        </div>
      </section>
    </>
  );
}
