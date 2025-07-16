import React from 'react'

const Header = () => {
  return (
    <div className='flex bg-black justify-between items-end'>
      <h1 className='text-2xl text-white font-medium'>Hello <br /><span className='text-3xl font-semibold'>Harsh👋</span> </h1>
      <button className='bg-red-500  text-white px-5 py-2 rounded-b-lg text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
