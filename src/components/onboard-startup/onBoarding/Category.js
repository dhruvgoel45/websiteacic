import React from "react";
import Button from "../components/Button";

const Category = (props) => {
  return (
    <>
      <div className="my-12 py-6 w-[500px] max-w-screen-md mx-auto">
        <h1 className="text-4xl font-bold">Category</h1>
        <form className="mt-6 w-full">
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
          <Button handleClick={props.handleClick} previous={2} next={4} />
        </form>
      </div>
    </>
  );
};

export default Category;
