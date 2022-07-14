import React from "react";
import { steeringCommittee } from "../data";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Steering = () => {
  return (
    <>
      <div className="px-3 py-16  bg-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
              Steeri
            </span>
            ng Committee
          </h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-4 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {steeringCommittee.map((member) => {
            return (
              <>
                <div className="flex flex-col items-center p-2 transition-colors duration-200 transform  group hover:bg-orange-400 rounded-xl">
                  <img
                    className="object-cover w-48 h-48 rounded-full ring-4 ring-orange-600"
                    src={member.src}
                    alt={member.alt}
                  />

                  <h1 className="mt-4 text-md font-semibold  group-hover:text-white">
                    {member.name}
                  </h1>

                  <p className="mt-2 text-sm text-gray-700  group-hover:text-white">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-700  group-hover:text-white">
                    {member.organisation}
                  </p>

                  <div className="flex mt-3 -mx-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 text-gray-800  group-hover:text-white"
                    >
                      <FaLinkedin></FaLinkedin>
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 text-gray-800  group-hover:text-white"
                    >
                      <FaTwitter></FaTwitter>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Steering;
