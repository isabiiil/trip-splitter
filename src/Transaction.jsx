import React from 'react';

export default function Transaction({ label, payer, amount, date }) {
  return (
    <>
      <div className="w-full h-auto p-2">
        <div className="w-4/6 h-auto inline-block">
          <p className="text-lg text-green-700">{label}</p>
          <p className="text-base">paid by {payer}</p>
        </div>
        <div className="w-2/6 h-auto inline-block text-right">
          <p className="text-lg text-green-700">{amount}</p>
          <p className="text-base">{date}</p>
        </div>
      </div>
    </>
  );
}