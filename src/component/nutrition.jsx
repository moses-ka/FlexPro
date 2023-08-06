//nutrition.jsx

import CalProtien from "./calProtien"
import ProtienCalories from "./protienCalories";
const Nutrition = () => {
  return (
    <>
      <div className="flex flex-col gap-4 ">

      <CalProtien />
      <ProtienCalories />
      </div>
    </>
  );
};

export default Nutrition;
