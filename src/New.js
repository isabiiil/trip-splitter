import react from "react";
import Navbar from "./Navbar";

export default function NewTransaction() {
  return (
    <div className="h-screen bg-green-100">
      <Navbar />
      <div className="h-auto m-16 flex items-bottom justify-center">
        <div className="w-2/4 h-auto bg-white p-6 rounded-lg shadow-2xl">
          <div>
            Title
          </div>
          <div>
            Amount
          </div>
          <div>
            Date
          </div>
          <div>
            Paid by
          </div>
          <div>
            Received by
          </div>
        </div>
      </div>
    </div>
  );
}