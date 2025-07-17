import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)

  return (
    <div className='bg-[1c1c1c] p-5 mt-5  rounded h-48 '>
     <div className='bg-red-400 mb-5 py-2 px-4 flex justify-between '>
      <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
      <h1 className='w-1/5 text-lg font-medium'>New Task</h1>
      <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
      <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
  
      </div>
 
 <div className='h-[80%]  '>
        {authData.employees.map(function(elem,idx){
 return <div key={idx} className='bg-black-100 mb-5 py-2 px- flex justify-between '>
      <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
      <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCount.active}</h3>
      <h5 className='w-1/5 text-lg font-medium text-yellow-300'>{elem.taskCount.completed}</h5>
      <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCount.failed}</h5>
      </div>
  })}
 </div>

    </div>
  )
}

export default AllTask
