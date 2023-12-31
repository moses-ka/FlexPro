// Desc: This file is the protienCalories component of the client side
import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { MdAddTask } from "react-icons/md";
import Cookies from "js-cookie";
import { MdDelete } from "react-icons/md";
import Loading from "./loading";

export default function ProtienCalories() {
  // const [index, setIndex] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [selectedFood, setSelectedFood] = useState(null); // Store the selected food item
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [foodPerDay, setFoodPerDay] = useState([]);
  const [varitionIndex, setVaritionIndex] = useState(0);
  const [FoodPerDayMultiplier, setFoodPerDayMultiplier] = useState([]);
  const [totalIntake, setTotalIntake] = useState({
    protein: 0,
    carbs: 0,
    calories: 0,
  }); // State to hold the total intake
  const [showInputs, setShowInputs] = useState(false);
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [kcal, setKcal] = useState("");
  const [meal, setMeal] = useState("");
  // const queryClient = useQueryClient();

  const {
    data: nutrition,isLoading,
  } = useQuery(
    ["goods"], // Specify a unique query key
    async () => {
      const res = await fetch("https://flexpronutrition.cyclic.cloud/nutrition");
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

  useEffect(() => {
    if (nutrition && nutrition.length > 0) {
      setSelectedFood(nutrition[0]); // Initialize selectedFood with the first item in the nutrition array
      setSelectedVariation(nutrition[0].items[0]); //
    }
  }, [nutrition]);

  const handSelectingFood = (e) => {
    // setIndex(e.target.value);
    setSelectedFood(nutrition[e.target.value]); // Update selected food item

    if (nutrition[e.target.value].items.length >= varitionIndex) {
      setSelectedVariation(nutrition[e.target.value].items[varitionIndex]);
    } else if (nutrition[e.target.value].items.length > 0) {
      setSelectedVariation(nutrition[e.target.value]?.items[0]);
    }
  };

  const handleSelectingVaration = (e) => {
    // console.log( e.target.value, "e.target.value")
    // Handle the selection here
    const Index = e.target.value;
    setSelectedVariation(selectedFood.items[Index]);

    setVaritionIndex(Index);
  };

  const AddFood = () => {
    setFoodPerDay([...foodPerDay, selectedVariation]);
    setFoodPerDayMultiplier([...FoodPerDayMultiplier, multiplier]);

    // Store data in cookies with an expiration time of one day
    Cookies.set(
      "foodPerDay",
      JSON.stringify([...foodPerDay, selectedVariation]),
      { expires: 1 }
    );
    Cookies.set(
      "FoodPerDayMultiplier",
      JSON.stringify([...FoodPerDayMultiplier, multiplier]),
      { expires: 1 }
    );
  };

  const sumValues = (foodItems) => {
    return foodItems.reduce(
      (total, item, index) => {
        const proteinMatch = item.protein.match(/\d+/);
        const carbsMatch = item.carbs.match(/\d+/);
        const caloriesMatch = item.calories.match(/\d+/);

        // console.log(`Protein Match for item ${index}:`, proteinMatch);
        // console.log(`Carbs Match for item ${index}:`, carbsMatch);
        // console.log(`Calories Match for item ${index}:`, caloriesMatch);

        // Check if matches are valid before parsing
        if (
          proteinMatch &&
          proteinMatch[0] &&
          carbsMatch &&
          carbsMatch[0] &&
          caloriesMatch &&
          caloriesMatch[0]
        ) {
          const proteinValue =
            parseFloat(proteinMatch[0]) * FoodPerDayMultiplier[index];
          const carbsValue =
            parseFloat(carbsMatch[0]) * FoodPerDayMultiplier[index];
          const caloriesValue =
            parseFloat(caloriesMatch[0]) * FoodPerDayMultiplier[index];

          // console.log(`Parsed Protein Value for item ${index}:`, proteinValue);
          // console.log(`Parsed Carbs Value for item ${index}:`, carbsValue);
          // console.log(`Parsed Calories Value for item ${index}:`, caloriesValue);

          total.protein += proteinValue;
          total.carbs += carbsValue;
          total.calories += caloriesValue;
        }

        return total;
      },
      { protein: 0, carbs: 0, calories: 0 }
    );
  };

  useEffect(() => {
    const newTotalIntake = sumValues(foodPerDay); // Calculate the new total intake
    setTotalIntake(newTotalIntake); // Update the total intake state
  }, [foodPerDay]);

  useEffect(() => {
    // Retrieve data from cookies
    const foodList = Cookies.get("foodPerDay");
    const foodListMultiplier = Cookies.get("FoodPerDayMultiplier");

    // Parse the retrieved data from cookies
    const parsedFoodList = foodList ? JSON.parse(foodList) : [];
    const parsedFoodListMultiplier = foodListMultiplier
      ? JSON.parse(foodListMultiplier)
      : [];

    // Set the retrieved data to their corresponding states
    setFoodPerDay(parsedFoodList);
    setFoodPerDayMultiplier(parsedFoodListMultiplier);
  }, []);

  const deleteFoodItem = (index) => {
    // Create a copy of foodPerDay and FoodPerDayMultiplier arrays
    const updatedFoodPerDay = [...foodPerDay];
    const updatedFoodPerDayMultiplier = [...FoodPerDayMultiplier];

    // Remove the item at the specified index
    updatedFoodPerDay.splice(index, 1);
    updatedFoodPerDayMultiplier.splice(index, 1);

    // Update state with the new arrays
    setFoodPerDay(updatedFoodPerDay);
    setFoodPerDayMultiplier(updatedFoodPerDayMultiplier);

    // Save the updated data to cookies
    Cookies.set("foodPerDay", JSON.stringify(updatedFoodPerDay), {
      expires: 1,
    });
    Cookies.set(
      "FoodPerDayMultiplier",
      JSON.stringify(updatedFoodPerDayMultiplier),
      { expires: 1 }
    );
  };

  const handleCustomEntry = () => {
    // adding custom entry to the array of food per day
    const customMeal = {
      name: meal,
      protein: protein,
      carbs: carbs,
      calories: kcal,
    };
    setFoodPerDay([...foodPerDay, customMeal]);
    setFoodPerDayMultiplier([...FoodPerDayMultiplier, 1]);
  };
 
  return (
    <section
      id="intake"
      className="flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12"
    >
        
      <div className="flex flex-col justify-center items-center gap-4 bg-[#34344d] rounded-[50px] p-4 w-full lg:w-5/6 drop-shadow-xl">
      {isLoading && (<Loading />) }
          {!isLoading && (<>
        <h2 className="text-xl text-white font-bold text-center">Intake Calculator</h2>

        <div className="flex justify-center items-center gap-2 lg:gap-10 bg-[#22223B] rounded-full p-4 w-full lg:w-full drop-shadow-xl">
          {/* <label className="text-black w-16" htmlFor="meal">
            Meal
          </label> */}

         

         
          <select
            className="w-4/6 rounded-2xl  lg:w-full border border-[#4f4fb8] p-2 bg-[#f2f2f2]"
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
          <span className="text-white">||</span>
          <button
            className="text-center text-sm font-['Raleway']
                        font-bold capitalize text-black rounded-[50px]
                         w-22 p-4 bg-[#f2f2f2] hover:text-[#4f4fb8]
                         transform hover:scale-110 transition duration-500 border hover:border-[#4f4fb8]"
            onClick={() => setShowInputs(!showInputs)}
          >
            Custom
          </button>
   
        </div>
        
        {/* Render variations of the selected food item */}
        {selectedFood && (
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-[#22223B] rounded-full p-4 w-full lg:w-full drop-shadow-xl">
            <select
              className="w-5/6 text-sm lg:w-full rounded-2xl p-2 bg-[#f2f2f2] border border-[#4f4fb8]"
              name="specificMeal"
              id="specificMeal"
              onChange={handleSelectingVaration}
              defaultValue="0"
            >
              {selectedFood.items.map((item, index) => (
                <option className="text-sm" key={index} value={index}>
                  {item.name} {item.protein}
                </option>
              ))}
            </select>
           <span className="text-white"> ||</span>
            <input
              type="number"
              min={1}
              max={9}
              onChange={(e) => setMultiplier(e.target.value)}
              value={multiplier}
              className="text-black border border-[#4f4fb8] w-2/6  rounded-2xl p-2  bg-[#f2f2f2]  "
            />{" "}
            <button
              onClick={AddFood}
              className="text-center text-sm font-['Raleway']
                          font-bold capitalize text-black rounded-[50px]
                           w-28 p-4 bg-[#f2f2f2] hover:text-[#4f4fb8]
                           transform hover:scale-110 transition border hover:border-[#4f4fb8] duration-500"
            >
              Add
            </button>
          </div>
        )}
        {showInputs && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl">
            <input
              type="text"
              placeholder="Enter name"
              className="text-black  border border-[#4f4fb8] w-5/6 md:w-full rounded-2xl p-2 placeholder:text-gray-600 bg-[#f2f2f2] "
              onChange={(e) => setMeal(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter protein"
              className="text-black  border border-[#4f4fb8] w-5/6 md:w-full rounded-2xl placeholder:text-gray-600 p-2 bg-[#f2f2f2]"
              onChange={(e) => setProtein(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter kcal"
              className="text-black w-5/6  border border-[#4f4fb8] md:w-full rounded-2xl placeholder:text-gray-600 p-2 bg-[#f2f2f2]"
              onChange={(e) => setKcal(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter carbs"
              className="text-black w-5/6 md:w-full  border border-[#4f4fb8] rounded-2xl p-2 placeholder:text-gray-600 bg-[#f2f2f2]"
              onChange={(e) => setCarbs(e.target.value.toString())}
            />
            <button
              onClick={handleCustomEntry}
              className="text-center text-sm font-['Raleway']
                        font-bold capitalize text-black rounded-[50px]
                         w-28 p-4 bg-[#f2f2f2]  hover:text-[#4f4fb8]
                         transform hover:scale-110 transition  border hover:border-[#4f4fb8] duration-500"
            >
              Add
            </button>
          </div>
        )}

        {foodPerDay.length !== 0 && (
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl">
            <div className="text-white w-fit text-sm flex flex-col">
              <h2 className="text-white text-center text-lg">Protein</h2>
              {foodPerDay.map((item, index) => (
                <div className="flex justify-center items-center" key={index}>
                 <div className="flex justify-center items-center gap-2 w-full">
                  {item.name}{" "}
                  {parseFloat(item.protein.match(/\d+/)[0]) *
                    FoodPerDayMultiplier[index]} (gr)
                  {/* {This is extracting the numeric value from the item.protein string using a regular expression (/\d+/). The match method with the regular expression returns an array with all the matches found in the string. Since we are only interested in the first match, we access it using [0]. The extracted value is then parsed as a floating-point number using parseFloat.} */}
                  </div> 
                  <div>

             
                  <button
                    onClick={() => deleteFoodItem(index)}
                    className="text-white hover:text-[#4f4fb8] text-center"
                  >
                    <MdDelete size={20} />
                  </button>
                  </div>
                  
                </div>
              ))}
              <span className="text-white text-center self-center">
              Total of {totalIntake.protein} grams
                </span>
            </div>
          </div>
        )}

        {foodPerDay.length !== 0 && selectedVariation && (
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl">
            <div className="text-white w-fit text-sm flex flex-col">
              <h2 className="text-white text-center text-lg">Kcal</h2>
              {foodPerDay.map((item, index) => (
                <div className="flex justify-center items-center gap-2" key={index}>
                  {item.name}{" "}
                  {parseFloat(item.calories.match(/\d+/)[0]) *
                    FoodPerDayMultiplier[index]} (kcal)
                  {/* {This is extracting the numeric value from the item.protein string using a regular expression (/\d+/). The match method with the regular expression returns an array with all the matches found in the string. Since we are only interested in the first match, we access it using [0]. The extracted value is then parsed as a floating-point number using parseFloat.} */}
                </div>
              ))}
                 <span className="text-white text-center self-center">
                Total of  {totalIntake.calories} kcal
                </span>
            </div>
          </div>
        )}
    {foodPerDay.length !== 0 && (
      <div className="flex justify-center items-center gap-2 lg:gap-10 bg-[#22223B] rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl">
        <div className="text-white w-fit text-sm flex flex-col">
          <h2 className="text-white text-center text-lg">carbs</h2>
          {foodPerDay.map((item, index) => (
            <div className="flex justify-center items-center gap-2" key={index}>
              {item.name}{" "}
              {parseFloat(item.carbs.match(/\d+/)[0]) *
                FoodPerDayMultiplier[index]}(gr)
              {/* {This is extracting the numeric value from the item.protein string using a regular expression (/\d+/). The match method with the regular expression returns an array with all the matches found in the string. Since we are only interested in the first match, we access it using [0]. The extracted value is then parsed as a floating-point number using parseFloat.} */}
            </div>
          ))}
          <span className="text-white text-center self-center">
            Total of {totalIntake.carbs} grams
          </span>
        </div>
      </div>
    )}
    
     
      
    </>)}
      </div>
      
    </section>
  );
}
