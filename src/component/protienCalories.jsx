import React, { useState, useEffect } from "react";
import { FcSearch } from "react-icons/fc";
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { MdAddTask } from "react-icons/md";
import Nutrition from "./nutrition";
import { BiFoodMenu } from "react-icons/bi";

export default function ProtienCalories() {
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [selectedFood, setSelectedFood] = useState(null); // Store the selected food item
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [foodPerDay, setFoodPerDay] = useState([]);
  const [varitionIndex, setVaritionIndex] = useState(0);
  const queryClient = useQueryClient()
  const [totalIntake, setTotalIntake] = useState({ protein: 0, carbs: 0, calories: 0 }); // State to hold the total intake

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



const handSelectingFood = (e) => {
  setIndex(e.target.value);
  setSelectedFood(nutrition[e.target.value]); // Update selected food item

  if (nutrition[e.target.value].items.length >= varitionIndex ) {
    setSelectedVariation(nutrition[e.target.value].items[varitionIndex]);
  } 
  else if(nutrition[e.target.value].items.length > 0) {
    setSelectedVariation(nutrition[e.target.value]?.items[0]);
  }
};

  const handleSelectingVaration = (e) => {
    // console.log( e.target.value, "e.target.value")
      // Handle the selection here
      const Index = e.target.value;
      setSelectedVariation(selectedFood.items[Index]) 
   
      setVaritionIndex(Index)
    
  }


  const AddFood = () => {
    setFoodPerDay([
      ...foodPerDay,
      selectedVariation 
      
    ])
    
  }

const sumValues = (foodItems) => {
  return foodItems.reduce((total, item) => {
    // Extract the numeric value from the string using regex
    const proteinValue = parseFloat(item.protein.match(/\d+/)[0]);
    const carbsValue = parseFloat(item.carbs.match(/\d+/)[0]);
    const caloriesValue = parseFloat(item.calories.match(/\d+/)[0]);

    // Sum the values
    total.protein += proteinValue;
    total.carbs += carbsValue;
    total.calories += caloriesValue;

    return total;
  }, { protein: 0, carbs: 0, calories: 0 });
};


useEffect(() => {
  const newTotalIntake = sumValues(foodPerDay); // Calculate the new total intake
  setTotalIntake(newTotalIntake); // Update the total intake state

}, [foodPerDay]);
console.log(totalIntake);
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
            onChange={handSelectingFood}
            
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
              onChange={handleSelectingVaration}
              defaultValue={'select'}
            
            >
             {/* <option value="" selected disabled hidden>Choose here</option> */}
              {selectedFood.items.map((item, index) => (
                <option  className="text-sm" key={index} value={index}>
                  {item.name} {item.protein} 
                </option>
              ))}
            </select>
           
            <input type="number" min={1} max={9} onChange={(e) => setMultiplier(e.target.value)} 
            value={multiplier}
            className="text-black  w-2/6  rounded-2xl p-2  bg-gray-300  "/>
             <MdAddTask onClick={AddFood} size={38} className="text-black p-1 w-1/6 text-center"/>
          </div>
        )}

         
          {selectedFood && selectedVariation && (
            <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
              <span className="text-black w-fit text-sm">
              <h2 className="text-black text-center text-lg">Protein</h2>
              {foodPerDay.map((item, index) => (
                <div key={index}>
              
                  {item.name} {item.protein} 
                  
                </div>
              ))
            }
              </span>
              </div>
          )}
               
               {selectedFood && selectedVariation && (
            <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
              <span className="text-black w-fit text-sm">
              <h2 className="text-black text-center text-lg">Kcal</h2>
              {foodPerDay.map((item, index) => (
                <div key={index}>
              
                  {item.name} {item.calories} 
                </div>
              ))}
              </span>
              </div>
          )}
          
      </div>
    </section>
  );
}
