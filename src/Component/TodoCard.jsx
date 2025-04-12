import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
function TodoCard({ todo, setTodos }) {
  function DeleteTask(){
    setTodos((prev) => {
      const newTodo = prev.filter((element) => element.title !== todo.title);
      localStorage.setItem("todolist", JSON.stringify(newTodo));
      return newTodo;
    });
  }
  function CompleteTask() {
    setTodos((prev) => {
      const newTodo = prev.map((element) => {
        if (element.title === todo.title) {
          return { ...element, isCompleted: !element.isCompleted };
        }
        return element;
      });
      localStorage.setItem("todolist", JSON.stringify(newTodo));
      return newTodo;
    });
  }
  const [isedit,setEdit]=useState(false)
  return (
    <div>
      {isedit&& <AddTaskModal isedit={isedit} setEdit={setEdit} editdata={todo} setEditTodos={setTodos}/>}
    <div
      className="w-[200px] h-[270px] flex flex-col justify-start gap-[2px] bg-[#02000099] rounded-md"
      style={{ boxShadow: "3px 3px 6px #3f3e3e99" }}
    >

      <div className="p-2 flex justify-end items-center">
        <div
        onClick={()=>setEdit(!isedit)}
            className="w-[20px] h-[20px] cursor-pointer ml-4 rounded-sm text-white border-white"
          ><i className="fa-solid fa-pen-to-square"></i></div>
        <div
        onClick={DeleteTask}
            className="w-[20px] h-[20px] cursor-pointer ml-4 rounded-sm text-white border-white"
          ><i className="fa-solid fa-trash"></i></div>
        {todo.isCompleted ? (
          <div onClick={CompleteTask} className="cursor-pointer ml-4 w-[20px] h-[20px]">✅</div>
        ) : (
          <div
            onClick={CompleteTask}
            className="w-[20px] h-[20px] border cursor-pointer ml-4 rounded-sm border-white"
          ></div>
        )}
      </div>
      <div className="pl-2 flex justify-between items-center">
        <h2 className="text-[#1DCD9F] text-[1.2rem] font-semibold ">
          {todo.title}
        </h2>
      </div>
      <div className="p-2 text-white">
        <p>{todo.description}</p>
      </div>
    </div>
    </div>
  );
}

export default TodoCard;
