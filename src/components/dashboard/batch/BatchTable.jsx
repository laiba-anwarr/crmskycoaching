import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

function BatchTable() {
  // Initialize table data with useState



  const [tableData, setTableData] = useState([
    {
      Sr: "1",
     
      Title:"B-123",
     Course:"Backend Development",
   Instructor:"Muhammad Ali",
     Comission:"10,000 Rs",
      status: false,
      StartDate:"12-02-2024",
      EndDate:"12-06-2024",
      icon:<HiDotsVertical />
    },
    {
        Sr: "1",
       
        Title:"B-123",
       Course:"Backend Development",
     Instructor:"Muhammad Ali",
       Comission:"10,000 Rs",
        status: false,
        StartDate:"12-02-2024",
        EndDate:"12-06-2024",
        icon:<HiDotsVertical />
      },
      {



        Sr: "1",
       
        Title:"B-123",
       Course:"Backend Development",
     Instructor:"Muhammad Ali",
       Comission:"10,000 Rs",
        status: false,
        StartDate:"12-02-2024",
        EndDate:"12-06-2024",
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
       
        Title:"B-123",
       Course:"Backend Development",
     Instructor:"Muhammad Ali",
       Comission:"10,000 Rs",
        status: false,
        StartDate:"12-02-2024",
        EndDate:"12-06-2024",
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      
        Title:"B-123",
       Course:"Backend Development",
     Instructor:"Muhammad Ali",
       Comission:"10,000 Rs",
        status: false,
        StartDate:"12-02-2024",
        EndDate:"12-06-2024",
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
    
        Title:"B-123",
       Course:"Backend Development",
     Instructor:"Muhammad Ali",
       Comission:"10,000 Rs",
        status: false,
        StartDate:"12-02-2024",
        EndDate:"12-06-2024",
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
        
        Title:"B-123",
       Course:"Backend Development",
     Instructor:"Muhammad Ali",
       Comission:"10,000 Rs",
        status: false,
        StartDate:"12-02-2024",
        EndDate:"12-06-2024",
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
       
        Title:"B-123",
       Course:"Backend Development",
     Instructor:"Muhammad Ali",
       Comission:"10,000 Rs",
        status: false,
        StartDate:"12-02-2024",
        EndDate:"12-06-2024",
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
       
        Title:"B-123",
       Course:"Backend Development",
     Instructor:"Muhammad Ali",
       Comission:"10,000 Rs",
        status: false,
        StartDate:"12-02-2024",
        EndDate:"12-06-2024",
        icon:<HiDotsVertical />
      },
      {
        Sr: "1",
      
        Title:"B-123",
       Course:"Backend Development",
     Instructor:"Muhammad Ali",
       Comission:"10,000 Rs",
        status: false,
        StartDate:"12-02-2024",
        EndDate:"12-06-2024",
        icon:<HiDotsVertical />
      },
    // Add more entries as needed...
  ]);
const [openMenuIndex, setOpenMenuIndex]=useState(null);

const toggle=(index)=>{
  setOpenMenuIndex(openMenuIndex === index ? null  : index)

}


  // Toggle status handler
  const toggleStatus = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData[index].status = !updatedTableData[index].status;
    setTableData(updatedTableData);
  };

  return (
    <table className="w-full table-auto border-separate border-spacing-y-3 font-raleway">
      <thead>
        <tr>
          <th className="text-[#282828c0] font-semibold text-[1rem]  px-4 text-left">Sr</th>

          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Batch ID</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Course</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Start Date</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">End Date</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Instructor</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Comission</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-center">Status</th>
        </tr>
      </thead>
      <tbody className="w-full space-y-2">
        {tableData.map((item, index) => (
          <tr key={index} className="bg-white  text-[0.8rem] md:text-[0.91rem]">
            <td className="pl-4 py-2 rounded-tl-lg rounded-bl-lg">{item.Sr}</td>
          
            <td className="pl-4 py-2 flex items-center gap-2">
              
              <div className="flex flex-col">
                <span>{item.Title}</span>
                
              </div>
            </td>
            <td className="pl-4 py-2">{item.Course}</td>
            <td className="pl-4 py-2">{item.StartDate}</td>
            <td className="pl-4 py-2">{item.EndDate}</td>
            <td className="pl-4 py-2">{item.Instructor}</td>
            <td className="pl-4 py-2">{item.Comission}</td>
            <td className="pl-4 py-2">
              <div
                className={`toggle-button ${item.status ? "active" : ""}`}
                onClick={() => toggleStatus(index)}
              >
                <div className="toggle-circle"></div>
              </div>
            </td>
            <td className="pr-3 cursor-pointer relative rounded-tr-lg rounded-br-lgoverflow-visible">
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

export default BatchTable;
