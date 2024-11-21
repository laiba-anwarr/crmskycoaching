import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import AddForm from '../Form/AddForm.Jsx';
import { LuPlus } from "react-icons/lu";
import ExpenseTable from './ExpenseTable';

function Expense() {
  const ExpensePrompts = [
    { type: "text", placeholder: "Title" },
    { type: "text", placeholder: "Description" },
    { type: "number", placeholder: "Amount" },
    { type: "select", placeholder: "Category", options: ["Furniture Expense", "Utility Bills"] },
    { type: "date", placeholder: "Date", label: "Date" },
    { type: "select", placeholder: "Payment Method", options: ["Via EasyPaisa", "Via Jazzcash", "Via bank Account"] },
  ];

  const [formVisible, setFormVisible] = useState(false);

  return (
    <>
      <div className="w-full font-raleway pr-3 overflow-x-auto">

        <div className='w-full mt-8 flex flex-wrap items-center gap-2 justify-between'>
          <h1 className='text-[1.4rem] font-[700] leading-[2rem]'>
            Expense
          </h1>

          <div className='flex gap-4 flex-wrap'>
            <div className='w-[270px] bg-white rounded-md flex gap-4 items-center px-4'>
              <FaMagnifyingGlass className='text-[1.2rem]' />
              <input type="text" className='w-full border-none px-1 text-[0.9rem] py-2 outline-none bg-transparent'
                placeholder='Search by Title' />
            </div>

            <button
              onClick={() => setFormVisible(!formVisible)}
              type="submit"
              className='py-2 px-4 flex items-center gap-2 text-[1rem] bg-[#ff593444] rounded-lg text-secondary font-semibold'>
              <h1 className='text-[1.1rem] font-extrabold'><LuPlus /></h1>
              Add Expense
            </button>
          </div>

          {formVisible && (
            <AddForm prompts={ExpensePrompts} Title="Add Expense" visibility={setFormVisible} />
          )}

        </div>

        <div className='w-full mt-10'>
          <ExpenseTable />
        </div>

      </div>
    </>
  );
}

export default Expense;
