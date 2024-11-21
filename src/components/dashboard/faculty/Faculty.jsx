import React, { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import FacultyTable from './FacultyTable';
import AddForm from '../Form/AddForm.Jsx';

function Faculty() {
  const FacultyPrompts = [
    { type: "file", placeholder: "", label: "Profile Image" },
    { type: "text", placeholder: "Name" },
    { type: "email", placeholder: "Email" },
    { type: "text", placeholder: "Reg no" },
    { type: "tel", placeholder: "Phone No" },
    { type: "select", placeholder: "Gender", options: ["Male", "Female"] },
    { type: "text", placeholder: "Address" },
    { type: "select", placeholder: "Expertise", options: ["Mobile App", "Web App"] },
    { type: "number", placeholder: "Experience" },
  ];
  
  const [formVisible, setFormVisible] = useState(false);
  const filters = [
    { name: "Status" },
    { name: "Expertise" },
  ];

  return (
    <>
      <div className="w-full font-raleway pr-3 overflow-x-auto">
        <div className="w-full mt-8 flex flex-wrap items-center gap-4 justify-between">
          <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold leading-6 md:leading-8">
            Faculty
          </h1>

          <div className="flex flex-wrap gap-4 items-center justify-start">
            <div className="w-full md:w-[190px] bg-white rounded-md flex gap-4 items-center px-4">
              <FaMagnifyingGlass className="text-[1.2rem]" />
              <input
                type="text"
                className="w-full border-none px-1 text-[0.9rem] py-2 outline-none bg-transparent"
                placeholder="Search by name"
              />
            </div>

            <div className="flex gap-2  flex-wrap md:flex-nowrap">
              {filters.map((item, index) => (
                <select
                  key={index}
                  className="pl-2 text-[0.9rem] font-semibold cursor-pointer outline-none py-2 rounded-md px-5"
                >
                  <option>{item.name}</option>
                </select>
              ))}
            </div>

            <button
              onClick={() => setFormVisible(!formVisible)}
              type="submit"
              className="py-2 px-2 flex items-center gap-2 text-[1rem] bg-[#ff593444] rounded-lg text-secondary font-semibold"
            >
              <h1 className="text-[1.1rem] font-extrabold">
                <LuPlus />
              </h1>
              Add Faculty
            </button>
          </div>
        </div>

        {formVisible && (
          <AddForm
            prompts={FacultyPrompts}
            Title="Add Faculty"
            visibility={setFormVisible}
          />
        )}

        <div className="w-full overflow-x-auto mt-10">
          <FacultyTable />
        </div>
      </div>
    </>
  );
}

export default Faculty;
