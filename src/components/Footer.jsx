import React from "react";
import { contact } from "../data";

import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
  TiSocialYoutubeCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import FooterLogo from "../assets/footerlogo.png";

const Footer = () => {
  const details = contact[0];
  return (
    <>
      <div className="bg-black text-white">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-xl lg:max-w-screen-xl md:px-0 lg:px-0">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="  font-poppins font-bold tracking-wide text-2xl text-white uppercase">
                  ACIC BMU Foundation
                </span>
              </a>
              <div className="mt-6 lg:max-w-sm">
                <img src={FooterLogo} alt="ACIC BMU Foundation Logo" />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-white">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1 text-white">Phone:</p>
                <a
                  href="tel:850-123-5021"
                  aria-label="Our phone"
                  title="Our phone"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  {details.phone}
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-white">Email:</p>
                <a
                  href="mailto:acic@bmu.edu.in"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  {details.email}
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-white">Address:</p>

                <a
                  href={details.addressLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  {details.address}
                </a>
              </div>
            </div>
            <div>
              <span className="text-base text-center font-bold uppercase items-center tracking-wide text-white">
                Follow Us
              </span>
              <br />
              <br />
              <div className="flex items-center mt-1 space-x-3">
                <a href={details.facebook} rel="noreferrer" target="_blank">
                  <TiSocialFacebookCircular size={50} />
                </a>
                <a href={details.instagram} rel="noreferrer" target="_blank">
                  <TiSocialInstagramCircular size={50} />
                </a>
                <a href={details.youtube} rel="noreferrer" target="_blank">
                  <TiSocialYoutubeCircular size={50} />
                </a>
                <a href={details.twitter} rel="noreferrer" target="_blank">
                  <TiSocialTwitterCircular size={50} />
                </a>
                <a href={details.linkedin} rel="noreferrer" target="_blank">
                  <TiSocialLinkedinCircular size={50} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-x-lime-50 lg:flex-row">
            <p className="text-sm font-bold text-gray-600">
              @ACIC-BMUFOUNDATION2021
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
