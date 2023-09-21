// this component is responsible for rendering the workoutplan page
import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import Loading from './loading';
export default function Workoutplan() {
const [openAccordion,setOpenAccordion] = useState([false,false,false,]);
const [startFlex,setStartFlex] = useState()
const [superFlex,setSuperflex] = useState()
    const {
        data:workOutPlan,isLoading,
      } = useQuery(
        ["workoutplan"], // Specify a unique query key
        async () => {
          const res = await fetch("http://localhost:3014/exercises/workoutplan");
          const data = await res.json();
          // console.log("fetched been called and this is the data",data);
          setStartFlex(data[0])
          setSuperflex(data[1])
          return data;

        },
        {
          refetchOnMount: false,
          staleTimeout: 1000 * 60 * 60,
          refetchOnWindowFocus: false,
        }
      );
      useEffect(() => {
        if (workOutPlan && workOutPlan.length > 0) {
          setStartFlex(workOutPlan[0]); // Initialize start and super flex with the data from the workoutplan array
          setSuperflex(workOutPlan[1]); //
        }
      }, [workOutPlan]);
      const Accordion = (num) => {
        setOpenAccordion((prevAccordion) => {
          const newArray = prevAccordion.map((item, index) => {
            if (index == num) {
              return !item;
            }
            return item;
          });
          // console.log(newArray);
          return newArray;
        });
      };
      // console.log(startFlex, "startFlex")
      // console.log(superFlex, "supertFlex")
      // console.log(workOutPlan, "workoutplan")
  return (
    <section className='flex flex-col justify-center items-center p-6 drop-shadow-xl mb-14 w-full  '>
      <div className='flex flex-col  items-center gap-4 bg-[#34344d] rounded-[50px] p-4 w-full lg:w-5/6  drop-shadow-xl'>
      {isLoading && <Loading />}
      {!isLoading && (<>
      
     
            <h2 className='text-2xl lg:text-4xl font-bold text-center text-white '>{startFlex?.name}</h2>
            <span className='text-center  text-white self-center text-sm w-6/6'>{startFlex?.description}</span>
            <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B]  rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl b bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(0);
              }}
            >
              <span className=" w-full lg:w-80 ">{startFlex && startFlex?.days[0].name} </span>{" "}
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
             {startFlex && startFlex.days[0].exercises?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl b bg-[#f2f2f2] 
              '>
               <span className='text-center '>{el.name} {el.sets} x {el.repetitions}</span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B]  rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl b bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(1);
              }}
            >
              <span className=" w-full lg:w-80 ">{startFlex && startFlex?.days[1].name} </span>{" "}
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
             {startFlex && startFlex.days[1].exercises?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl b bg-[#f2f2f2] 
              '>
           <span className='text-center '>{el.name} {el.sets} x {el.repetitions}</span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B]  rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl b bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(2);
              }}
            >
              <span className=" w-full lg:w-80 ">{startFlex && startFlex?.days[2].name} </span>{" "}
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
             {startFlex && startFlex?.days[2].exercises?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl b bg-[#f2f2f2] 
              '>
             <span className='text-center '>{el.name} {el.sets} x {el.repetitions}</span>
            
             </div>
              )}
            </div>
          </div>
          <h2 className='text-2xl lg:text-4xl font-bold text-center text-white '>{superFlex?.name}</h2>
            <span className='text-center self-center text-sm w-full text-white lg:w-96 '>{superFlex?.description}</span>
            <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B]  rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl b bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(0);
              }}
            >
              <span className=" w-full lg:w-80 ">{superFlex && superFlex?.days[0].name} </span>{" "}
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
             {superFlex && superFlex?.days[0].exercises?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl b bg-[#f2f2f2] 
              '>
               <span className='text-center w-full lg:w-auto '>{el.name} superSet {el.superset} {el.sets} x {el.repetitions} </span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B]  rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl b bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(1);
              }}
            >
              <span className=" w-full lg:w-80  ">{superFlex && superFlex?.days[1].name} </span>{" "}
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
             {superFlex && superFlex?.days[1].exercises?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl b bg-[#f2f2f2] 
              '>
           <span className='text-center '>{el.name} superSet {el.superset} {el.sets} x {el.repetitions} </span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B]  rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl b bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-2"
              onClick={() => {
                Accordion(2);
              }}
            >
              <span className=" w-full lg:w-80 ">{superFlex && superFlex?.days[2].name} </span>{" "}
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
              id="accordion-collapse-body-3"
              className={`${
                openAccordion[2] ? "block" : "hidden"
              } w-full  flex flex-col justify-center items-center gap-2 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
             {superFlex && superFlex.days[2].exercises?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl b bg-[#f2f2f2] 
              '>
             <span className='text-center '>{el.name} {el.sets} x {el.repetitions} </span>
            
             </div>
              )}
            </div>
          </div>
          </>)}
          </div>
          
    </section>
  )
}
