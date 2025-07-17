import React from 'react'
import { useState } from 'react';
import NewTask from '../Tasklist/NewTask';
import { employees } from '../../Utils/Localstorage';

const CreateTask = () => {


  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();

    const NewTask=({ taskDate, taskDescription,setAssignTo, taskTitle, category, active: false, NewTask: true, failed: false, completed: false })

    const data = JSON.parse(localStorage.getItem('employees')) || []


   const assignedEmployee = employees.find(emp => assignTo===emp.firstName)

    setTaskTitle('')
    setTaskDescription('')
    setAssignTo('')
    setTaskDate('')
    setCategory('')

  }
  return (
    <div>

      <div>
        <form onSubmit={(e) => { submitHandler(e) }}
          className='flex w-full flex-wrap items-start justify-between' >
          <div className='w-1/2'>

            <div> <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value)
                }}
                className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' /></div>

            <div><h3>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value)
                }}
                type="date" /></div>

            <div> <h3>Assign to</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
            </div>

            <div> <h3>Category</h3>
              <input

                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" name="" id="" placeholder='design, dev, etc. ' /></div>


          </div>

          <div className='w-1/2'><h3>Description</h3>
            <textarea className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" name="" id="" cols="30" rows="10" placeholder='Please write' />
          </div>

          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
