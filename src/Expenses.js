import React from "react";
import Navbar from "./Navbar.jsx";
import Transaction from "./Transaction.jsx";

export default function Expenses() {
  const transactions = [
    {
      label: "Surprise Party Decorations",
      payer: "Alexandra Trese",
      amount: "$175.00",
      date: "June 12",
    },
    {
      label: "Dinner",
      payer: "Crispin & Basilio",
      amount: "$390.00",
      date: "June 12",
    },
    {
      label: "Island Hopping",
      payer: "Captain Guerrero",
      amount: "$680.00",
      date: "June 11",
    },
    {
      label: "Car Rental & Gas",
      payer: "Maliksi",
      amount: "$800.00",
      date: "June 8",
    },
    {
      label: "Plane Tickets",
      payer: "Crispin & Basilio",
      amount: "$2,000.00",
      date: "June 8",
    },
  ];

  return (
    <div className="h-screen bg-green-100">
      <Navbar />
      <div className="h-auto m-16 flex items-bottom justify-center">
        <div className="w-4/12 h-auto bg-white p-6 rounded-lg shadow-2xl divide-y divide-green-700">
          {transactions.map((data) => {
            return (
              <Transaction
                label={data.label}
                payer={data.payer}
                amount={data.amount}
                date={data.date}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-16">
        <div className="rounded-2xl border shadow-2xl bg-green-700 p-8">
          <p className="text-white text-xl">
            + Add New Transaction
          </p>
        </div>
      </div>
    </div>
  );
}