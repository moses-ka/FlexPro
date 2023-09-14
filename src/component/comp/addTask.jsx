import React, { useState, useEffect } from "react";
// import addIcon from "../assets/add.png";
import Tasks from "./tasks.jsx";
// import "./style/addTask.scss";

const AddTask = ({day}) => {
  const [task, setTask] = useState(""); // state for the input value
  const [savedTasks, setSavedTasks] = useState([]); // state for the saved tasks
  useEffect(() => {
    // effect for updating local storage when savedTasks changes
    if (savedTasks.length !== 0 ) {
      localStorage.setItem(`tasks${day}`, JSON.stringify(savedTasks));
    }
  }, [savedTasks]);

  const localS = JSON.parse(localStorage.getItem(`tasks${day}`)) || []; // get saved tasks from local storage
  useEffect(() => {
    // effect for initializing savedTasks with local storage data when component mounts
    setSavedTasks(localS);
  }, []);

  const handleSubmit = (event) => {
    // function for handling form submission
    event.preventDefault();
    if (task.trim() !== "") { // check if task is not empty
      setSavedTasks([...savedTasks, task]); // add task to savedTasks array
      setTask(""); // reset task state to empty string
    }
  };

const handleDelete = (index) => {
  // function for handling task deletion
  const newTasks = [...savedTasks];
  newTasks.splice(index, 1); // remove task at specified index
  setSavedTasks(newTasks); // update savedTasks with new array
  localStorage.setItem(`tasks${day}`, JSON.stringify(newTasks)); // update local storage with new array using the correct key
};


  const handleEdit = (index, text) => {
    // function for handling task editing
    const newTasks = [...savedTasks];
    newTasks[index] = text; // update task at specified index with new text
    setSavedTasks(newTasks); // update savedTasks with new array
  };

  const post = () => {
    // function for rendering task list
    return savedTasks.map((task, index) => (
      <div  className="w-full flex flex-col gap-4   justify-center items-center" key={index}>
        <Tasks
          key={index}
          text={task}
          index={index}
          onDelete={(index) => handleDelete(index)}
          onEdit={handleEdit}
          savedTasks={savedTasks}
        />
      </div>
    ));
  };


  return (
    <>
     
        <div className="w-full flex flex-col gap-4  justify-center items-center   ">
          {/* <h2 className="text-center ">Add Task</h2> */}
      
            <div className="flex flex-col justify-center items-center w-full">
              <form className="w-full" onSubmit={handleSubmit}>

             
            <input
              placeholder="Add exercise"
              className=" w-full rounded-2xl  bg-[#B9B4C7] p-2   placeholder-slate-600"
              type="text"
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
             </form>
            </div>
           
            <div className="flex flex-col justify-center items-center gap-2 bg-[#B9B4C7] rounded-[50px] p-4 lg-h-auto w-full lg:w-auto drop-shadow-xl">
            {post()}
            </div>
         
        </div>
       
   
    </>
  );
};

export default AddTask;
