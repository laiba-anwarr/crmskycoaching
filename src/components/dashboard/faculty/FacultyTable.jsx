import React, { useState } from "react";
import profilePic from "../../../assets/cesar-rincon-XHVpWcr5grQ-unsplash.jpg";
import { HiDotsVertical } from "react-icons/hi";

function FacultyTable() {
  // Initialize table data with useState
  const [tableData, setTableData] = useState([
    {
      ID: "1",
     email:"TheSkyCoaching@gmail.com",
      name: "Muhammad Ali",
      image: profilePic,
      phone: "0356 7888889",

      JoiningDate: "21-Feb-2024",
      TotalStudents:"100",
      Expertise:"Mobile App Development",
      Balance:"20,000 Rs",
      Earning:"30,000 RS",
      status: false,
      icon:<HiDotsVertical />
    },
    {
        ID: "1",
       email:"TheSkyCoaching@gmail.com",
        name: "Muhammad Ali",
        image: profilePic,
        phone: "0356 7888889",
  
        JoiningDate: "21-Feb-2024",
        TotalStudents:"100",
        Expertise:"Mobile App Development",
        Balance:"20,000 Rs",
        Earning:"30,000 RS",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        ID: "1",
       email:"TheSkyCoaching@gmail.com",
        name: "Muhammad Ali",
        image: profilePic,
        phone: "0356 7888889",
  
        JoiningDate: "21-Feb-2024",
        TotalStudents:"100",
        Expertise:"Mobile App Development",
        Balance:"20,000 Rs",
        Earning:"30,000 RS",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        ID: "1",
       email:"TheSkyCoaching@gmail.com",
        name: "Muhammad Ali",
        image: profilePic,
        phone: "0356 7888889",
  
        JoiningDate: "21-Feb-2024",
        TotalStudents:"100",
        Expertise:"Mobile App Development",
        Balance:"20,000 Rs",
        Earning:"30,000 RS",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        ID: "1",
       email:"TheSkyCoaching@gmail.com",
        name: "Muhammad Ali",
        image: profilePic,
        phone: "0356 7888889",
  
        JoiningDate: "21-Feb-2024",
        TotalStudents:"100",
        Expertise:"Mobile App Development",
        Balance:"20,000 Rs",
        Earning:"30,000 RS",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        ID: "1",
       email:"TheSkyCoaching@gmail.com",
        name: "Muhammad Ali",
        image: profilePic,
        phone: "0356 7888889",
  
        JoiningDate: "21-Feb-2024",
        TotalStudents:"100",
        Expertise:"Mobile App Development",
        Balance:"20,000 Rs",
        Earning:"30,000 RS",
        status: false,
        icon:<HiDotsVertical />
      },
      {
        ID: "1",
       email:"TheSkyCoaching@gmail.com",
        name: "Muhammad Ali",
        image: profilePic,
        phone: "0356 7888889",
  
        JoiningDate: "21-Feb-2024",
        TotalStudents:"100",
   
        Balance:"20,000 Rs",
        Earning:"30,000 RS",
        status: false,
        icon:<HiDotsVertical />
      },
      

      

      

      

    // Add more entries as needed...
  ]);

  // Toggle status handler
  const toggleStatus = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData[index].status = !updatedTableData[index].status;
    setTableData(updatedTableData);
  };
  const [openMenuIndex, setOpenMenuIndex]=useState(null);

const toggle=(index)=>{
  setOpenMenuIndex(openMenuIndex === index ? null  : index)

}

  return (
    <table className="w-full table-auto border-separate border-spacing-y-3 font-raleway">
      <thead>
        <tr>
          <th className="text-[#282828c0] font-semibold text-[1rem]  px-4 text-left">ID</th>

          <th className="text-[#282828c0] font-semibold text-[1rem] px-7 text-left">Name</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Phone no</th>
          
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Total Students</th>

          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Balance</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Earning</th>
          <th className="text-[#282828c0] font-semibold text-[1rem] px-4 text-left">Status</th>
        </tr>
      </thead>
      <tbody className="w-full space-y-2">
        {tableData.map((item, index) => (
          <tr key={index} className="bg-white text-[0.8rem] md:text-[0.91rem]">
            <td className="pl-4 py-2 rounded-tl-lg rounded-bl-lg">{item.ID}</td>
           
            <td className="pl-4 py-2 flex items-center gap-2">
              <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col">
                <span>{item.name}</span>
                <td className=" text-[0.8rem] text-[#848484] text-center">{item.email}</td>
                
              </div>
            </td> 
            <td className="pl-5 md:pl-3 py-2 text-[0.9rem] ">{item.phone}</td>
            
            <td className="pl-10 py-2 text-[0.9rem] ">{item.TotalStudents}</td>
            
            <td className="pl-4 py-2 text-[0.9rem]">{item.Balance}</td>
            <td className="pl-4 py-2 text-[0.9rem]">{item.Earning}</td>
            <td className="pl-4 py-2 text-[0.9rem]">
              <div
                className={`toggle-button ${item.status ? "active" : ""}`}
                onClick={() => toggleStatus(index)}
              >
                <div className="toggle-circle"></div>
              </div>
            </td>
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

export default FacultyTable;
