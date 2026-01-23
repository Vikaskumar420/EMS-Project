import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const List = () => {

  const [leaves,setLeaves] = useState(null)
  const {id} = useParams();

  const fetchLeaves = async ()=>{
    try {
      const response = await axios.get(`http://localhost:3000/api/leave/${id}`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      
      if(response.data.success){
        setLeaves(response.data.leave); 
        // setFilteredSalaries(response.data.salary);
      }
      
    } catch (error) {
      if(error.response && !error.response.data.success){
        alert(error.message);
      }
    }
  };

  useEffect(()=>{
    fetchLeaves();
  },[]);

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

       {/* List of Leaves */}
      {/* <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200 '>
              <tr>
                <th className='px-6 py-3'>SNO</th>
                <th className='px-6 py-3'>LeaveType</th>
                <th className='px-6 py-3'>startDate</th>
                <th className='px-6 py-3'>endDate</th>
                <th className='px-6 py-3'>reason</th>
                <th className='px-6 py-3'>status</th>
                
              </tr>
            </thead>
            <tbody>
              
                <tr 
                  key= {user._id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  <td>{sno++}</td>
                  <td>{salary.employeeId.employeeId}</td>
                  <td>{salary.basicSalary}</td>
                  <td>{salary.allowances}</td>
                  <td>{salary.deductions}</td>
                  <td>{salary.netSalary}</td>
                  <td>{new Date(salary.payDate).toLocaleDateString()}</td>
                </tr>
              
            </tbody>
          </table> */}
      
    </div>
    </div>
  )
}

export default List
