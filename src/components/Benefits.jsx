import React from "react";

import { benefits } from "../data";

const Benefits = () => {
  return (
    <>
      <section className="text-black bg-white">
        <div className="max-w-screen-xl px-4 pb-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
                Benefi
              </span>
              ts to Startups
            </h2>

            <p className="mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              return (
                <>
                  <div className="block p-8 transition border border-gray-300 shadow-xl rounded-xl hover:shadow-orange-800/10 hover:border-orange-800/10 ">
                    {benefit.icon}

                    <h3 className="mt-4 text-xl font-bold text-black">
                      {benefit.names}
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">{benefit.text}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
