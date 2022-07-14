import React from "react";
import { Link } from "react-router-dom";

import { images } from "../data";
import { videos } from "../data";

import { FiArrowRight } from "react-icons/fi";

const Gallery = () => {
  return (
    <>
      <section className="py-6">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="underline decoration-orange-600 decoration-4 underline-offset-2">
                Galle
              </span>
              ry
            </h2>

            <p className="mt-4 mb-6 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {images.map((image) => {
              return (
                <div className="relative block bg-black group" href="">
                  <img
                    className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="relative p-8">
                    <div className="mt-64">
                      <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                        <p className="text-sm text-white">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {videos.map((video) => {
              return (
                <>
                  <div className="aspect-w-16 aspect-h-9">{video.embed}</div>
                </>
              );
            })}
          </div>
        </div>
        <div className="grid place-items-end pr-8">
          <Link to="/gallery">
            <a className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-orange-500 rounded-full group" href="/">
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                <FiArrowRight />
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                View More
              </span>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Gallery;
