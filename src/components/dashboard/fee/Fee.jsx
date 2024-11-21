import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import FeeTable from './FeeTable';
import AddForm from '../Form/AddForm.Jsx';

function Fee() {
  const StudentPrompts = [
    { type: "select", placeholder: "Selected Students", options: ["Ali", "Usman", "Hamza"] },
    { type: "select", placeholder: "Select Month", options: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] },
    { type: "number", placeholder: "Paid Fee" }
  ];

  const [formVisible, setFormVisible] = useState(false);

  const filters = [
    { name: "Course" },
    { name: "Batch" }
  ];

  const [selectedFilter, setSelectedFilter] = useState(filters[0].name); // Track selected filter
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className="w-full font-raleway pr-3 overflow-x-auto">

        <div className='w-full mt-8 flex flex-wrap items-center gap-2 justify-between'>
          <h1 className='text-[1.4rem] font-[700] leading-[2rem]'>
            Fee
          </h1>

          <div className='flex gap-4 flex-wrap'>
            <div className='w-[190px] bg-white rounded-md flex gap-4 items-center px-4'>
              <FaMagnifyingGlass className='text-[1.2rem]' />
              <input type="text" className='w-full border-none px-1 text-[0.9rem] py-2 outline-none bg-transparent'
                placeholder='Search by name' />
            </div>

            <div className='flex gap-2 flex-wrap md:flex-nowrap'>
              {filters.map((item, index) => (
                <select key={index} className='pl-2 text-[0.9rem] font-semibold cursor-pointer outline-none py-2 rounded-md px-5'>
                  <option className=''>{item.name}</option>
                </select>
              ))}
            </div>

            <div>
              <button
                type="submit"
                onClick={() => setFormVisible(!formVisible)}
                className='py-2 px-3 flex items-center gap-2 text-[1rem] bg-[#ff593444] rounded-lg text-secondary font-semibold'>
                <h1 className='text-[1.1rem] font-extrabold'><LuPlus /></h1>
                Add Fee
              </button>
            </div>
          </div>

          {formVisible && (
            <AddForm prompts={StudentPrompts} Title="Add Fee" visibility={setFormVisible} />
          )}

        </div>

        <div className='w-full mt-10'>
          <FeeTable />
        </div>

      </div>
    </>
  )
}

export default Fee;
