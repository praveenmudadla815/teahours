import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <body className="bg-white">
        <div className="flex flex-col mx-3 bg-white rounded-lg">
          <div className="w-full draggable">
            <div className="container flex flex-col mx-auto">
              <div className="flex flex-col items-center w-full my-20">
                <span className="mb-8">
                  <img
                    src={logo}
                    alt="food"
                    className="h-6 w-auto hover:text-green-500 duration-200"
                  />
                </span>
                <div className="flex flex-col items-center gap-6 mb-8">
                  <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                    <a
                      href="javascript:void(0)"
                      className="text-black hover:text-green-500 duration-200"
                    >
                      About
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-black hover:text-green-500 duration-200"
                    >
                      Features
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-black hover:text-green-500 duration-200"
                    >
                      Blog
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-black hover:text-green-500 duration-200"
                    >
                      Resources
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-black hover:text-green-500 duration-200"
                    >
                      Partners
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-black hover:text-green-500 duration-200"
                    >
                      Help
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-black hover:text-green-500 duration-200"
                    >
                      Terms
                    </a>
                  </div>
                  <div className="flex items-center gap-8"></div>
                </div>
                <div className="flex items-center">
                  <p className="text-base font-normal leading-7 text-center text-grey-700">
                    {new Date().getFullYear()}© Tea24hours All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Footer;
