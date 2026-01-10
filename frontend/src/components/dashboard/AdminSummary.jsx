import React from 'react'
import SummaryCard from './SummaryCard'
import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaMoneyBillWave, FaTimesCircle, FaUsers } from 'react-icons/fa'

const AdminSummary = () => {
  return (
    <div className='p-6'>
      <h3 className='text-2xl font-bold'>Dashboard Overview</h3>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-6'>
          <SummaryCard icon={<FaUsers/>} text={"Total Employees"} number={23} color="bg-teal-600" />
          <SummaryCard icon={<FaBuilding/>} text={"Total Department"} number={5} color="bg-yellow-600" />
          <SummaryCard icon={<FaMoneyBillWave />} text={"Total Salary"} number={"$25000"} color="bg-red-600" />
       </div>
       <div className='mt-12'>
        <h4 className='text-2xl text-center font-bold '>Leave Details</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-6'>
            <SummaryCard icon={<FaFileAlt/>} text={"Lave Apply"} number={5} color="bg-teal-600" />
            <SummaryCard icon={<FaCheckCircle/>} text={"Lave Aproved"} number={2} color="bg-green-600" />
            <SummaryCard icon={<FaHourglassHalf/>} text={"Lave Pending"} number={4} color="bg-yellow-600" />
            <SummaryCard icon={<FaTimesCircle/>} text={"Lave Rejected"} number={1} color="bg-red-600" />
        </div>
       </div>
    </div>
  )
}

export default AdminSummary
