import React from 'react'
import Cookies from 'js-cookie'
import Navbar from './navbar'

export default function Account() {
    const user = JSON.parse(Cookies.get("token"))
    console.log(user)
  return (<>
    <Navbar />
    <section className='flex flex-col justify-center items-center p-6 drop-shadow-xl  mb-12 h-screen'>
        <div className='flex flex-col justify-center items-center gap-4 bg-gray-600 rounded-[50px] p-4 w-full h-5/6 mt-2 lg:w-auto drop-shadow-xl '>
            <img className='rounded-full' src={user.picture} alt="" />
            <span className='text-xl font-bold'>{user.name}</span>
            <span>{user.email}</span>
            <span>//Level</span>
            <span>//height </span>
            <span>//weight </span>
           
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
