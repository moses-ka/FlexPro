import React from 'react'
import {FcSearch} from "react-icons/fc";
export default function ProtienCalories() {
  return (
    <section id="intake" className=" flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12">
    <div className="flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-[50px] p-4 w-full lg:w-auto drop-shadow-xl">
      <h2>Protien and Calories</h2>

      <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
        <label className="text-black w-16" htmlFor="search">
          Meal
        </label>
        <input
          className=" w-full  rounded-2xl p-2 bg-slate-300 "
          placeholder="Eggs"
          type="search"
          name="search"
          id=""
        />
        <FcSearch className="" size={32} />
      </div>

      <div className="list">
        <ul className="flex flex-col justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
            <li>
              {" "}
              <span className=" ">Red Meat</span>{" "}
              <span className=" ">125Cal</span>{" "}
              <span className=" ">29 Protien</span>{" "}
            </li>
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
            <li>
              {" "}
              <span className=" ">Fried eggs</span>{" "}
              <span className=" ">22Cal</span>{" "}
              <span className=" ">9 Protien</span>{" "}
            </li>
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
            <li>
              {" "}
              <span className=" ">Tuna</span>{" "}
              <span className=" ">25Cal</span>{" "}
              <span className=" ">25 Protien</span>{" "}
            </li>
          </div>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
        <label className="text-black w-16" htmlFor="meal">
          Eggs
        </label>
        <select
          className="text-black w-62 w-full rounded-2xl p-2 bg-slate-300   "
          name="meal"
          id="meal"
        >
          <option value="boiledEggs">Boiled Eggs</option>
          <option value="example">Example</option>
        </select>
        <select
          className="text-black w-62  rounded-2xl p-2 bg-slate-300   "
          name="meal"
          id="meal"
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
        <p>Calories</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
        <p>Protien</p>
      </div>
    </div>
  </section>
  )
}
