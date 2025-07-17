import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#080808] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data}/>
      <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
