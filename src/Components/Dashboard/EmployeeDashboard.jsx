import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#080808] h-screen'>
      <Header />
      <TaskListNumbers />
      <Tasklist />
    </div>
  )
}

export default EmployeeDashboard
