import React from 'react'

const AcceptTask = ({data}) => {
console.log(data)
  return (
       <div className=' flex-shrink-0 h-full w-[400px] bg-red-400 rounded-2xl '>
    <div className='flex justify-between items-center py-5 px-3'>
        <h3 className='bg-red-600 text-sm px-3 py- rounded'>{data.category}</h3>
        <h4>16 june 2025</h4>
    </div>
    <h2 className='mt-5 px-3 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='px-2 text-sm mt-8 items-center justify-center'>{data.taskDescription} </p>

<div className='flex justify-between mt-4'>
    <button className='bg-green-500 py-1 px-2 text-sm' >Mark as Completed</button>
    <button  className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
</div>
</div>

  )
}

export default AcceptTask
