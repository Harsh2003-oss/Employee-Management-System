import React, { useEffect, useState } from 'react'

const Header = (props) => {
 
const[username,setUsername]=useState('')

// useEffect(()=>{


// if(!data){
//   setUsername('Admin')
  
// }else{
//   setUsername(data.firstName)
// }
// },[])

const logOutUser = () =>{
  localStorage.setItem('loggedInUser','')
props.changeUser('')
  // window.location.reload()
}

  return (
    <div className='flex bg-black justify-between items-end'>
      <h1 className='text-2xl text-white font-medium'>Hello <br /><span className='text-3xl font-semibold'>username👋</span> </h1>
      <button onClick={logOutUser} className='bg-red-500  text-white px-5 py-2 rounded-b-lg text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
