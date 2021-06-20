import React from "react";
import { Link } from "react-router-dom";
import NavIcon from "./vacation.png";
import App from "./App.js";
import Expenses from "./Expenses.js";

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="fill-current h-16 w-16" src={NavIcon} alt="Trip Splitter Logo" />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </Link>
            <Link to="/expenses" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Expenses
            </Link>
            <Link to="/balance" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Balance
            </Link>
          </div>
          <div>
            <Link to="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}