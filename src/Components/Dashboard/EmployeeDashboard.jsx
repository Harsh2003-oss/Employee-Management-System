import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#080808] h-screen'>
      <Header data={data} />
      <TaskListNumbers data={data}/>
      <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard
