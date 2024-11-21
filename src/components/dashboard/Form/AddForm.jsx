import React, { useRef, useState } from "react";
import defaultImage from "../../../assets/Avatar.png"; // Default image
import { RxCross2 } from "react-icons/rx";
import DatePicker from 'react-datepicker'; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; 

function AddForm({ prompts, Title, visibility,  }) {
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image
  const fileInputRef = useRef(null); // Ref for the file input
const [regdate, setRegdate]=useState(new Date())


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server)
    console.log("Form submitted");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the selected image
      };
      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  return (
    <div className="fixed inset-0  flex justify-center items-center w-full bg-black bg-opacity-50 z-50 font-raleway">
      <div
      style={{borderRadius:"8px"}}
      className=" scro w-full md:max-h-[95%] scro 2xl:h-[80%] overflow-y-auto   md:w-[400px] bg-white shadow-md py-4">
       <div className="flex justify-between items-center">
       <h3 className="text-[1.4rem] leading-[1.9rem] font-bold px-6">
          {Title}
        </h3>
      <h2 
      onClick={()=> visibility(false)}
      className="text-red-500 text-[1.5rem] pr-4 cursor-pointer" ><RxCross2 /></h2>

       </div>
        <hr className="w-full h-[1px] border-none mt-3 bg-[#CBCBCB]" />
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 px-6 mt-4">



          {prompts.map((prompt, index) => (

            <div key={index}>
                     <label className="text-[0.9rem]   font-medium my-5" > 
{prompt.label}

                </label>
              {prompt.type === "file" ? (
                <>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageChange} // Handle file input change
                  />
                  <div
                    onClick={() => fileInputRef.current.click()} // Trigger file input click
                    className="flex cursor-pointer flex-col gap-2 justify-center items-center rounded-md py-6 mt-2 mb-3  border-2 border-dashed border-gray-200"
                  >
                    <img
                      src={selectedImage || defaultImage} // Show selected image or default image
                      className="w-12 h-12 rounded-full object-cover"
                      alt="Uploaded"
                    />
                    <div className="flex gap-2 ">
                    <h2 className="text-[1rem] underline text-red-500 font-medium">{selectedImage ? "Change Image" : "Click to Upload"} 
                       </h2>
                       <h2 className="text-black ">Or drag and drop</h2>
                    </div>
                  <p className="text-[#666666] font-medium text-[0.9rem] mt-1">JPG, PNG (max. 10MB)</p>
                  
                  </div>
                </>
              ) : prompt.type === "select" ? (
            <div className=" bg-[#EEF0F6] w-full pr-3 rounded-lg">
                <select 
              defaultValue={prompt.placeholder}
              className="outline-none bg-transparent w-full placeholder:text-[#8F9094] py-2 px-4 rounded-lg" >
<option disabled>{prompt.placeholder}</option>
{
  prompt.options.map((option , index)=>(
    <option value={option}>
      {option}
    </option>
      
  ))
}
              </select>
            </div>
              ): prompt.type === "date" ? (
               <div className="w-[100%]  bg-[#EEF0F6] rounded-lg py-2 px-4 cursor-pointer "> 
                 <DatePicker
                selected={regdate}
                onChange={(date) => setRegdate(date)} // Update selected date
               className=" react-datepicker-wrapper outline-none bg-transparent px-4 rounded-lg cursor-pointer"
                dateFormat="yyyy/MM/dd" // Set desired date format
                style={{ width: "100%" }}
              />
               </div>
         
              ) :(
                <input
                  type={prompt.type}
                  placeholder={prompt.placeholder}
                  className="outline-none bg-[#EEF0F6] w-full py-2 px-4 rounded-lg"
                />
              )}
              
            </div>
          ))}
          <div className="w-full flex justify-between items-center gap-4 mt-4">
            <button type="button" className="w-[50%] py-2 bg-[#ECECEC] rounded-lg text-black font-semibold">
              Cancel
            </button>
            <button type="submit" className="w-[50%] py-2 bg-secondary rounded-lg text-white font-semibold">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
