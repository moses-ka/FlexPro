//nutrition.jsx

const Nutrition = ()=>{
  return (<>
      <section id='nutrition' className="flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12">
        <div className="flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-[50px] p-4 w-full lg:w-auto drop-shadow-xl ">
          <h1>Nutrition</h1>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl   ">
            <label className="text-black w-16" htmlFor="yourWeight">
              Weight
            </label>
            <input
              className=" w-full  rounded-2xl p-2  bg-slate-300  "
              placeholder="66 kg"
              type="number"
              min="40"
              max="300 "
              name="yourWeight"
              id=""
            />
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl  ">
            <label className="text-black w-16" htmlFor="yourHeight">
              Height
            </label>
            <input
              className=" w-full  rounded-2xl p-2 bg-slate-300 "
              placeholder="180 cm"
              type="number"
              min="140"
              max="250"
              name="yourHeight"
              id=""
            />
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
            <label className="text-black w-16" htmlFor="bodyFat">
              Fat %
            </label>
            <select
              className="text-black w-full  rounded-2xl p-2 bg-slate-300   "
              name="bodyFat"
              id=""
            >
              <option value="10-15%">10-15%</option>
              <option value="20%">20%</option>
              <option value="30%">30%</option>
              <option value="40%">40%</option>
              <option value="50%">50%</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-[30px] p-4 w-full  lg:w-[800px]  drop-shadow-xl ">

            <img className="w-full mix-blend-multiply rounded-3xl" src="https://img.freepik.com/free-vector/girls-bikini-set-illustration_52683-63762.jpg?w=2000&t=st=1690662030~exp=1690662630~hmac=5132a067b79ec62a3f2e71c78aa217bf54ce00c6aadbf50d7f1d5f296b9f3464" alt="" />
            <p className="w-full ml-8 font-light text-black" > 20% 30% 40% 50% 10-15% </p>
          </div>
        </div>
      </section>
     
      <section className=" flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12">
      <div className="flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-[50px] p-4 w-full lg:w-auto drop-shadow-xl"> 
      
                <h2>
                  Protien and Calories
                </h2>

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
            </div>
            
            
            <div className="list">

            
                <ul className="flex flex-col justify-center items-center gap-2">
                  <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
                    <li> <span className=" ">Red Meat</span> <span className=" ">125Cal</span> <span className=" ">29 Protien</span> </li>
                  </div>
                  <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
                    <li> <span className=" ">Fried eggs</span> <span className=" ">22Cal</span> <span className=" ">9 Protien</span> </li>
                  </div>
                  <div className="flex justify-center items-center gap-2 lg:gap-10 bg-slate-400 rounded-full p-4 w-full  lg:w-[800px]  drop-shadow-xl ">
                  <li> <span className=" ">Tuna</span> <span className=" ">25Cal</span> <span className=" ">25 Protien</span> </li>
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
        </div>
      </section>
           
        
  </>)
}


 


export default Nutrition;
