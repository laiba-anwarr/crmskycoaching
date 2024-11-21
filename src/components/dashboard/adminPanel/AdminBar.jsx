import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function AdminBar() {
  const [ismenuopen, setmenuopen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: <RxDashboard />, path: "dash-board" },
    { name: "Manage Students", icon: <FaRegUser />, path: "manage-student" },
    { name: "Faculty", icon: <FaRegUser />, path: "faculty" },
    { name: "Courses", icon: <FaBook />, path: "courses" },
    { name: "Batch", icon: <BiSolidMedal />, path: "batch" },
    { name: "Fee", icon: <FaMoneyBillWave />, path: "fee" },
    { name: "Expense", icon: <BsCurrencyDollar />, path: "expense" },
    { name: "Setting", icon: <IoSettingsOutline />, path: "/setting" },
  ];

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="font-raleway hidden sm:block sm:w-[20%] pt-5 sticky bottom-0 left-0">
        <h1 className="text-[1.5rem] font-bold text-secondary pb-4 font-raleway pl-4">
          CRM
        </h1>
        <hr />
        <div className="w-full mt-5">
          <nav>
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex gap-3 items-center pl-6 mb-2 py-3 ${
                    isActive
                      ? "bg-[#f4f4f4] border-l-[2px] border-secondary"
                      : "text-[#848484]"
                  }`
                }
              >
                <h4 className="font-extrabold text-[1.2rem]">{item.icon}</h4>
                <h4 className="font-medium">{item.name}</h4>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Responsive sidebar for smaller screens */}
      <div className="font-raleway block sm:hidden w-full">
        <div className="flex items-center gap-4 pb-3 pl-3 pt-4 w-full bg-[#F8F8F8]">
          <button
            onClick={() => setmenuopen(true)}
            className="text-[1.6rem] font-extrabold"
          >
            <BiMenu />
          </button>
          <h1 className="text-[1.5rem] font-bold text-secondary font-raleway">
            CRM
          </h1>
        </div>

        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 w-[70%] transform transition-transform duration-300 ease-in-out ${
            ismenuopen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between pr-5 py-5">
            <h1 className="text-[1.5rem] font-bold text-secondary pl-4">
              CRM
            </h1>
            <button
              onClick={() => setmenuopen(false)}
              className="text-[1.6rem] font-extrabold"
            >
              <RxCross2 />
            </button>
          </div>
          <div className="w-full mt-5">
            <nav>
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `w-full flex gap-3 items-center pl-6 mb-2 py-3 ${
                      isActive
                        ? "bg-[#f4f4f4] border-l-[2px] border-secondary"
                        : "text-[#848484]"
                    }`
                  }
                  onClick={() => setmenuopen(false)} // Close menu on link click
                >
                  <h4 className="font-extrabold text-[1.2rem]">{item.icon}</h4>
                  <h4 className="font-medium">{item.name}</h4>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminBar;
