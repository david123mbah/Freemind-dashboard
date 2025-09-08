import React from 'react';
import { doctorData } from './data';

const DoctorsTable = () => {
  const getProgressColor = (value) => {
    if (value >= 80) return "bg-green-400";
    if (value >= 60) return "bg-blue-400";
    if (value >= 40) return "bg-yellow-400";
    return "bg-orange-400";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <th className="px-6 py-3">
              <input type="checkbox" className="h-4 w-4 text-[#2b3555] rounded" />
            </th>
            <th className="px-6 py-3">Doctor Name</th>
            <th className="px-6 py-3">Specialization</th>
            <th className="px-6 py-3">Active Patients</th>
            <th className="px-6 py-3">Consultation ID</th>
            <th className="px-6 py-3">Rating</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {doctorData.map((doctor) => (
            <tr key={doctor.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <input type="checkbox" className="h-4 w-4 text-[#2b3555] rounded" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 mr-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      {doctor.name.charAt(3)}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {doctor.name}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {doctor.specialization}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {doctor.patients}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {doctor.consultations}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${getProgressColor(doctor.rating)}`}
                      style={{ width: `${doctor.rating}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {doctor.rating}%
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium">
                <button className="text-gray-400 hover:text-blue-600 mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-red-600 mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;