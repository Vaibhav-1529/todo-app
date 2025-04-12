import React from 'react'
import TodoCard from './TodoCard'
function Todosection({openmodal,todos,setTodos}) {
  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
        <h2 className='flex justify-center text-[#1DCD9F] text-[2rem] font-bold tracking-widest  ' style={{textShadow: '2px 2px 4px #98cfc0'}}>TODO</h2>
        <button className='pl-[40px] pr-[40px] p-2 flex bg-[#1DCD9F] rounded-md text-[1.2rem] font-bold hover:bg-[#169976] ' onClick={openmodal}> ADD</button>
        <div className='flex flex-wrap w-[1133px] p-[30px] bg-[#222222] gap-4 items-center justify-start rounded-2xl'>
            {todos.map((element,index)=>{
              if(!element.isCompleted)
                return<TodoCard key={index} todo={element} setTodos={setTodos} />
              })             
            }
            {todos.map((element,index)=>{
              if(element.isCompleted)
                return<TodoCard key={index} todo={element} setTodos={setTodos} />
              })             
            }
        </div>
    </div>
  )
}

export default Todosection;