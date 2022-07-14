import React from "react";

import { contact } from "../data";

const ContactUs = () => {
  const details = contact[0];
  return (
    <>
      <section id="contact" className="text-gray-400 bg-orange-500 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?q=bml%20munj&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>

            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">{details.address}</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a href="/" className="text-orange-500 leading-relaxed">
                  {details.email}
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">{details.phone}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-3xl mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-white">
              Let's get in touch and talk.
            </p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-white">
                Full Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border text-base outline-none text-black py-1 px-3 leading-8 "
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border text-base outline-none text-black py-1 px-3 leading-8"
              />
            </div>
            <div className="relative mb-4">
              <label for="number" className="leading-7 text-sm text-white">
                Phone Number
              </label>
              <input
                required
                type="number"
                id="number"
                name="number"
                className="w-full bg-white rounded border text-base outline-none text-black py-1 px-3 leading-8"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-white">
                Where did you hear about us?
              </label>
              <select
                name="cars"
                id="cars"
                className="w-full bg-white rounded border h-18 text-base outline-none text-black py-1 px-3 resize-none leading-6"
              >
                <option value="Choose an Option">Select one Option</option>
                <option value="Friend">Friend</option>
                <option value="Social Media">Social Media</option>
                <option value="Other Student">Other Student</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 "
              ></textarea>
            </div>
            <button className="text-black bg-white border-0 py-2 px-6 hover:translate-y-1 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
