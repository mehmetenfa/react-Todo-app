import React from 'react'


const Header = () => {
  return (
    <div className='w-screen h-[7rem] flex flex-col justify-center items-center' >
        <h1 className='text-4xl'>React Todo List</h1>
        <p className='bg-black w-[25rem] h-[0.5rem] rounded-xl mt-3'></p>
    </div>
  )
}

export default Header