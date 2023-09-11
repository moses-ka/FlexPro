import React, { useState } from 'react';

export default function IntakeCalculator() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState('male');
  // const [fat, setFat] = useState(10);
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [goal, setGoal] = useState('maintain');
  const [dailyCalories, setDailyCalories] = useState(0); // State for daily calories
  const [dailyProtein, setDailyProtein] = useState(0); // State for daily protein intake

  const calculateCalorieIntake = () => {
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === 'female') {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }

    const adjustedBMR = bmr * activityLevel;

    let calorieGoal = 0;
    if (goal === 'maintain') {
      calorieGoal = adjustedBMR;
    } else if (goal === 'lose') {
      calorieGoal = adjustedBMR - 500;
    } else if (goal === 'gain') {
      calorieGoal = adjustedBMR + 500;
    }

    setDailyCalories(calorieGoal.toFixed(1)); // Set daily calorie intake
  };

// Function to calculate daily protein intake
// Function to calculate daily protein intake
  const calculateProteinIntake = () => {
  // Define a baseline protein factor for active individuals
  let proteinFactor = 1.2; // Adjust this value based on your preference

  // Adjust protein factor based on age (if desired)
  if (age >= 14 && age <= 18) {
    proteinFactor += 0.1; // Increase protein factor for adolescents
  }

  // Adjust protein factor based on gender (if desired)
  if (gender === 'female') {
    proteinFactor -= 0.1; // Decrease protein factor for females
  }

  // Adjust protein factor based on weight goals
  if (goal === 'gain') {
    proteinFactor += 0.5; // Increase protein factor for muscle gain
  } else if (goal === 'lose') {
    proteinFactor -= 0.2; // Decrease protein factor for weight loss
  }

  // Calculate protein intake based on adjusted protein factor and body weight
  const proteinIntake = weight * proteinFactor;

  setDailyProtein(proteinIntake.toFixed(1)); // Return protein intake rounded to 1 decimal place
};




  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCalorieIntake();
    calculateProteinIntake();
  };

  return (
    <section
      id="nutrition"
      className="flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12"
    >
      <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 rounded-[50px] p-4 w-full lg:w-auto drop-shadow-xl">
        <h1>Nutrition</h1>
        <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
            <label className="text-black w-16 text-sm " htmlFor="age">
              Age
            </label>
            <input
              className="w-full text-sm rounded-2xl p-2 border border-[#6000fc] bg-gray-300"
              placeholder="Age"
              type="number"
              min="14"
              max="70"
              name="age"
              id=""
              required
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
            <label className="text-black w-16 text-sm" htmlFor="yourWeight">
              Weight
            </label>
            <input
              className="w-full text-sm rounded-2xl p-2 border border-[#6000fc] bg-gray-300"
              placeholder="Weight (kg)"
              type="number"
              min="40"
              max="300"
              name="yourWeight"
              id=""
              required
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
            <label className="text-black w-16 text-sm" htmlFor="yourHeight">
              Height
            </label>
            <input
              className="w-full text-sm rounded-2xl p-2 border border-[#6000fc] bg-gray-300"
              placeholder="Height (cm)"
              type="number"
              min="130"
              max="250"
              name="yourHeight"
              id=""
              required
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
            <label className="text-black w-16 text-sm" htmlFor="gender">
              Gender
            </label>
            <select
              className="w-full text-sm rounded-2xl p-2 border border-[#6000fc] bg-gray-300"
              name="gender"
              id=""
              required
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
            <label className="text-black w-16 text-sm" htmlFor="bodyFat">
              Fat %
            </label>
            <select
              className="w-full text-sm rounded-2xl p-2 border border-[#6000fc] bg-gray-300"
              name="bodyFat"
              id=""
              required
              onChange={(e) => {
                setFat(e.target.value);
              }}
            >
              <option value="10">Healthy</option>
              <option value="20">Normal</option>
              <option value="30">Overweight</option>
            </select>
          </div> */}
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
            <label className="text-black w-16 text-sm" htmlFor="activityLevel">
              Activity
            </label>
            <select
              className="w-full text-sm rounded-2xl p-2 border border-[#6000fc] bg-gray-300"
              name="activityLevel"
              id=""
              required
              onChange={(e) => {
                setActivityLevel(e.target.value);
              }}
            >
              <option value="1.2">Sedentary</option>
              <option value="1.375">Lightly Active</option>
              <option value="1.55">Moderately Active</option>
              <option value="1.725">Very Active</option>
              <option value="1.9">Extra Active</option>
            </select>
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
            <label className="text-black w-16 text-sm" htmlFor="goal">
              Goal
            </label>
            <select
              className="w-full text-sm rounded-2xl p-2 border border-[#6000fc] bg-gray-300"
              name="goal"
              id=""
              required
              onChange={(e) => {
                setGoal(e.target.value);
              }}
            >
              <option value="maintain">Maintain</option>
              <option value="lose">Lose Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 lg:gap-10 rounded-[30px] p-4 w-full lg:w-[800px]">
            {/* ... Image and additional content */}
            <button
            type="submit"
            className="text-center text-2xl font-['Raleway']
            font-bold capitalize text-black rounded-3xl
             w-5/6 bg-white hover:text-[#6000fc]
             transform hover:scale-110 transition border hover:border-[#6000fc] duration-500"
          >
            Calculate
          </button>
           
       
        {dailyCalories !== undefined && dailyCalories !== 0 && dailyProtein !== undefined && dailyProtein !== 0 && (
          <>
            <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
              <span className="text-center text-sm w-5/6">Daily Calorie Intake about ({dailyCalories} kcal)</span>
            </div>
            {/* Display calculated protein intake */}
            <div className="flex justify-center items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl">
              <span className="text-center text-sm w-5/6">Daily Protein Intake about ({dailyProtein} grams)</span>
            </div>
          </>
        )}
        
          </div>
         
        </form>
      </div>
    </section>
  );
}
