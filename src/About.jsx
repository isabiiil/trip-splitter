import React from "react";

export default function About() {
  return (
    <>
      <div className="py-8 w-full h-screen flex items-center justify-center bg-blend-soft-light">
        <div className="relative w-full h-96">
          <div className="absolute left-0 top-0 w-full h-full transform-gpu -skew-y-3 bg-gradient-to-r from-pink-400 via-green-500 to-blue-500" />
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-5xl text-white z-10 font-mono">Trip Splitter</span>
          </div>
        </div>
      </div>
      <div className="py-16 w-full h-full flex items-center justify-center bg-green-100 bg-blend-hard-light">
        <div className="p-8 bg-white rounded-lg shadow-lg w-2/4 h-auto">
          <p className="py-4 text-4xl">
            Splitting bills on trips together has never been easier!
          </p>
          <p className="text-xl">
            Trip Splitter allows groups to split their expenses in a streamlined way. You don't have to trouble the restaurant by making them charge multiple credit cards. Instead, you can have one person pay and the rest will reimburse them at the end of the trip. Even if multiple people foots the bill, the total reimbursements are easily calculated for you so you don't have to worry during vacations or outings.
          </p>
        </div>
      </div>
    </>
  );
}