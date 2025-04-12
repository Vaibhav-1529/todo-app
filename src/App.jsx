import AddTaskModal from "./Component/AddTaskModal"
import Todosection from "./Component/Todosection"
import Carousel from "./Component/Carousel"
import Navbar from "./Component/Navbar"
import { useState } from "react"

function App() {
  const string=localStorage.getItem("todolist");
  let todoInitial = [];
try {
  const string = localStorage.getItem("todolist");
  if (string && string !== "undefined") {
    todoInitial = JSON.parse(string);
  }
} catch {
  todoInitial = [];
}
  const [isopen,setisopen]= useState(false);
  const [todos,setTodos]=useState(todoInitial);
  function openmodal(){
    setisopen(true)
  }
  function closemodal(){
    setisopen(false)
  }
  return (
    <div className=" w-full h-full flex justify-center flex-col items-center gap-[20px] bg-[#000000] relative pb-2">
      <div onClick={()=>{
        openmodal();
      }} className="w-[70px] h-[70px] flex justify-center items-center text-[2.7rem] rounded-[100%] text-[#000000] z-[50] bg-[#1DCD9F] fixed bottom-[30px] right-[30px]"><i className="fa-solid fa-plus"></i></div>
    <Navbar/>
    <Carousel/>
    {isopen&&< AddTaskModal closemodal={closemodal} setTodos={setTodos} />}
    <div className="bg-black">
    </div>
      {<Todosection openmodal={openmodal} todos={todos} setTodos={setTodos}/>}
    </div>
  )
}

export default App
