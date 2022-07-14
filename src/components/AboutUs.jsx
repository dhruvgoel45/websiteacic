import React from "react";
import { Link } from "react-router-dom";

import { about } from "../data";

import { FiArrowRight } from "react-icons/fi";


const AboutUs = () => {
  return (
    <>
      <section className="pt-16">
        <div className="mx-auto text-center">
          <h2 className="text-4xl font-bold sm:text-4xl">
            <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
              Abou
            </span>
            t ACIC-BMU Foundation
          </h2>
        </div>
        <div className="p-2 max-w-7xl mx-auto text-left">
          <p className="mt-4">{about[0].heroAbout}</p>
        </div>
        <div className="grid place-items-center">
          <Link to="/aboutus">
            <a class="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-orange-500 rounded-full group">
              <span class="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                <FiArrowRight />
              </span>

              <span class="text-sm font-medium transition-all group-hover:mr-4">
                Know More
              </span>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
