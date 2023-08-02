//fitness.jsx
import { useRef, useState } from "react";
const Fitness = () => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const [exercise,setExercise]=useState("");
  const firstinput = useRef();
  const Accordion = (e) => { //to open the accordion body temprorarily
    
    e.preventDefault();
    setOpenAccordion(!openAccordion);
  };
  const enterExercise = (e) => {
      return (
        <input type="text" placeholder="" name="" id="" />
      )
  }
  return (
    <>
      <section
        id="accordion"
        className="flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12"
      >
        <div className="flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-[50px] p-4 w-full lg:w-auto drop-shadow-xl ">
          <h2 className="text-2xl font-bold text-center">Make plan</h2> {/*the title*/}
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="flex flex-col justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-[50px] p-4 w-full lg:w-[800px] drop-shadow-xl  "
          >
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className=" drop-shadow-xl w-full flex items-center justify-between p-4 font-medium t w-fullext-left text-slate-600 m-2  rounded-3xl  dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-200"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={Accordion}
              >
                <span className=" w-32 lg:w-80 ">Day one</span> {/*the title for the accordion*/}
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
              className={`${openAccordion ? "block" : "hidden"} w-full  flex flex-col justify-center items-center gap-4 `}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="flex flex-col justify-center gap-4 items-center p-4 w-full bg-slate-600 rounded-3xl  ">
                    <button className=" rounded-2xl  bg-slate-200  p-1 w-full  hover:bg-slate-400" onClick={enterExercise}>Enter an exercise</button>
                {/* <input className=" rounded-2xl  bg-slate-400  p-1 w-full  placeholder-slate-600" placeholder="enter an exercise" type="text" name="" id="" />
                <input className=" rounded-2xl  bg-slate-400  p-1 w-full  placeholder-slate-600" placeholder="enter an exercise" type="text" name="" id="" />
                <input className=" rounded-2xl  bg-slate-400  p-1 w-full  placeholder-slate-600" placeholder="enter an exercise" type="text" name="" id="" />
                <input className=" rounded-2xl  bg-slate-400  p-1 w-full  placeholder-slate-600" placeholder="enter an exercise" type="text" name="" id="" /> */}
              </div>
              <div className="flex flex-col justify-center gap-4 items-center p-4 w-full bg-slate-600 rounded-3xl  ">
                {/* <input className=" rounded-2xl  bg-slate-400  p-1 w-full  placeholder-slate-600" placeholder="enter an exercise" type="text" name="" id="" />
                <input className=" rounded-2xl  bg-slate-400  p-1 w-full  placeholder-slate-600" placeholder="enter an exercise" type="text" name="" id="" />
                <input className=" rounded-2xl  bg-slate-400  p-1 w-full  placeholder-slate-600" placeholder="enter an exercise" type="text" name="" id="" />
                <input className=" rounded-2xl  bg-slate-400  p-1 w-full  placeholder-slate-600" placeholder="enter an exercise" type="text" name="" id="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Fitness;
