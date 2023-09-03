import React, { useState, useEffect } from "react";
import { FcSearch } from "react-icons/fc";
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { MdAddTask } from "react-icons/md";

export default function ProtienCalories() {
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [selectedFood, setSelectedFood] = useState(null); // Store the selected food item
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [foodPerDay, setFoodPerDay] = useState([]);
  const [varitionIndex, setVaritionIndex] = useState(0);
  const queryClient = useQueryClient()

  const { data: nutrition, isError, isLoading } = useQuery(
    ['goods'], // Specify a unique query key
    async () => {
      const res = await fetch("http://localhost:3012/nutrition");
      const data = await res.json();
      console.log('fetched been called');
      return data;
    },
    {
      refetchOnMount: false,
      staleTimeout: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (nutrition && nutrition.length > 0) {
      setSelectedFood(nutrition[0]); // Initialize selectedFood with the first item in the nutrition array
      setSelectedVariation(nutrition[0].items[0] ); //
    }
  }, [nutrition]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlIndex = (e) => {
    setIndex(e.target.value);
    setSelectedFood(nutrition[e.target.value]); // Update selected food item
     setSelectedVariation(nutrition[e.target.value].items[varitionIndex]); // the app crashes when it set to idex that doesnt exisit 

  };

console.log(selectedVariation ,"selectedVariation")
  const AddFood = () => {
    setFoodPerDay([
      ...foodPerDay,
      selectedVariation
      
    ])
  } 
  console.log(selectedVariation ,"selectedVariation")
  console.log(selectedFood ,"selectedFood")
  return (
    <section
      id="intake"
      className="flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12"
    >
      <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 rounded-[50px] p-4 w-full lg:w-auto drop-shadow-xl">
        <h2>Protein and Calories</h2>

     

        <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
          <label className="text-black w-16" htmlFor="meal">
            Eggs
          </label>
          <select
            className="text-black w-62 w-full rounded-2xl p-2 bg-gray-300"
            name="meal"
            id="meal"
            onChange={handlIndex}
            onSelect={handlIndex}
          >
            {nutrition?.map((el, index) => (
              <option key={index} value={index}>
                {el.name} {el.calories}
              </option>
            ))}
          </select>
        </div>

        {/* Render variations of the selected food item */}
        {selectedFood && (
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
            {/* <label className="text-black w-16" htmlFor="specificMeal">
              
            </label> */}
            <select
              className="text-black w-62 w-full text-sm rounded-2xl p-2 bg-gray-300"
              name="specificMeal"
              id="specificMeal"
              onChange={(e) => {
                // Handle the selection here
                const selectedItemIndex = e.target.value;
                setSelectedVariation(selectedFood.items[selectedItemIndex]) 
                console.log(selectedVariation ,'selectedVariation');
                setVaritionIndex(selectedItemIndex)
              }}
            >
              {selectedFood.items.map((item, index) => (
                <option className="text-sm" key={index} value={index}>
                  {item.name} {item.calories}
                </option>
              ))}
            </select>
           
            <input type="number" min={1} max={9} onChange={(e) => setMultiplier(e.target.value)} 
            value={multiplier}
            className="text-black  w-1/6  rounded-2xl p-2  bg-gray-300  "/>
             <MdAddTask onClick={AddFood} size={42} className="text-black p-1 w-1/6"/>
          </div>
        )}

         
          {selectedFood && selectedVariation && (
            <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
              <span className="text-black w-fit text-sm">

              {foodPerDay.map((item, index) => (
                <div key={index}>
                  {item.name}
                </div>
              ))}
              </span>
              </div>
          )}
          
      </div>
    </section>
  );
}
