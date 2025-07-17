import React, { use, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage,getLocalStorage } from './Utils/Localstorage'

const App = () => {

const [user,setUser]=useState('')

const handleLogin = (email,password)=>{
if(email=='admin@me.com' && password=='123'){
  setUser('admin')
  console.log(user)
}
else if(email=='user@me.com' && password=='123'){
  setUser('employee')
    console.log(user)
}
else{
  alert("Invalid Credentials")
}

}

  return (
    <>
  {!user ? <Login handleLogin={handleLogin} />:''}
       
       {/* <EmployeeDashboard />
        */}
        {/* <AdminDashboard /> */}
   
    </>
  )
}

export default App
