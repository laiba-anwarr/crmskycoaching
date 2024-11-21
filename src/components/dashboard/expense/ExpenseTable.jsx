import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

function ExpenseTable() {
  // Initialize table data with useState



  const [tableData, setTableData] = useState([
    {
      Sr: "1",
      Date:"12-02-2024",
      Category:"Office Expense",
      Title:"PTCL Bill",
      Amount:"4000 Rs",
  Description:"Two chairs one table",
PaymentMethod:"Bill Paid Via EasyPaisa",
      status: false,
      icon:<HiDotsVertical />
    },
    {
        Sr: "1",
        Date:"12-02-2024",
        Category:"Office Expense",
        Title:"PTCL Bill",
        Amount:"4000 Rs",
        Description:"Two chairs one table",
        PaymentMethod:"Bill Paid Via EasyPaisa",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
        Date:"12-02-2024",
        Category:"Office Expense",
        Title:"PTCL Bill",
        Amount:"4000 Rs",
        Description:"Two chairs one table",
        PaymentMethod:"Bill Paid Via EasyPaisa",
        status: false,
        icon:<HiDotsVertical />
      },

      {
        Sr: "1",
        Date:"12-02-2024",
        Category:"Office Expense",
        Title:"PTCL Bill",
        Amount:"4000 Rs",
        Description:"Two chairs one table",
        PaymentMethod:"Bill Paid Via EasyPaisa",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
        Date:"12-02-2024",
        Category:"Office Expense",
        Title:"PTCL Bill",
        Amount:"4000 Rs",
        Description:"Two chairs one table",
        PaymentMethod:"Bill Paid Via EasyPaisa",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
        Date:"12-02-2024",
        Category:"Office Expense",
        Title:"PTCL Bill",
        Amount:"4000 Rs",
        Description:"Two chairs one table",
        PaymentMethod:"Bill Paid Via EasyPaisa",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
        Date:"12-02-2024",
        Category:"Office Expense",
        Title:"PTCL Bill",
        Amount:"4000 Rs",
        Description:"Two chairs one table",
        PaymentMethod:"Bill Paid Via EasyPaisa",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
        Date:"12-02-2024",
        Category:"Office Expense",
        Title:"PTCL Bill",
        Amount:"4000 Rs",
        Description:"Two chairs one table",
        PaymentMethod:"Bill Paid Via EasyPaisa",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
        Date:"12-02-2024",
        Category:"Office Expense",
        Title:"PTCL Bill",
        Amount:"4000 Rs",
        Description:"Two chairs one table",
        PaymentMethod:"Bill Paid Via EasyPaisa",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
        Date:"12-02-2024",
        Category:"Office Expense",
        Title:"PTCL Bill",
        Amount:"4000 Rs",
        Description:"Two chairs one table",
        PaymentMethod:"Bill Paid Via EasyPaisa",
        status: false,
        icon:<HiDotsVertical />
      },
    // Add more entries as needed...
  ]);
const [openMenuIndex, setOpenMenuIndex]=useState(null);

const toggle=(index)=>{
  setOpenMenuIndex(openMenuIndex === index ? null  : index)

}




  return (
    <table className="w-full table-auto border-separate border-spacing-y-3 font-raleway">
      <thead>
        <tr>
          <th className="text-[#282828c0] font-semibold text-[1rem]  px-4 text-left">Sr</th>

          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Date</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Category</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-5 text-left">Title</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Amount</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Description</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Payment Method</th>

        </tr>
      </thead>
      <tbody className="w-full space-y-2">
        {tableData.map((item, index) => (
          <tr key={index} className="bg-white  text-[0.8rem] md:text-[0.91rem]">
            <td className="pl-4 py-2 rounded-tl-lg rounded-bl-lg">{item.Sr}</td>
          
            <td className="pl-4 py-2 flex items-center gap-2">
              
              <div className="flex flex-col">
                <span>{item.Date}</span>
                
              </div>
            </td>
            <td className="pl-4 py-2">{item.Category}</td>
            <td className="pl-4 py-2">{item.Title}</td>
          
            <td className="pl-4 py-2">{item.Amount}</td>
            <td className="pl-4 py-2">{item.Description}</td>
            <td className="pl-4 py-2">{item.PaymentMethod}</td>
          
            <td className="pr-3 cursor-pointer relative rounded-tr-lg rounded-br-lg overflow-visible w-5">
              <h1
              onClick={()=> toggle(index)}
              className=" border-[1.5px]  border-gray-100  rounded-md py-2 flex justify-center  items-center">{item.icon}</h1>
              
              {
                openMenuIndex === index && (
                  <div className="absolute mt-2 right-0 top-8  bg-white shadow-md z-10  w-24  border border-gray-300 rounded-md">
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-[0.9rem] font-medium">Edit</button>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100  text-[0.9rem] font-medium">Delete</button>
                  </div>
                )
              }
              

              
              
              
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
