import React, { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TbBuildingFactory } from "react-icons/tb";
import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";

import { startups } from "../data";

const Startups = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = (member) => {
    return (
      <>
        
        <div className="justify-center items-center flex fixed inset-0 z-50">
        <section class="border-orange-500 m-8 overflow-hidden rounded-lg shadow-2xl">
          <div class="p-4 ml-auto text-center">
            <h5 class="font-black">
              <span class="text-xl font-black sm:text-3xl">Batx Energies</span>
            </h5>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-3">
              <div class="text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  class="rounded-full w-24 mb-2 mx-auto"
                  alt="Avatar"
                />
                <h5 class="text-md font-medium leading-tight mb-1">John Doe</h5>
                <p class=" text-sm text-gray-500">Web designer</p>
              </div>
            </div>
          </div>
          <section className="py-2 md:px-4">
            <div className="container grid grid-rows-3 gap-2 m-4 mx-auto md:m-0">
              <div className="flex border overflow-hidden rounded-lg">
                <div className="flex items-center justify-center px-4 bg-orange-500">
                  <BsCalendar3></BsCalendar3>
                </div>
                <div className="flex items-center justify-between flex-1 p-3">
                  <p className="text-lg font-semibold">12/02/2020</p>
                  <p className="text-sm">Founded In</p>
                </div>
              </div>
              <div className="flex border overflow-hidden rounded-lg">
                <div className="flex items-center justify-center px-4 bg-orange-500">
                  <IoLocationOutline></IoLocationOutline>
                </div>
                <div className="flex items-center justify-between flex-1 p-3">
                  <p className="text-lg font-semibold">Delhi</p>
                  <p className="text-sm">Headquarters</p>
                </div>
              </div>
              <div className="flex border overflow-hidden rounded-lg">
                <div className="flex items-center justify-center px-4 bg-orange-500">
                  <TbBuildingFactory></TbBuildingFactory>
                </div>
                <div className="flex items-center justify-between flex-1 p-3">
                  <p className="text-lg font-semibold">Energy</p>
                  <p className="text-sm">Sector</p>
                </div>
              </div>
            </div>
          </section>
          <div className="px-4 py-2">
            <h5>
              <span className="text-md text-semibold">
                What is the problem?
              </span>
            </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <h1>How are they solving?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </section>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-orange-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-white"></div>
      </>
    );
  };

  return (
    <>
      <div className="max-w-lg mx-auto text-center py-10">
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
            Startups a
          </span>
          t a Glance
        </h2>
        <p className="mt-4 mb-6 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p>
      </div>
      <div class="flex overflow-x-auto  scroll-smooth" id="flavoursContainer">
        <div class="flex flex-nowrap py-6 gap-12 lg:ml-20 md:ml-20 ml-10">
          {startups.map((member) => {
            return (
              <>
                <div class="block w-64 group cursor-pointer">
                  <div class="relative flex items-end h-full transition bg-white border-4 border-orange-500 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#F97316] p-8">
                    <div class="lg:group-hover:opacity-0 lg:group-hover:absolute">
                      <img
                        src={member.image}
                        class="w-full"
                        alt={member.name}
                      />

                      <p class="mt-4 text-xl font-bold sm:text-2xl">
                        {member.name}
                      </p>
                    </div>

                    <div class="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
                      <p class="text-2xl font-bold">{member.name}</p>

                      <p class="mt-4 text-lg font-medium leading-relaxed">
                        <button
                          className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(true)}
                        >
                          Know More
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                {showModal ? (
                  <>
                    <Modal member={member} />
                  </>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
      <div class="flex overflow-x-auto  scroll-smooth" id="flavoursContainer">
        <div class="flex flex-nowrap py-6 gap-12 lg:ml-20 md:ml-20 ml-10">
          {startups.map((member) => {
            return (
              <>
                <div class="block w-64 group cursor-pointer">
                  <div class="relative flex items-end h-full transition bg-white border-4 border-orange-500 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#F97316] p-8">
                    <div class="lg:group-hover:opacity-0 lg:group-hover:absolute">
                      <img
                        src={member.image}
                        class="w-full"
                        alt={member.name}
                      />

                      <p class="mt-4 text-xl font-bold sm:text-2xl">
                        {member.name}
                      </p>
                    </div>

                    <div class="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
                      <p class="text-2xl font-bold">{member.name}</p>

                      <p class="mt-4 text-lg font-medium leading-relaxed">
                        <button
                          className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(true)}
                        >
                          Know More
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                {showModal ? (
                  <>
                    <Modal member={member} />
                  </>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
      <div className="py-4 px-6 grid place-items-end">
        <Link to="/startups">
          <a class="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-orange-500 rounded-full group" href="/">
            <span class="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
              <FiArrowRight />
            </span>

            <span class="text-sm font-medium transition-all group-hover:mr-4">
              View All
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Startups;
