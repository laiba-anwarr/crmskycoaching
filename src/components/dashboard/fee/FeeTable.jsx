import React, { useState } from "react";

import { HiDotsVertical } from "react-icons/hi";

function FeeTable() {
  // Initialize table data with useState
  const [tableData, setTableData] = useState([
    {
      Sr: "1",
    StudentName:"Muhammad Ahsan",
      phone: "0356 7888889",
Course:"Mobile App Development",
    Batch:"2024",
      PaidFee :"10,000 Rs",
      DueFee:"5000 Rs",
     month:"October",
      status: false,
      icon:<HiDotsVertical />
    },
    {
        Sr: "1",
      StudentName:"Muhammad Ahsan",
        phone: "0356 7888889",
  Course:"Mobile App Development",
      Batch:"2024",
        PaidFee :"10,000 Rs",
        DueFee:"5000 Rs",
       month:"October",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      StudentName:"Muhammad Ahsan",
        phone: "0356 7888889",
  Course:"Mobile App Development",
      Batch:"2024",
        PaidFee :"10,000 Rs",
        DueFee:"5000 Rs",
       month:"October",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      StudentName:"Muhammad Ahsan",
        phone: "0356 7888889",
  Course:"Mobile App Development",
      Batch:"2024",
        PaidFee :"10,000 Rs",
        DueFee:"5000 Rs",
       month:"October",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      StudentName:"Muhammad Ahsan",
        phone: "0356 7888889",
  Course:"Mobile App Development",
      Batch:"2024",
        PaidFee :"10,000 Rs",
        DueFee:"5000 Rs",
       month:"October",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      StudentName:"Muhammad Ahsan",
        phone: "0356 7888889",
  Course:"Mobile App Development",
      Batch:"2024",
        PaidFee :"10,000 Rs",
        DueFee:"5000 Rs",
       month:"October",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      StudentName:"Muhammad Ahsan",
        phone: "0356 7888889",
  Course:"Mobile App Development",
      Batch:"2024",
        PaidFee :"10,000 Rs",
        DueFee:"5000 Rs",
       month:"October",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      StudentName:"Muhammad Ahsan",
        phone: "0356 7888889",
  Course:"Mobile App Development",
      Batch:"2024",
        PaidFee :"10,000 Rs",
        DueFee:"5000 Rs",
       month:"October",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      StudentName:"Muhammad Ahsan",
        phone: "0356 7888889",
  Course:"Mobile App Development",
      Batch:"2024",
        PaidFee :"10,000 Rs",
        DueFee:"5000 Rs",
       month:"October",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      StudentName:"Muhammad Ahsan",
        phone: "0356 7888889",
  Course:"Mobile App Development",
      Batch:"2024",
        PaidFee :"10,000 Rs",
        DueFee:"5000 Rs",
       month:"October",
        status: false,
        icon:<HiDotsVertical />
      },
      

      

      

    // Add more entries as needed...
  ]);

  // Toggle status handler
  
  const [openMenuIndex, setOpenMenuIndex]=useState(null);

const toggle=(index)=>{
  setOpenMenuIndex(openMenuIndex === index ? null  : index)

}

  return (
    <table className="w-full table-auto border-separate border-spacing-y-3 font-raleway">
      <thead>
        <tr>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Sr</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Student Name</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Phone No</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Course</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Batch</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Paid Fee</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Due Fee</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Month</th>
        </tr>
      </thead>
      <tbody className="w-full space-y-2">
        {tableData.map((item, index) => (
          <tr key={index} className="bg-white  text-[0.8rem] md:text-[0.91rem]">
            <td className="pl-4 py-2 rounded-tl-lg rounded-bl-lg">{item.Sr}</td>
           
            <td className="pl-4 py-2 text-[0.9rem]">{item.StudentName}</td>
            <td className="pl-4 py-2 text-[0.9rem]">{item.phone}</td>
            
            
            <td className="pl-4 py-2 text-[0.9rem] ">{item.Course}</td>
            
            <td className="pl-4 py-2 text-[0.9rem]">{item.Batch}</td>
            <td className="pl-4 py-2 text-[0.9rem]">{item.PaidFee}</td>
            <td className="pl-4 py-2 text-[0.9rem]">{item.DueFee}</td>
            <td className="pl-4 py-2 text-[0.9rem]">{item.month}</td>
        
            <td className="pr-3 cursor-pointer relative rounded-tr-lg rounded-br-lg overflow-visible">
              <h1
              onClick={()=> toggle(index)}
              className=" border-[1.5px]  border-gray-100 rounded-md py-2 flex justify-center items-center">{item.icon}</h1>
              
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

export default FeeTable;
