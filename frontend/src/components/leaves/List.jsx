import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { columns, LeaveButton } from '../../utils/LeaveHelper'

const List = () => {

  const[leaves, setLeaves] = useState([])

  const fetchLeaves = async ()=>{
    try {
        const response = await axios.get(
          "http://localhost:3000/api/leave",
           {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        if (response.data.success) {
          let sno = 1;
          const data = response.data.leaves.map((leave) => (
            {
              _id: leave._id,
              sno: sno++,
              employeeId:leave.employeeId?.employeeId,
              dept_name: leave.department?.dept_name,
              name: leave.userId?.name,
              leaveType:leave.leaveType,
              days:
                new Date(leave.endDate).getDate()-
                new Date(leave.startDate).getDate(),
                status:leave.status,
              action: (<LeaveButton Id={leave._id} />)

            }
          ))
          setLeaves(data)

        }
      }
      catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error)
        }
      } 
  }

useEffect(()=>{

   fetchLeaves()

},[]);

  return (
    <>
    {leaves.length>= 0 ?(
    <div className='py-6 px-10'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold'
        >
          Manage Leaves
        </h3>
      </div>
      <div className='flex justify-between items-center mb-3 '>
        <input
          type="text"
          placeholder='Search By emp name'
          className='px-4 py-0.5 bg-white rounded-lg border'

        />

        <div className='space-x-3 '>
          <button className='px-2 py-1 text-white bg-teal-600 hover:bg-teal-700 rounded-md'>Pending</button>
        <button className='px-2 py-1 text-white bg-teal-600 hover:bg-teal-700 rounded-md'>Approved</button>
        <button className='px-2 py-1 text-white bg-teal-600 hover:bg-teal-700 rounded-md'>Rejected</button>
        </div>
      </div>

      <div className='mt-3'>
        <DataTable columns={columns} data={leaves} pagination />
      </div>
    </div>
    ):<div>Lodding...</div>}
    </>
  )
}

export default List
