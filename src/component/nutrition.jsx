//nutrition.jsx

import CalProtien from "./calProtien"
import Navbar from "./navbar";
import ProtienCalories from "./protienCalories";
const Nutrition = () => {
  return (
    <>
      <div className="flex flex-col gap-4 ">
      <Navbar />
      <CalProtien />
      <ProtienCalories />
      </div>
    </>
  );
};

export default Nutrition;
