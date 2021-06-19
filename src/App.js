import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavIcon from "./vacation.png";

function App() {
  return (
    <>
      {/* Navbar */}
      <Router>
        <div>
          <nav className="flex items-center justify-between flex-wrap bg-green-400 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <img className="fill-current h-16 w-16" src={NavIcon} />
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-md lg:flex-grow">
                <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  About
                </Link>
                <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Expenses
                </Link>
                <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                  Balance
                </Link>
              </div>
              <div>
                <Link to="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  Log In
                </Link>
              </div>
            </div>
          </nav>
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        </div>
      </Router>
      {/* DiagonalSection */}
      <div className="py-8 w-full h-screen flex items-center justify-center bg-blend-soft-light">
        <div className="relative w-full h-96">
          <div className="absolute left-0 top-0 w-full h-full transform-gpu -skew-y-3 bg-gradient-to-r from-pink-400 via-green-500 to-blue-500" />
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-5xl text-white z-10 font-mono">Trip Splitter</span>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="py-16 w-full h-full flex items-center justify-center bg-green-100 bg-blend-hard-light">
        <div className="p-8 bg-white rounded-lg shadow-lg w-2/4 h-auto">
          <p className="py-4 text-4xl">
            Spending on trips together has never been easier!
          </p>
          <p className="text-xl">
            Trip Splitter allows groups to split their expenses in a streamlined way. You don't have to trouble the restaurant by making them charge multiple credit cards. Instead, you can have one person pay and the rest will reimburse them at the end of the trip. Even if multiple people foots the bill, the total reimbursements are easily calculated for you so you don't have to worry during vacations or outings.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
