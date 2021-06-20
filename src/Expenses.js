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
  ];

  return (
    <>
      <Navbar />
      <div className="h-96 flex items-center justify-center">
        <div className="w-4/12 h-auto bg-white p-6 rounded-lg shadow-xl divide-y divide-green-700">
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
    </>
  );
}