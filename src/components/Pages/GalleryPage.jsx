import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import { gallery } from "../../data";
import { videoGallery } from "../../data";

const GalleryPage = () => {
  return (
    <>
      <Header />
      <section className="py-6">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {gallery.map((image) => {
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
          {videoGallery.map((video) => {
            return (
              <>
                <div class="aspect-w-16 aspect-h-9">{video.embed}</div>
              </>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GalleryPage;
