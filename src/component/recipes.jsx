// this component is for the recipes page
import React from "react";
import Navbar from "./navbar";

export default function Recipes() {
  return (
    <>
      <section className="flex flex-col justify-center items-center p-6 gap-6 drop-shadow-xl mb-12 w-full  font-serif">
        <div className="flex flex-col justify-center items-center gap-6 bg-[#34344d] rounded-[50px] p-4 w-full lg:w-5/6 drop-shadow-xl ">
          <hi className=" text-2xl text-white font-bold text-center">Recipes</hi>
          <div
            className="flex flex-col justify-center items-center gap-2 lg:gap-10  bg-[#29293f]
          rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl
          text-center  list-none   "
          >
            <h2 className="w-5/6 text-white text-2xl">
              Grilled Salmon with Brown Rice and Asparagus
            </h2>
            <img
              src="https://p0.pxfuel.com/preview/986/514/492/food-salmon-asparagus-foodie.jpg"
              alt=" Grilled Salmon with Brown Rice and Asparagus img"
              className=" h-72 md:h-[500px] rounded-lg"
            />
            <span className="text-xl text-white"> Ingredients</span>
            <li className="w-5/6 text-white">4 salmon fillets</li>
            <li className="w-5/6 text-white">2 cups cooked brown rice</li>
            <li className="w-5/6 text-white">1bunch of asparagus</li>
            <li className="w-5/6 text-white">Olive oil, salt, and pepper for seasoning</li>
            <div>
              <span className="text-xl text-white">Instructions</span>
              <li className=' text-white '>Preheat the grill to medium-high heat.</li>
              <li className=' text-white '>
                Season the salmon fillets with olive oil, salt, and pepper
              </li>
              <li className=' text-white '>
                Grill the salmon for about 4-5 minutes per side or until it
                flakes easily with a fork
              </li>
              <li className=' text-white '>
                While grilling, toss asparagus with olive oil, salt, and pepper,
                and grill until tender
              </li>
              <li className=' text-white '>
                Serve the grilled salmon with brown rice and grilled asparagus
              </li>
            </div>
            <div>
              <span className="text-xl text-white">
                {" "}
                Nutritional Information (per serving)
              </span>
              <li className=' text-white '>Protein: Approximately 30g</li>
              <li className=' text-white '>Carbs: Approximately 40g</li>
              <li className=' text-white '>Kcal: Approximately 400 kcal</li>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-2 lg:gap-10  bg-[#29293f]
          rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl
          text-center  list-none   "
          >
            <h2 className="w-5/6 text-2xl text-white">
              {" "}
              Lean Beef Stir-Fry with Mixed Vegetables
            </h2>
            <img
              src="https://img.freepik.com/free-photo/stir-frying-beef-with-sweet-peppers-green-beans_2829-20101.jpg?w=1060&t=st=1694632172~exp=1694632772~hmac=671ffc424c9fdac3bca35c98ffdbfd1523f0c4915b7fd52933bbfb5ce15f8937"
              alt="Lean Beef Stir-Fry with Mixed Vegetables img"
              className=" h-72 md:h-[500px] rounded-lg"
            />
            <span className="text-xl text-white"> Ingredients</span>
            <li className="w-5/6 text-white">1 lb lean beef strips</li>
            <li className="w-5/6 text-white">
              Assorted mixed vegetables (e.g., bell peppers, broccoli, carrots)
            </li>
            <li className="w-5/6 text-white">Stir-fry sauce (low-sodium)</li>
            <li className="w-5/6 text-white">Brown rice or quinoa</li>
            <div>
              <span className="text-xl text-white">Instructions</span>
              <li className=' text-white '>
                Heat a large skillet or wok over medium-high heat and add a
                small amount of oil
              </li>
              <li className=' text-white '>
                Stir-fry the beef strips until browned and cooked through, then
                set them aside
              </li>
              <li className=' text-white '>
                In the same pan, stir-fry the mixed vegetables until tender
              </li>
              <li className=' text-white '>
                Return the cooked beef to the pan and add stir-fry sauce to
                taste
              </li>
              <li className=' text-white '>Serve the beef and vegetables over brown rice or quinoa</li>
            </div>
            <div>
              <span className="text-xl text-white">
                Nutritional Information (per serving)
              </span>
              <li className=' text-white '>Protein: Approximately 35g</li>
              <li className=' text-white '>Carbs: Approximately 25g</li>
              <li className=' text-white '>Kcal: Approximately 400 kcal</li>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-2 lg:gap-10  bg-[#29293f]
          rounded-[50px] p-4 w-full lg:w-full drop-shadow-xl text-white
          text-center  list-none   "
          >
            <h2 className="w-5/6 text-2xl">
              Baked Chicken Breast with Sweet Potato and Broccoli
            </h2>
            <img
              src="https://img.freepik.com/free-photo/grilled-chicken-breast-with-broccoli_144627-37477.jpg?w=900&t=st=1694632267~exp=1694632867~hmac=de5f7979de0589812cf887102fd57b7303b6da61a6a7aef0bbad30a1ac3d4b7b"
              alt="Baked Chicken Breast with Sweet Potato and Broccoli img"
              className=" h-72  md:h-[500px] rounded-lg"
            />
            <span className="text-xl"> Ingredients</span>
            <li className="w-5/6">4 boneless, skinless chicken breasts</li>
            <li className="w-5/6">2 sweet potatoes, sliced</li>
            <li className="w-5/6">Broccoli florets</li>
            <li className="w-5/6">
              Olive oil, garlic, salt, and pepper for seasoning
            </li>
            <div>
              <span className="text-xl"> Instructions</span>
              <li className=' text-white '>Preheat the oven to 375°F (190°C).</li>
              <li className=' text-white '>
                Place chicken breasts on a baking sheet and season with olive
                oil, garlic, salt, and pepper.
              </li>
              <li className=' text-white '>
                Arrange sweet potato slices and broccoli around the chicken
              </li>
              <li className=' text-white '>
                Return the cooked beef to the pan and add stir-fry sauce to
                taste
              </li>
              <li className=' text-white '>
                Bake for about 25-30 minutes or until the chicken is cooked
                through and the vegetables are tender.
              </li>
            </div>
            <div>
              <span className="text-xl">
                {" "}
                Nutritional Information (per serving)
              </span>
              <li className=' text-white '>Protein: Approximately 35g</li>
              <li className=' text-white '>Carbs: Approximately 35</li>
              <li className=' text-white '>Kcal: Approximately 400 kcal</li>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
    </>
  );
}
