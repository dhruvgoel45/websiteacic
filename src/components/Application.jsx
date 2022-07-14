import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Application = () => {
  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
            Applicat
          </span>
          ion Form
        </h2>
        <p className="mt-4 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p>
      </div>
      <div className="px-5 grid grid-cols-3 gap-4">
        <div>
          <label className="block">
            <span className="block text-md font-medium mt-6 mb-2">
              Startup Venture Name
            </span>
            <input
              requireds
              type="text"
              placeholder=" Startup Venture Name"
              className="block w-full h-10 border border-solid border-gray-500 rounded"
            />
          </label>
          {/* Formation Date of Startup */}
          <div className="datepicker relative form-floating mb-5">
            <label
              htmlFor="floatingInput"
              className="block text-md font-medium mt-3 mb-2"
            >
              Select a date
            </label>
            <input
              type="date"
              className="form-control block px-3 py-2 text-bas bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 "
              placeholder="Select a date"
            />
          </div>
          <label className="block mt-5 mb-5">
            <span className="block text-md font-medium mb-2">
              Are you a registered company of India ?
            </span>
            <select className="block w-full shadow-sm border border-solid border-gray-500 rounded">
              <option value="Choose an Option">Selection Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-md font-medium mt-4 mb-2">
              First Founder's Name
            </span>
            <input
              type="text"
              placeholder=" First Founder's Name"
              className="block w-full h-8 shadow-sm border border-solid border-gray-500 rounded "
            />
          </label>
          <label className="block">
            <span className="block text-md font-medium mt-4 mb-2">
              First Founder's Mobile Number
            </span>
            <input
              type="number"
              placeholder=" First Founder's Mobile Number"
              className="block w-full h-8 shadow-sm border border-solid border-gray-500 rounded "
            />
          </label>
          <label className="block">
            <span className="block text-md font-medium mt-4 mb-2">
              First Founder's Email
            </span>
            <input
              type="email"
              placeholder=" First Founder's Email"
              className="block w-full h-8 shadow-sm border border-solid border-gray-500 rounded "
            />
          </label>
          <label className="block">
            <span className="block text-md font-medium mt-4 mb-2">
              First Founder's Name
            </span>
            <input
              type="text"
              placeholder=" First Founder's Name"
              className="block w-full h-8 shadow-sm border border-solid border-gray-500 rounded "
            />
          </label>
          <label className="block">
            <span className="block text-md font-medium mt-4 mb-2">
              First Founder's Mobile Number
            </span>
            <input
              type="number"
              placeholder=" First Founder's Mobile Number"
              className="block w-full h-8 shadow-sm border border-solid border-gray-500 rounded "
            />
          </label>
          <label className="block">
            <span className="block text-md font-medium mt-4 mb-2">
              First Founder's Email
            </span>
            <input
              type="email"
              placeholder=" First Founder's Email"
              className="block w-full h-8 shadow-sm border border-solid border-gray-500 rounded "
            />
          </label>
        </div>

        <div>
          <label className="block text-md mt-4">
            <span className="block mb-2">Startup Stage </span>
            <select className="block w-full shadow-sm border-solid border-gray-500 rounded">
              <option value="Enter Startup Stage">Enter Startup Stage</option>
              <option value="Option 1">Idea Stage</option>
              <option value="Option 2">Proof of Concept</option>
              <option value="Option 3">Prototype Completed</option>
              <option value="Option 4">Ready to Launch</option>
              <option value="Option 5">Already In Market</option>
            </select>
          </label>
          <label className="block text-md mt-4">
            <span className="block mb-2">Main Source of Funding</span>
            <select className="block w-full shadow-sm border-solid border-gray-500 rounded">
              <option value="Enter Startup Stage">
                Select Main Source of Funding
              </option>
              <option value="Option 1">Angel Investment</option>
              <option value="Option 2">Bootstrap</option>
              <option value="Option 3">Seed Fund</option>
              <option value="Option 4">Series Fund</option>
            </select>
          </label>
          <label className="block text-md mt-4">
            <span className="block mb-2">Revenue Status</span>
            <select className="block w-full shadow-sm border-solid border-gray-500 rounded">
              <option value="Enter Startup Stage">Select Revenue Status</option>
              <option value="Option 1">INR 0-10 LPA</option>
              <option value="Option 2">INR 10-25 LPA</option>
              <option value="Option 3">INR 25-50 LPA</option>
              <option value="Option 4">INR 50-100 LPA</option>
              <option value="Option 4">Not Launched</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-md font-medium mt-4 mb-2">
              Industry in which the Start-up operates/intends to operate
            </span>
            <input
              type="text"
              placeholder=" Enter Startup's Industry"
              className="block w-full h-8 shadow-sm border border-solid border-gray-500 rounded "
            />
          </label>
          <label htmlFor="bio" className="block text-md font-medium mt-5 mb-2">
            What is the Problem Statement ?
          </label>
          <textarea
            id="bio"
            placeholder=""
            rows="5"
            className="w-full rounded-md  border-gray-500"
          ></textarea>
          <label htmlFor="bio" className="block text-md font-medium mt-5 mb-2">
            What is proposed Solution ?
          </label>
          <textarea
            id="bio"
            placeholder=""
            rows="5"
            className="w-full rounded-md  border-gray-500"
          ></textarea>
        </div>

        <div></div>
      </div>
      <Footer/>
    </>
  );
};

export default Application;
