import Button from "../components/Button";

const ContactInfo = (props) => {
  return (
    <>
      <div className="my-12 py-6 w-[500px] max-w-screen-md mx-auto">
        <h1 className="text-4xl font-bold">Personal Details</h1>
        <form className="mt-8">
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
          <div className="mt-5">
          <Button  handleClick={props.handleClick} previous={1} next={3} />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactInfo;
