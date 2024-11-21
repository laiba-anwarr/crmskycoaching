import React, { useState } from 'react'

function LoginForm() {
const [email , setEmail]=useState("")
const [password , setPassword]=useState("")

function handleSubmit(e){
e.preventDefault()
console.log("email", email)
console.log("password", password)
}

  return (
    <div>
<form onSubmit={handleSubmit}>
<div className='w-full mt-5 flex flex-col gap-4 pl-7'>
<input
value={email}
onChange={(e)=> setEmail(e.target.value)}
type='email' placeholder='Email Address'
className='w-[90%] px-4 h-10 bg-[#EEF0F6] rounded-md outline-none border-none'
/>
<input type='password'placeholder='Password'
value={password}
onChange={(e)=> setPassword(e.target.value)}
className='w-[90%] px-4 h-10 bg-[#EEF0F6] rounded-md outline-none border-none'
/>
</div>
<div className='w-full text-center mt-16  '>
    <button  
    type="submit"
    className='w-[80%] py-2 bg-secondary rounded-lg text-white font-semibold '>
        Login
    </button>
</div>
</form>


    </div>
  )
}

export default LoginForm