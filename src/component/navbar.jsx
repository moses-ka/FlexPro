//navBar.jsx

import { FaNutritionix } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { Link } from "react-router-dom";
import {HiHome} from "react-icons/hi";
import {MdOutlineFastfood} from "react-icons/md";

const  Navbar = ()=> {
  return (
    <>
      <nav className=" w-full fixed bottom-0 left-0 right-0 z-50 ">
        <div>
          <div
            className="className= flex  justify-evenly items-center w-full h-14 shadow-md rounded-t-full
                   bg-[#181320] shadow-[#483468]  lg:h-20 "
          >
            <li className=" list-none">
              <Link to="/nutrition">
                <MdOutlineFastfood
                  className=" text-[#D1C8DE] hover:text-[#6000fc] duration-500 lg:h-20"
                  size={30}
                />
              </Link>
            </li>

            <li className="list-none">
              <Link to="/fitness">
                {
                  <IoIosFitness
                    className=" text-[#D1C8DE]  hover:text-[#6000fc] duration-500 lg:h-20"
                    size={32}
                  />
                }
              </Link>
            </li>
            <li className="list-none">
              <Link to="/home">
                {
                  <HiHome
                    className=" text-[#D1C8DE]  hover:text-[#6000fc] duration-500 lg:h-20"
                    size={30}
                  />
                }
              </Link>
            </li>
            <li className="list-none">
              <Link to="/profile">
                {" "}
                {
                  <BsFillPersonFill
                    className=" text-[#D1C8DE] hover:text-[#6000fc] duration-500 lg:h-20"
                    size={30}
                  />
                }{" "}
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;