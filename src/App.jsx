import React, { use, useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage,getLocalStorage } from './Utils/Localstorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

const [user,setUser]=useState('')
const[loggedInUserData,setLoggedInUserData] = useState(null)
const authData = useContext(AuthContext)
console.log(authData?.employees)

//  useEffect(()=>{
//    const loggedInUser = localStorage.getItem('loggedInUser')
//    if(loggedInUser){
//  const userData = JSON.parse(loggedInUser)
//  setUser(userData.role)
//  setLoggedInUserData(userData.data)
//    }
//  },[])


const handleLogin = (email,password)=>{
if(email=='admin@me.com' && password=='123'){
  setUser('admin')
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:employee}))
 
}
else if(authData){
  const employee = authData.employees.find((e)=>email===e.email && e.password=== password)
  if(employee){
  setUser('employee')
  setLoggedInUserData(employee)
  localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
 }
}
else{
  alert("Invalid Credentials")
}

}

if(!authData){
  return <div>Loading...</div>
}

  return (
    <>
  {!user ? <Login handleLogin={handleLogin} />:''}
       {user == 'admin' ? <AdminDashboard /> :(user=='employee'?<EmployeeDashboard data={loggedInUserData}/>:null)}
      
    </>
  )
}

export default App
