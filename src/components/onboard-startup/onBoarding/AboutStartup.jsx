import Button from "../components/Button";

const AboutStartup = (props) => {
  return (
    <>
      <div className="my-12 py-6 w-[500px] mx-auto">
        <h1 className="text-4xl font-bold">About Startup</h1>
        <form className="mt-7 w-full">
          {/* Name of the Startup */}
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
          
          <Button handleClick={props.handleClick} previous={1} next={2} />
        </form>
      </div>
    </>
  );
};

export default AboutStartup;
