import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div clsassName="max-w-2xl mx-auto flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center p-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold">DigiTools</h1>
            <p>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Product</h3>
            <p>Features</p>
            <p>Pricing</p>
            <p>Templates</p>
            <p>Integrations</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Company</h3>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <p>Documentation</p>
            <p>Help Center</p>
            <p>Community</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Social Links</h3>
            <div className="flex gap-4">
              <p>
                <AiFillInstagram />
              </p>
              <p>
                <FaFacebookSquare />
              </p>
              <p>
                <FaXTwitter />
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="max-w-4xl mx-auto flex justify-between items-center gap-4 py-4">
          <p className="text-center text-sm text-gray-500 py-4">
            © 2026 Digitools. All rights reserved.
          </p>
          <p className="text-center text-sm text-gray-500 gap-4 flex">
            <span>Privacy Policy</span> | <span>Terms of Service</span> |
            <span>Cookies</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
