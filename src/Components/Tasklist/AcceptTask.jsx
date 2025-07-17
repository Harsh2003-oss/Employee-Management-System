import React from 'react'

const AcceptTask = () => {
  return (
       <div className=' flex-shrink-0 h-full w-[400px] bg-red-400 rounded-2xl '>
    <div className='flex justify-between items-center py-5 px-3'>
        <h3 className='bg-red-600 text-sm px-3 py- rounded'>High</h3>
        <h4>16 june 2025</h4>
    </div>
    <h2 className='mt-5 px-3 text-2xl font-semibold'>Make a youtube video</h2>
    <p className='px-2 text-sm mt-8 items-center justify-center'>You can be charismatic, funny, and intelligent, but your videos are useless if you don’t provide value. Videos are not about you or what you can gain. You probably won’t be successful if you get on YouTube looking to get something out of it. </p>

<div className='flex justify-between mt-4'>
    <button className='bg-green-500 py-1 px-2 text-sm' >Mark as Completed</button>
    <button  className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
</div>
</div>

  )
}

export default AcceptTask
