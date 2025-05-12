import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  data: {
    totalModels: number;
    averagePrice: number;
    averageRating: number;
    averageStorage: number;
    sellingPlatforms: Array<{name: string, value: number}>;
    brandModels: Array<{brand: string, models: number}>;
  };
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#FF4042', '#4242FF', '#42FF42'];

export const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen grid grid-cols-4 grid-rows-2 gap-4">
      {/* Key Metrics */}
      <div className="bg-gray-800 p-4 rounded flex flex-col justify-center items-center">
        <h3 className="text-sm text-gray-400">Average Price (USD)</h3>
        <p className="text-3xl font-bold">{data.averagePrice.toFixed(2)}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded flex flex-col justify-center items-center">
        <h3 className="text-sm text-gray-400">Average Rating</h3>
        <p className="text-3xl font-bold">{data.averageRating.toFixed(2)}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded flex flex-col justify-center items-center">
        <h3 className="text-sm text-gray-400">Total Models</h3>
        <p className="text-3xl font-bold">{data.totalModels}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded flex flex-col justify-center items-center">
        <h3 className="text-sm text-gray-400">Avg Storage (GB)</h3>
        <p className="text-3xl font-bold">{data.averageStorage.toFixed(2)}</p>
      </div>

      {/* Selling Platforms Pie Chart */}
      <div className="bg-gray-800 p-4 rounded col-span-2">
        <h3 className="text-lg mb-2">Count of Models by Selling Platform</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data.sellingPlatforms}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
            >
              {data.sellingPlatforms.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Brand Models Bar Chart */}
      <div className="bg-gray-800 p-4 rounded col-span-2">
        <h3 className="text-lg mb-2">Models by Brand</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.brandModels}>
            <XAxis dataKey="brand" stroke="#ffffff"/>
            <YAxis stroke="#ffffff"/>
            <Tooltip />
            <Bar dataKey="models" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
