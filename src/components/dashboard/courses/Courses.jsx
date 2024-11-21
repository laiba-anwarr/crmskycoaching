import React, { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import CourseTable from './CourseTable';
import { LuPlus } from "react-icons/lu";
import AddForm from '../Form/AddForm.Jsx';

function Courses() {
  const CoursePrompts = [
    { type: "text", placeholder: "Title" },
    { type: "number", placeholder: "Duration" },
    { type: "number", placeholder: "Fee" },
    { type: "select", placeholder: "Duration Type", options: ["Days", "Months"] },
  ];

  const [formVisible, setFormVisible] = useState(false);

  return (
    <>
      <div className="w-full font-raleway pr-3 overflow-x-auto">
        <div className="w-full mt-8 flex flex-wrap items-center gap-4 justify-between">
          {/* Title */}
          <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold leading-6 md:leading-8">
            Courses
          </h1>

          {/* Search and Add Button */}
          <div className="flex flex-wrap gap-4 items-center justify-start">
            {/* Search Input */}
            <div className="w-full md:w-[270px] bg-white rounded-md flex gap-4 items-center px-4">
              <FaMagnifyingGlass className="text-[1.2rem]" />
              <input
                type="text"
                className="w-full border-none px-1 text-[0.9rem] py-2 outline-none bg-transparent"
                placeholder="Search by name"
              />
            </div>

            {/* Add Course Button */}
            <button
              type="submit"
              onClick={() => setFormVisible(!formVisible)}
              className="py-2 px-4 flex items-center gap-2 text-[1rem] bg-[#ff593444] rounded-lg text-secondary font-semibold"
            >
              <h1 className="text-[1.1rem] font-extrabold">
                <LuPlus />
              </h1>
              Add Course
            </button>
          </div>
        </div>

        {/* Add Form Modal */}
        {formVisible && (
          <AddForm
            prompts={CoursePrompts}
            Title="Add Course"
            visibility={setFormVisible}
          />
        )}

        {/* Course Table */}
        <div className="w-full overflow-x-auto mt-10">
          <CourseTable />
        </div>
      </div>
    </>
  );
}

export default Courses;
