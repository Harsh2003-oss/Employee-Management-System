import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
      <div className=' flex-shrink-0 h-full w-[400px] bg-blue-400 rounded-2xl '>
    <div className='flex justify-between items-center py-5 px-3'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 px-3 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='px-2 text-sm mt-8 items-center justify-center'>{data.taskDescription}</p>

<div className='mt-4'>
    <button>Accept Task</button>
</div>
</div>
    </div>
  )
}

export default NewTask
