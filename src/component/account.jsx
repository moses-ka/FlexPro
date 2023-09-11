import React,{useState} from 'react'
import Cookies from 'js-cookie'
import Navbar from './navbar'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
export default function Account() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [updatAcount, setUpdatAcount] = useState(false);
  const {
    data: userData,
  } = useQuery(
    ["userData"], // Specify a unique query key
    async () => {
      const res = await fetch(`http://localhost:3016/users/${user?.name}`);
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

    const user = JSON.parse(Cookies.get("token"))
    const handleSubmit = async(e) => {
      e.preventDefault();
        axios.put(`http://localhost:3016/users/${user?.name}`, {
          name: user.name,
          email: user.email,
          age: age,
          weight: weight,
          height: height,
          gender: gender,
          imgUrl: user.picture,
   
        })
        .then( (response) => {
          console.log(response);
        })
        .catch( (error) => {
          console.log(error);
        });
    
    }
  return (<>
    <Navbar />
    <section className='flex flex-col justify-center items-center p-6 drop-shadow-xl  mb-12 h-screen'>
        <div className='flex flex-col justify-center items-center gap-2 bg-gray-600 rounded-[50px] p-4 w-full h-full  lg:w-auto drop-shadow-xl '>

        <img className='rounded-full' src={user.picture} alt="" />
        <span className='text-xl font-bold'>{user.name}</span>
        <span>{user.email}</span>

       {updatAcount == true && (
       <div className='w-full'>
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
     
     
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-10 rounded-[30px] p-2 w-full lg:w-[800px]">
        {/* ... Image and additional content */}
        <button
        type="submit"
        className="text-center text-2xl font-['Raleway']
        font-bold capitalize text-black rounded-3xl
         w-3/6 bg-white hover:text-[#6000fc]
         transform hover:scale-110 transition border hover:border-[#6000fc] duration-500"
      >
        submit
      </button>
       
   
    
    
      </div>
     
    </form>
       </div>
       
       )} 
       <button 
        className="text-center text-xl font-['Raleway'] p-4
        font-bold capitalize text-black rounded-3xl
                      w-42 bg-green-400 hover:text-white  
                      transform hover:scale-110 transition duration-500"
                      onClick={() => {
                        setUpdatAcount(!updatAcount);
                      }}
      > change account info</button>
       <button
        className="text-center text-xl font-['Raleway'] p-4
        font-bold capitalize text-black rounded-3xl
                     w-42 bg-red-400 hover:text-white
                     transform hover:scale-110 transition duration-500"
                     onClick={() => {
         
                       Navigate("/");
                      }}
      >
        delete account
      </button>
      </div>
    </section>
       </>
  )
}
