import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Foundings = () => {
  const monthlyFundings = [
    { month: "Jan", amount: 5000 },
    { month: "Feb", amount: 3000 },
    { month: "Mar", amount: 4000 },
    { month: "Apr", amount: 7000 },
    { month: "May", amount: 6000 },
    { month: "Jun", amount: 8000 },
  ];

  const fundingSources = [
    { name: "Donations", value: 40000 },
    { name: "Events", value: 20000 },
    { name: "Sponsorships", value: 15000 },
    { name: "Others", value: 5000 },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Fundings Overview</h1>

      <div className="mb-8 flex flex-wrap gap-6">
        <div className="flex-1 min-w-50 bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-gray-400 text-sm">Total Fundings</h2>
          <p className="text-3xl font-bold mt-2">$80,000</p>
        </div>
        <div className="flex-1 min-w-50 bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-gray-400 text-sm">Fundings This Month</h2>
          <p className="text-3xl font-bold mt-2">$8,000</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Monthly Fundings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={monthlyFundings}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{ backgroundColor: "#333", border: "none" }}
              />
              <Bar dataKey="amount" fill="#36A2EB" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Fundings by Source</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={fundingSources}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {fundingSources.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip
                contentStyle={{ backgroundColor: "#333", border: "none" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Foundings;
