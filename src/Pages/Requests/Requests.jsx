import React from "react";
import { NavLink } from "react-router";

const Requests = () => {
  const requests = [
    {
      id: 1,
      name: "John Doe",
      bloodGroup: "A+",
      message:
        "Urgent need for a surgery tomorrow morning. Any help would be greatly appreciated...",
      location: "City Hospital, Dhaka",
      posted: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      bloodGroup: "O-",
      message:
        "Patient requires immediate transfusion for an ongoing procedure. Please help.",
      location: "Central Medical, Chittagong",
      posted: "5 hours ago",
    },
    {
      id: 3,
      name: "Robert Brown",
      bloodGroup: "B+",
      message:
        "Emergency case due to an accident. In need of 3 bags of B+ blood urgently.",
      location: "United Hospital, Dhaka",
      posted: "8 hours ago",
    },
    {
      id: 4,
      name: "Maria Garcia",
      bloodGroup: "AB+",
      message:
        "Thalassemia patient requires regular blood transfusion. Your donation can save a life.",
      location: "Sylhet General Hospital",
      posted: "1 day ago",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <main className="flex flex-col items-center w-full">
        <div className="w-full max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tighter text-white">
              Public Donation Requests
            </h1>
            <p className="mt-2 text-lg text-green-400">
              Find an opportunity to save a life near you.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-sm sm:flex-row sm:items-center">
            <select className="w-full sm:w-auto sm:flex-1 rounded-lg bg-gray-700 text-gray-200 py-2 px-3 text-sm">
              <option disabled>Filter by District</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Sirajgonj</option>
              <option>Rajshahi</option>
              <option>Sylhet</option>
            </select>
            <select className="w-full sm:w-auto sm:flex-1 rounded-lg bg-gray-700 text-gray-200 py-2 px-3 text-sm">
              <option disabled>Filter by Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
            <button className="h-10 min-w-[120px] rounded-lg bg-red-500 text-white text-sm font-bold px-4 hover:bg-red-600 transition-colors">
              Apply Filters
            </button>
          </div>

          {/* Request Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {requests.map((req) => (
              <div
                key={req.id}
                className="flex flex-col rounded-xl border border-gray-700 bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col justify-between gap-4 p-5">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white">{req.name}</h3>
                    <div className="flex h-7 items-center justify-center rounded-full bg-red-900/50 px-3 text-sm font-bold text-red-300">
                      {req.bloodGroup}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{req.message}</p>
                  <div className="mt-2 space-y-2 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-green-400">
                        location_on
                      </span>
                      <span>{req.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-green-400">
                        schedule
                      </span>
                      <span>{req.posted}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto border-t border-gray-700 p-4">
                  <NavLink to={`/requests/${req.id}`}>
                    <button className="w-full h-10 rounded-lg bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Requests;
