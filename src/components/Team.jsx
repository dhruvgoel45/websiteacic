import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { team } from "../data";

const Team = () => {
  return (
    <>
      <div className="px-3 py-16  bg-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-4 lg:max-w-2xl sm:text-center">
          <p className="inline-block px-3 py-px mb-2 lg:text-4xl text-4xl font-bold font-poppins tracking-wider">
            <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
              ACIC-BM
            </span>
            U Foundation Team
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => {
            return (
              <>
                <div className="flex flex-col items-center p-2 transition-colors duration-200 transform cursor-pointer group hover:bg-orange-400 rounded-xl">
                  <img
                    className="object-cover w-48 h-48 rounded-full ring-4 ring-orange-600"
                    src={member.src}
                    alt={member.alt}
                  />

                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                    {member.name}
                  </h1>

                  <p className="mt-2 text-gray-700 capitalize group-hover:text-white">
                    {member.position}
                  </p>
                  <p className=" text-gray-700 capitalize group-hover:text-white">
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

export default Team;
