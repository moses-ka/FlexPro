import React, { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
export default function Workoutplan() {
const [openAccordion,setOpenAccordion] = useState([false,false,false,]);
    const {
        data:beginner ,
      } = useQuery(
        ["beginner"], // Specify a unique query key
        async () => {
          const res = await fetch("http://localhost:3014/exercises/beginner");
          const data = await res.json();
          console.log("fetched been called");
          
          return data[0];

        },
        {
          refetchOnMount: false,
          staleTimeout: 1000 * 60 * 60,
          refetchOnWindowFocus: false,
        }
      );
      const Accordion = (num) => {
        setOpenAccordion((prevAccordion) => {
          const newArray = prevAccordion.map((item, index) => {
            if (index == num) {
              return !item;
            }
            return item;
          });
          console.log(newArray);
          return newArray;
        });
      };
      console.log(beginner, "beginner")
  return (
    <section className='flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12 w-full '>
      <div className='flex flex-col  items-center gap-4 bg-gray-200 rounded-[50px] p-4 w-full lg:w-auto drop-shadow-xl'>

  
            <h2 className='text-2xl lg:text-4xl font-bold text-center text-black '>{beginner?.name}</h2>
            <span className='text-center self-center text-sm w-6/6'>{beginner?.description}</span>
            <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-gray-300  rounded-[50px] p-4 w-full lg:w-[800px] drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl bg-gray-400 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(0);
              }}
            >
              <span className=" w-32 lg:w-80 ">{beginner && beginner.days[0].name} </span>{" "}
              {/*the title for the accordion*/}
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>

            <div
              id="accordion-collapse-body-1"
              className={`${
                openAccordion[0] ? "block" : "hidden"
              } w-full  flex flex-col justify-center items-center gap-2 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
             {beginner && beginner.days[0].exercises?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl bg-gray-400 
              '>
               <span className='text-center '>{el.name} {el.sets} x {el.repetitions}</span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-gray-300  rounded-[50px] p-4 w-full lg:w-[800px] drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl bg-gray-400 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(1);
              }}
            >
              <span className=" w-32 lg:w-80 ">{beginner && beginner.days[1].name} </span>{" "}
              {/*the title for the accordion*/}
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>

            <div
              id="accordion-collapse-body-1"
              className={`${
                openAccordion[1] ? "block" : "hidden"
              } w-full  flex flex-col justify-center items-center gap-2 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
             {beginner && beginner.days[1].exercises?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl bg-gray-400 
              '>
           <span className='text-center '>{el.name} {el.sets} x {el.repetitions}</span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-gray-300  rounded-[50px] p-4 w-full lg:w-[800px] drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl bg-gray-400 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(2);
              }}
            >
              <span className=" w-32 lg:w-80 ">{beginner && beginner.days[2].name} </span>{" "}
              {/*the title for the accordion*/}
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>

            <div
              id="accordion-collapse-body-1"
              className={`${
                openAccordion[2] ? "block" : "hidden"
              } w-full  flex flex-col justify-center items-center gap-2 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
             {beginner && beginner.days[2].exercises?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl bg-gray-400 
              '>
             <span className='text-center '>{el.name} {el.sets} x {el.repetitions}</span>
            
             </div>
              )}
            </div>
          </div>
          </div>
    </section>
  )
}
