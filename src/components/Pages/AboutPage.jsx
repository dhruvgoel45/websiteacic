import React from "react";

import { about } from "../../data";

import Header from "../Header";
import Team from "../Team";
import Steering from "../Steering";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <img className="w-full h-84" src={about[0].imgSrc} alt="" />
      <div className="p-16 max-w-7xl mx-auto text-left">
        <h2 className="text-4xl font-bold sm:text-4xl">
          <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
            Over
          </span>
          view
        </h2>
        <p className="mt-4">{about[0].overview}</p>

        <h2 className="">Vision</h2>
        <p className="">{about[0].vision}</p>
        <h2 className="">Mission</h2>
        <ul className="">
          <li className="">{about[0].mission[0]}</li>
          <li className="">{about[0].mission[1]}</li>
          <li className="">{about[0].mission[2]}</li>
        </ul>
        <div className="py-8">
          <h2 className="text-4xl font-bold sm:text-4xl">
            <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
              BML M
            </span>
            unjal University
          </h2>
          <p>{about[0].university}</p>
          <br />
          <p>{about[0].itoe}</p>
        </div>
        <h2 className="text-4xl font-bold sm:text-4xl">
          <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
            Atal Inn
          </span>
          ovation Mission
        </h2>
        <p>{about[0].aim}</p>
      </div>
      <Team />
      <Steering />
      <Footer />
    </>
  );
};

export default AboutPage;
