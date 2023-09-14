import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
// import ImgDel from "../assets/x-mark.png";

const Tasks = (props) => {
  const { savedTasks, index, onDelete, onEdit } = props;
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(savedTasks[index]);

  const handleDeleteClick = () => {
    onDelete(index);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditable(false);
    onEdit(index, text);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleInputBlur();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-2 bg-[#B9B4C7]  p-2 rounded-2xl ">
        {isEditable ? (
          <input
            className="rounded-2xl  bg-[#B9B4C7]   p-1  placeholder-slate-600 w-full"
            type="text"
            value={text}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <p
            className="text-slate-600 text-center w-full"
            onClick={() => setIsEditable(true)}
          >
            {savedTasks[index]}
          </p>
        )}

        <MdDeleteSweep
          className=" hover:text-purple-800 w-6 h-6"
          onClick={handleDeleteClick}
        />
      </div>
    </>
  );
};

export default Tasks;
