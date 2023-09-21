// this component is for the exercises page
import React,{useState} from 'react'
import { useQuery } from '@tanstack/react-query';
import Loading from './loading';
export default function Exercises() {
  const [openAccordion, setOpenAccordion] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { 
    data: exercises, isLoading,
  } = useQuery(
    ["exercises"], // Specify a unique query key
    async () => {
      const res = await fetch("http://localhost:3014/exercises");
      const data = await res.json();
      // console.log("fetched been called");
      return data;
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
      // console.log(newArray);
      return newArray;
    });
  };
  // console.log(exercises , 'exercises');
  return (
    <section className='flex flex-col justify-center items-center p-6 drop-shadow-xl mb-14 w-full  '>
      <div className='flex flex-col  items-center gap-4 bg-[#34344d] rounded-[50px] p-4 w-full lg:w-5/6  drop-shadow-xl'>
      <h2 className="text-2xl font-bold text-center text-white">Exercises</h2>
      {isLoading && <Loading/>}
      {!isLoading &&(<>
    

      
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl  bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(0);
              }}
            >
              <span className=" w-32 lg:w-80 ">Chest </span>{" "}
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
             {exercises && exercises[0].chest?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl  bg-[#f2f2f2] 
              '>
             <li className='text-center list-none'>{el.name}</li>
             <span className='text-sm'>{el.description}</span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl  bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(1);
              }}
            >
              <span className=" w-32 lg:w-80 ">Back </span>{" "}
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
             {exercises && exercises[1].Back?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl  bg-[#f2f2f2] 
              '>
             <li className='text-center list-none'>{el.name}</li>
             <span className='text-sm'>{el.description}</span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl  bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(2);
              }}
            >
              <span className=" w-32 lg:w-80 ">Shoulders </span>{" "}
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
             {exercises && exercises[2].Shoulders?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl  bg-[#f2f2f2] 
              '>
             <li className='text-center list-none'>{el.name}</li>
             <span className='text-sm'>{el.description}</span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl  bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(3);
              }}
            >
              <span className=" w-32 lg:w-80 ">Biceps </span>{" "}
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
                openAccordion[3] ? "block" : "hidden"
              } w-full  flex flex-col justify-center items-center gap-2 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
             {exercises && exercises[3].Biceps?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl  bg-[#f2f2f2] 
              '>
             <li className='text-center list-none'>{el.name}</li>
             <span className='text-sm'>{el.description}</span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl  bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(4);
              }}
            >
              <span className=" w-32 lg:w-80 ">Legs </span>{" "}
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
                openAccordion[4] ? "block" : "hidden"
              } w-full  flex flex-col justify-center items-center gap-2 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
             {exercises && exercises[4].Legs?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl  bg-[#f2f2f2] 
              '>
             <li className='text-center list-none'>{el.name}</li>
             <span className='text-sm'>{el.description}</span>
             </div>
              )}
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl  "
          >
            <button
              type="button"
              className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-center text-slate-800 m-2 
                 rounded-3xl  bg-[#f2f2f2] 
                  "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                Accordion(5);
              }}
            >
              <span className=" w-32 lg:w-80 ">Triceps </span>{" "}
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
                openAccordion[5] ? "block" : "hidden"
              } w-full  flex flex-col justify-center items-center gap-2 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
             {exercises && exercises[5].Triceps?.map((el ,index) =>
             <div key={index} className='flex flex-col justify-center items-center gap-2 drop-shadow-xl w-full 
             p-4 font-medium   text-center text-slate-800 m-2 
             rounded-3xl  bg-[#f2f2f2] 
              '>
             <li className='text-center list-none'>{el.name}</li>
             <span className='text-sm'>{el.description}</span>
             </div>
              )}
            </div>
          </div>
          </> )}
      </div>
     
    </section>
  )
}
