import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
    console.log(data)
  return (
    <div id='tasklist' className=' overflow-x-scroll h-[55%] flex items-center gap-40 flex-nowrap py-5 mt-10 w-full '>
    {data.tasks.map((elem,idx)=>{
     if(elem.active){
      return <AcceptTask key={idx} />
     }

     if(elem.NewTask){
      return <NewTask key={idx}  />

     }

     if(elem.completed){
      return <CompleteTask key={idx}  />
     }

      if(elem.failed){
        return <FailedTask key={idx}  />
      }
    })}
  


</div>
    
  )
}

export default Tasklist
