import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import BatchTable from "./BatchTable";
import { LuPlus } from "react-icons/lu";
import AddForm from "../Form/AddForm.Jsx";

function Batch() {
  const BatchPrompts = [
    { type: "text", placeholder: "Title" },
    { type: "select", placeholder: "Course", options: ["Course1", "Course2", "Course3"] },
    { type: "tel", placeholder: "Phone No" },
    { type: "date", placeholder: "Start date", label: "Start Date" },
    { type: "date", placeholder: "Expected End date", label: "Expected End Date" },
    { type: "select", placeholder: "Faculty", options: ["Muhammad Ali", "Muhammad Ali"] },
    { type: "number", placeholder: "Commission" },
  ];

  const [formVisible, setFormVisible] = useState(false);

  return (
    <>
      <div className="w-full font-raleway pr-3">
        <div className="w-full mt-8 flex flex-wrap items-center gap-4 justify-between">
          <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold leading-[2rem]">
            Batch
          </h1>
          <div className="flex flex-wrap gap-3 md:gap-6 items-center">
            <div className="w-full md:w-[270px] bg-white rounded-md flex gap-3 items-center px-4">
              <FaMagnifyingGlass className="text-[1.2rem]" />
              <input
                type="text"
                className="w-full border-none px-1 text-[0.9rem] py-2 outline-none bg-transparent"
                placeholder="Search by Batch ID"
              />
            </div>
            <button
              type="submit"
              onClick={() => setFormVisible(!formVisible)}
              className="py-2 px-4 flex items-center gap-2 text-[1rem] bg-[#ff593444] rounded-lg text-secondary font-semibold"
            >
              <h1 className="text-[1.1rem] font-extrabold">
                <LuPlus />
              </h1>
              Add Batch
            </button>
          </div>
        </div>

        {formVisible && (
          <AddForm
            prompts={BatchPrompts}
            Title="Add Batch"
            visibility={setFormVisible}
          />
        )}

        <div className="w-full mt-10 overflow-x-auto">
          <BatchTable />
        </div>
      </div>
    </>
  );
}

export default Batch;
