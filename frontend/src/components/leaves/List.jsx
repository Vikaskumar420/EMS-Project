import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div>
      <div className='p-6'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold'
        >
          Manage Leaves
        </h3>
      </div>
      <div className='flex justify-between items-center '>
        <input 
        type="text"
          placeholder='Search By emp name'
          className='px-4 py-0.5 bg-white rounded-lg border' />

        <Link to="/employee-dashboard/add-leave"
          className='px-4 py-1 bg-teal-600 rounded-lg text-white hover:bg-teal-700'
        >
          Add New Leave
        </Link>
      </div>
      
    </div>
    </div>
  )
}

export default List
