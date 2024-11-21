import React from 'react'
import AdminBar from './AdminBar'
import Dashboard from '../Dashboard'
import { Outlet } from 'react-router'


function Admin() {
  return (
    <div className=' w-full flex-col sm:flex-row md:flex font-raleway '>
      
<AdminBar />
<hr className='sm:hidden ' />

<div className=' w-[100%] sm:w-[80%]  min-h-screen bg-[#F8F8F8] pt-5 pl-4 sm:pl-6 pb-5 '>
  <div>
  <h1 className='text-[1.5rem] font-semibold  font-raleway leading-[1.8rem]'>
    Welcome Admin!

</h1>
<p className='text-[#807a7a] text-[0.8rem] font-medium'>Wednesday April 19,2023</p>
  </div>
    <Outlet />
</div>
        </div>





  )
}

export default Admin