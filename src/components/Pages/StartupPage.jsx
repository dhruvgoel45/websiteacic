import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import { BsCalendar3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TbBuildingFactory } from "react-icons/tb";

import { startups } from "../../data";

const StartupPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto text-center py-10">
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
            Star
          </span>
          tups
        </h2>
        <p className="mt-4 mb-6 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p>
      </div>
      <div className="grid grid-cols-4">
        {startups.map((item) => {
          return (
            <>
              <section class="border-orange-500 m-8 overflow-hidden rounded-lg shadow-2xl">
                <div class="p-4 ml-auto text-center">
                  <h5 class="font-black">
                    <span class="text-xl font-black sm:text-3xl">
                      Batx Energies
                    </span>
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
                      <h5 class="text-md font-medium leading-tight mb-1">
                        John Doe
                      </h5>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <h1>How are they solving?</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </section>
            </>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default StartupPage;
