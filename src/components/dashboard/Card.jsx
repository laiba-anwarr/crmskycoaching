import React from 'react'
import dashboardData from './index'
function Card() {
  return (
<>
{
  dashboardData.map((item, index)=>(
    <div key={index} className='w-full md:w-[300px] font-raleway bg-white rounded-lg h-32 pl-6 pt-5 cursor-pointer shadow-sm'>
    <h3 className='font-medium text-[#313131]'>{item.name}</h3>
    <h1 className='font-medium text-[2rem]'>{item.value}</h1>
    
    
    
        </div>
  ))
}

</>
  )
}

export default Card