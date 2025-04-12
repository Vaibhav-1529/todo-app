import React, { useState } from "react";
function AddTaskModal(props) {
  const [title, setTitle] = useState(() =>
    props.isedit ? props.editdata.title || "" : ""
  );
  const [description, setDescription] = useState(() =>
    props.isedit ? props.editdata.description || "" : ""
  );
  function editTask() {
    props.setEditTodos((prev) => {
      const newTodo = prev.map((element) => {
        if (element.id === props.editdata.id) {
          return {
            ...element,
            title: title,
            description: description,
            isCompleted: false,
          };
        }
        return element;
      });
      localStorage.setItem("todolist", JSON.stringify(newTodo));
      return newTodo;
    });
    props.setEdit(false);
  }

  function addTodo() {
    const newTodo = {
      title: title,
      description: description,
      isCompleted: false,
      id: Date.now(),
    };
    console.log(newTodo);
    let updateTodo;
    props.setTodos((prev) => {
      updateTodo = [newTodo, ...prev];
      return updateTodo;
    });
    localStorage.setItem("todolist", JSON.stringify(updateTodo));
    props.closemodal();
  }
  return (
    <div
      onClick={() => {
        if (props.isedit) props.setEdit(false);
        else props.closemodal();
      }}
      className="z-50 fixed top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-5 pt-8 h-[450px] w-[400px] bg-[#AFDDF] bg-[#4c4b4b] border-[1px] rounded-lg border-[#1DCD9F] flex flex-col gap-3 relative "
      >
        <div
          onClick={() => {
            if (props.isedit) props.setEdit(false);
            else props.closemodal();
          }}
          className="cursor-pointer w-[30px] h-[30px] text-[1.2rem] absolute top-[2px] right-[4px] bg-[#6e6868]  flex justify-center items-center rounded-[100%]"
        >
          X
        </div>
        <input
          value={title}
          onInput={(e) => {
            setTitle(e.target.value);
          }}
          className="text-white border-[1px] rounded-lg border-[#1DCD9F] text-[20px] p-2 bg-[#222222]"
          type="text"
          placeholder="Enter the title"
        />
        <textarea
          value={description}
          onInput={(e) => {
            setDescription(e.target.value);
          }}
          className=" text-white border-[1px] rounded-lg border-[#1DCD9F] text-[15px] p-2 bg-[#222222]"
          name=""
          id=""
          rows={50}
          placeholder="Enter the task Details"
        ></textarea>
        {!props.isedit ? (
          <button
            className="w-full bg-[#1DCD9F]  text-[20px] p-2 text-black "
            onClick={addTodo}
          >
            Add task
          </button>
        ) : (
          <button
            className="w-full bg-[#1DCD9F]  text-[20px] p-2 text-black "
            onClick={editTask}
          >
            Edit task
          </button>
        )}
      </div>
    </div>
  );
}

export default AddTaskModal;
