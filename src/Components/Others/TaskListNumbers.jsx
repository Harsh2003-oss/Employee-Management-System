import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
      <div className=' w-[45%] rounded-3xl py-5  px-10 bg-red-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className=' w-[45%] rounded-3xl py-5  px-10 bg-blue-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className=' w-[45%] rounded-3xl py-5  px-10 bg-green-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>

      <div className=' w-[45%] rounded-3xl py-5  px-10 bg-yellow-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
