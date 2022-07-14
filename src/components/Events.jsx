import React from "react";
import { Link } from "react-router-dom";

// import { events } from "../data";

import { AiOutlineCalendar } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

const Events = () => {
  return (
    <>
      <div className="max-w-lg mx-auto text-center py-10">
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
            Eve
          </span>
          nts
        </h2>
        <p className="mt-4 mb-6 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p>
      </div>
      <section className="p-4 border shadow-2xl lg:p-4 mx-16 text-gray-800">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-80 bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <span className="flex my-2 text-xs">
                <AiOutlineCalendar size={16} /> 31/12/2020
              </span>
              <p className="mb-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                cumque soluta maiores fugiat perspiciatis provident velit
                ducimus quo earum, ab ut adipisci exercitationem obcaecati
                voluptatem, tempora expedita voluptas porro officia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque temporibus ducimus, voluptatem cumque saepe, suscipit fuga accusantium commodi alias distinctio unde voluptate esse ex. Quaerat architecto quia voluptatum rerum enim?
              </p>
              <span className="flex mb-2 text-sm">
                <h4>Speaker:</h4>
                <p> Davinder Singh</p>
              </span>
              <span className="flex mb-2 text-sm">
                <a href="/">Link</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-4 pt-10 px-16 grid place-items-end">
        <Link to="/aboutus">
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

export default Events;
