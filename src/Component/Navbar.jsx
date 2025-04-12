import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[60px] bg-[#222222] flex justify-between items-center p-[20px] sticky top-0 left-0 z-50'>
      <div className='w-[50px] h-[50px] bg-[#1DCD9F] rounded-[100%]'></div>
      <div className='w-[473px] h-full flex items-center justify-end gap-[40px] flex-grow-[1] pr-[40px] '>
          <h2 className=' text-[#1DCD9F] font-medium text-[1.2rem] '>Home</h2>
          <h2 className=' text-[#1DCD9F] font-medium text-[1.2rem] '>About</h2>
          <h2 className=' text-[#1DCD9F] font-medium text-[1.2rem] '>Contact</h2>
          <h2 className=' text-[#1DCD9F] font-medium text-[1.2rem] '>Services</h2>
      </div>
      <div className='w-[173px] h-full flex items-center justify-between '>
        <button className='pl-[20px] pr-[20px] p-2px text-[#1DCD9F] border-[#1DCD9F] border-[1px] rounded-lg '> Login</button>
        <button className='pl-[20px] pr-[20px] p-2px text-[#000000] bg-[#1DCD9F] border-none rounded-lg '> Signin</button>
      </div>
    </div>
  )
}

export default Navbar