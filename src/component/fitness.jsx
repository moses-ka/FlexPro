//fitness.jsx
import { useState } from "react";
import AddTask from "./comp/addTask";
const Fitness = () => {
  const [openAccordion, setOpenAccordion] = useState([
    false,
    false,
    false,
    false,
  ]);


  const Accordion = (num) => {
    console.log(openAccordion);
    setOpenAccordion((prevAccordion) => {
      const newArray = prevAccordion.map((item, index) => {
        if (index == num) {
          return !item;
        }
        return item;
      });

      return newArray;
    });
  };

  return (
    <>
      <section
        id="accordion"
        className="flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12"
      >
        <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 rounded-[50px] p-4 w-full lg:w-auto drop-shadow-xl ">
          <h2 className="text-2xl font-bold text-center">Make plan</h2>{" "}
          {/*the title*/}
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
                <span className=" w-32 lg:w-80 ">First Day </span>{" "}
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
              } w-full  flex flex-col justify-center items-center gap-4 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <AddTask day={0} />
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center bg-gray-300  gap-4 lg:gap-10 rounded-[50px] p-4 w-full lg:w-[800px] drop-shadow-xl  "
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
                <span className=" w-32 lg:w-80 ">Second Day </span>{" "}
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
              } w-full  flex flex-col justify-center items-center gap-4 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <AddTask day={1} />
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
                 p-4 font-medium   text-left text-slate-800 m-2 
                 rounded-3xl bg-gray-400 
                  "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={() => {
                  Accordion(2);
                }}
              >
                <span className=" w-32 lg:w-80 ">Third Day</span>{" "}
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
              } w-full  flex flex-col justify-center items-center gap-4 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <AddTask day={2} />
            </div>
          </div>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-4 lg:gap-10  bg-gray-300  rounded-[50px] p-4 w-full lg:w-[800px] drop-shadow-xl  "
          >
    
              <button
                type="button"
                className=" drop-shadow-xl w-full flex items-center justify-between
                 p-4 font-medium   text-left text-slate-800 m-2 
                 rounded-3xl bg-gray-400
                  "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={() => {
                  Accordion(3);
                }}
              >
                <span className=" w-32 lg:w-80 ">Fourth Day</span>{" "}
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
              } w-full  flex flex-col justify-center items-center gap-4 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <AddTask day={3} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Fitness;
