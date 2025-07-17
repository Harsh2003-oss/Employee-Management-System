import React, { useEffect, useState } from 'react'

const Header = ({data}) => {
 
const[username,setUsername]=useState('')

useEffect(()=>{


if(!data){
  setUsername('Admin')
  
}else{
  setUsername('data.firstName')
}
},[])
  return (
    <div className='flex bg-black justify-between items-end'>
      <h1 className='text-2xl text-white font-medium'>Hello <br /><span className='text-3xl font-semibold'>{username}👋</span> </h1>
      <button className='bg-red-500  text-white px-5 py-2 rounded-b-lg text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
