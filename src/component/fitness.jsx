//fitness.jsx
import { useState } from "react";
const Fitness = () => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const Accordion = (e) => {
    e.preventDefault();
    setOpenAccordion(!openAccordion);
    console.log(openAccordion);
  };
  return (
    <>
      <section
        id="nutrition"
        className="flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12"
      >
        <div className="flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-[50px] p-4 w-full lg:w-auto drop-shadow-xl ">
          <h2 className="text-2xl font-bold text-center">Make plan</h2>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-[50px] p-4 w-full lg:w-[800px] drop-shadow-xl  "
          >
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className=" drop-shadow-xl flex items-center justify-between w-full p-4 font-medium text-left text-black m-2  rounded-3xl  dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={Accordion}
              >
                <span className=" w-52">Day one</span>
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
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${openAccordion ? "block" : "hidden"} w-full `}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="flex flex-col justify-center items-center p-4 w-full bg-slate-600 rounded-3xl h-24 ">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Fitness;
