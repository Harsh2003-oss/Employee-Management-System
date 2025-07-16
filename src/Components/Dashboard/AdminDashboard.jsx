import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AlTask from '../Others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />
<CreateTask />
<AlTask />


    </div>
  )
}

export default AdminDashboard
