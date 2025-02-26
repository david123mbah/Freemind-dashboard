import React from "react";
import { FaCalendarAlt, FaUserInjured, FaVideo, FaStethoscope } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Appointments: 4000, Patients: 2400 },
  { name: 'Feb', Appointments: 3000, Patients: 1398 },
  { name: 'Mar', Appointments: 2000, Patients: 9800 },
  { name: 'Apr', Appointments: 2780, Patients: 3908 },
  { name: 'May', Appointments: 1890, Patients: 4800 },
  { name: 'Jun', Appointments: 2390, Patients: 3800 },
  { name: 'Jul', Appointments: 3490, Patients: 4300 },
];

const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-[200vh]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome, Dr. Stephen</h1>
          <p className="text-gray-600">Have a nice day at great work</p>
        </div>
        <div className="flex items-center">
          <img src="/api/placeholder/40/40" alt="User Avatar" className="rounded-full mr-2" />
          <span className="text-gray-500">Stephen Conley</span>
          <span className="text-gray-500 ml-2">Cardiologist</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <FaCalendarAlt className="text-blue-500 text-2xl mb-2" />
          <h2 className="text-xl font-bold">24.4k</h2>
          <p className="text-gray-600">Appointments</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <FaUserInjured className="text-red-500 text-2xl mb-2" />
          <h2 className="text-xl font-bold">166.3k</h2>
          <p className="text-gray-600">Total Patient</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <FaStethoscope className="text-yellow-500 text-2xl mb-2" />
          <h2 className="text-xl font-bold">53.5k</h2>
          <p className="text-gray-600">Clinic Consulting</p>
        </div>
        <div className="bg-cyan-50 p-6 rounded-lg">
          <FaVideo className="text-cyan-500 text-2xl mb-2" />
          <h2 className="text-xl font-bold">28.0k</h2>
          <p className="text-gray-600">Video Consulting</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Appointment Request</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">Bogdan Krivenchenko</h3>
                <p className="text-gray-600">45 Male, 12 April 9:30</p>
              </div>
              <div>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Decline</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">Confirm</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">Jenny Wilson</h3>
                <p className="text-gray-600">Female, 25 April 10:30 AM</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Confirm</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Today Appointments</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">Jhon Smith</h3>
                <p className="text-gray-600">Clinic Consulting</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">Frank Murray</h3>
                <p className="text-gray-600">Vedic Consulting</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">Ella Lucia</h3>
                <p className="text-gray-600">Emergency</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">Alyssa Dehn</h3>
                <p className="text-gray-600">Clinic Consulting</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Appointments Overview</h2>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Appointments" fill="#8884d8" />
          <Bar dataKey="Patients" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;