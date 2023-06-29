import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";

function Fotter() {
  return (
    <>
      <footer className="bg-gradient-to-r text-white bg-dark mt-10">
        <div className="container mx-auto py-8 px-4">
          <div className="ml-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  ">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Company</h2>
              <ul>
                <li className="mb-2">
                  <Link to="/about" className="hover:text-gray-200">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="hover:text-gray-200">
                    Contact
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/policy" className="hover:text-gray-200">
                    Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Services</h2>
              <ul>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Salone Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Home Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Salone Service</h2>
              <ul>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Spa
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Hair Cutting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Pedicure
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Manicure
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Facial
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Home Service</h2>
              <ul>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Fan
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    AC Repair
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Refrigerator Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Inverter Repair
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    CCTV Repair
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-200">
                    Washing Machine
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>
              &copy; 2023 My Company. All rights reserved. Designed By{" "}
              <a href="https://rpinfocare.com/">
                <span>RP Infocare</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Fotter;
