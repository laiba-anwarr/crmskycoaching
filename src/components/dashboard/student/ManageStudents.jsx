import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import StudentTable from './StudentTable';
import ActiveStudent from './ActiveStudent';
import { NavLink, Outlet } from 'react-router-dom';
import { LuPlus } from "react-icons/lu";
import DatePicker from 'react-datepicker'; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; 
import AddForm from '../Form/AddForm.Jsx';

function ManageStudents() {
const StudentPrompts=[
  {type:"file", placeholder:"" , label:"Profile Image"},

  {type:"text", placeholder:"Reg no"},
  {type:"text", placeholder:"Name"},
  {type:"tel", placeholder:"Phone No"},
 
  {type:"select", placeholder:"Course" ,  options:["Course1" , "Course2","Course3"] },
  {type:"date", placeholder:"Reg date" , label:"Reg Date"}

]
const [formVisible , setFormVisible]=useState(false)

 const filters=[
   
    {
        name:"Status",
    },
    {
        name:"Course",
    },
    {
        name:"Batch",
    }
 ]
 const [selectedFilter, setSelectedFilter] = useState(filters[0].name); // Track selected filter
 const [selectedDate, setSelectedDate] = useState(null);

    const navItems = [
        {
          name: "Active Students",
          path: "active-student",
        },
        {
          name: "Passed Out Students",
       
          path: "passed-out-students",
        },
        {
            name: "InActive Students",
           
            path: "in-active-students",
          }
        
       
      ];
    

  return (
   <>
<div className="w-full font-raleway pr-3 overflow-x-auto">
<div className='bg-white mt-4 px-5 inline-flex gap-4 rounded-md items-center'>
  <nav className='flex gap-2 md:gap-4 items-center justify-center md:justify-start py-2'>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `  flex  items-center  py-2 px-1 md:px-3 ${
                  isActive
                    ? "bg-secondary text-white rounded-lg text-center "
                    : "text-[#848484] border-none"
                }`
              }
            >
         
              <h4 className="font-medium text-[0.6rem] md:text-[0.9rem] ">{item.name}</h4>

              {/* */}
            </NavLink>
          ))}
        </nav>
</div>
<div className='w-full   mt-8 flex flex-wrap  items-center gap-1 justify-between '>
<Outlet />

   <div className=' mt-2 md:mt-0'>
 <div className='flex flex-wrap gap-3 md:gap-2'>
 <div className=' w-full md:w-[190px] bg-white rounded-md flex gap-4 items-center px-4 '> 
   <FaMagnifyingGlass className='text-[1.2rem]' />
    <input type="text" className='w-full border-none px-1 text-[0.9rem] py-2 outline-none bg-transparent'
     placeholder='Search by name ' />
   
   </div>
   <div className='flex gap-2 flex-wrap md:flex-nowrap'>

   <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)} // Update selected date
                  className="border rounded-md px-1 outline-none cursor-pointer py-2 w-full md:w-28 pl-3 text-[0.9rem] font-semibold placeholder:text-black"
                  dateFormat="yyyy/MM/dd" // Set desired date format
                  placeholderText="Date" // Placeholder for the input
                />

 {
    filters.map((item , index)=>(
        <select key={index} className='pl-2  text-[0.9rem] font-semibold cursor-pointer outline-none py-2 rounded-md px-5 ' >
        <option className=''>
         {item.name}
        </option>
        {
          
        }
    </select>

    ))
 }

   </div>
   <div>
   <button  
    type="submit"
    onClick={()=> setFormVisible(!formVisible)}
    className='py-2 px-2 flex items-center gap-2 text-[1rem] bg-[#ff593444]  rounded-lg text-secondary font-semibold '>
   <h1 className='text-[1.1rem] font-extrabold'><LuPlus /></h1>


  Add Student
    </button>
 </div>



   </div>


   {
formVisible && (
  <AddForm   prompts={StudentPrompts} Title="Add Student"   visibility={setFormVisible}
       />
)
}

   </div>




</div>


<div className='w-full overflow-x-auto mt-10'>
    <StudentTable />
</div>






</div>

   </>
  )
}

export default ManageStudents