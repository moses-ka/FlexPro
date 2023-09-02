import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'

export default function ProtienCalories() {
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [selectedFood, setSelectedFood] = useState(null); // Store the selected food item
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlIndex = (e) => {
    setIndex(e.target.value);
    setSelectedFood(nutrition[e.target.value]); // Update selected food item
  };

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
            <label className="text-black w-16" htmlFor="specificMeal">
              Specific
            </label>
            <select
              className="text-black w-62 w-full rounded-2xl p-2 bg-gray-300"
              name="specificMeal"
              id="specificMeal"
              onChange={(e) => {
                // Handle the selection here
                const selectedItemIndex = e.target.value;
                const selectedVariation = selectedFood.items[selectedItemIndex];
                console.log(selectedVariation);
              }}
            >
              {selectedFood.items.map((item, index) => (
                <option key={index} value={index}>
                  {item.name} {item.calories}
                </option>
              ))}
            </select>
          </div>
        )}

        
      </div>
    </section>
  );
}
