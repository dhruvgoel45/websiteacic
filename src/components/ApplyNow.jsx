import React from "react";

const ApplyNow = () => {
  return (
    <>
      <div className="p-6 py-12 bg-orange-500 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              For Startup Incubation
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>
                Join Us on this exciting journey of buiding your dream startup
              </span>
            </div>
            <a
              href="/"
              rel="noreferrer"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-full bg-white text-black "
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
