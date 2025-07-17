import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  console.log(handleLogin)

const[email,setEmail] = useState('')
const[password,setPassword]= useState('')

const submitHandler = (e) =>{
    e.preventDefault()
    console.log("email is",email)
        console.log("password is",password)
        handleLogin(email,password)
        setEmail("")
            setPassword("")
        
    
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 p-20 rounded-xl border-emerald-600'>
        <form  onSubmit={(e)=>{
            submitHandler(e);
        }}
        className='flex flex-col items-center justify-center'>
           
            <input
            value={email}
            onChange={(e)=>{
                   setEmail(e.target.value)
         
            }}
            required className='border-2 border-emerald-600 py-4 px-5 text-xl rounded-full' type="email" placeholder='Enter your email'/>
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
             required className='border-2 border-emerald-600 py-4 px-5 text-xl mt-6 rounded-full' type="password" placeholder='Enter your password'/>
<button className='border-2 bg-emerald-600 py-4 mt-6 px-5 text-xl rounded-full'>Log in</button>      
        </form>
      </div>
    </div>
  )
}

export default Login
