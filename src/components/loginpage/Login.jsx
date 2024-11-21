import React from 'react'
import mainImage from "../../assets/495 8.png"
import cardImage from "../../assets/image 3.png"
import LoginForm from './LoginForm'
function Login() {
  return (
    <div className='w-full flex  overflow-hidden px-6 md:px-4 justify-center py-10 '
    style={{
        backgroundImage: `url(${mainImage})`,
       
      
        backgroundRepeat: "repeat",
        
        width:"100%"             
      }}
    >
<div className='h-[500px] w-full md:w-[850px] flex rounded-xl shadow-2xl '>
<div className='left w-[55%] h-full rounded-bl-xl rounded-tl-xl hidden md:block' >
<img src={cardImage}
className='h-full w-full  object-cover object-center rounded-tl-xl rounded-bl-xl'
/>
</div>

<div className='right w-full md:w-[45%]  h-full pt-12  bg-white  rounded-[24px]'>
    <div className='pl-7'>
    <h1 className='text-[1.7rem] text-secondary font-bold'>CRM</h1>
<h1 className='text-[1.4rem] pt-6  font-semibold'>Admin Login</h1>
<p className='text-[0.9rem] pt-3 w-[80%]'>Please enter the credentials associated with your account.</p>
    </div>

<LoginForm />



</div>
</div>
    </div>
  )
}

export default Login