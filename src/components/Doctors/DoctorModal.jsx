import React from "react";

const DoctorModal = ({ doctor, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {doctor.name}
              </h2>
              <p className="text-lg text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Areas of Expertise</h3>
            <ul className="list-disc list-inside space-y-2">
              {doctor.expertise?.map((area, index) => (
                <li key={index} className="text-gray-700">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Treatment Approaches</h3>
            <ul className="list-disc list-inside space-y-2">
              {doctor.treatments?.map((treatment, index) => (
                <li key={index} className="text-gray-700">
                  {treatment}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Assessment Methods</h3>
            <ul className="list-disc list-inside space-y-2">
              {doctor.assessments?.map((assessment, index) => (
                <li key={index} className="text-gray-700">
                  {assessment}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-[#2b3555] text-white py-2 rounded-lg hover:bg-[#2b3555]/90">
              Schedule Appointment
            </button>
            <button className="flex-1 border border-[#2b3555] text-[#2b3555] py-2 rounded-lg hover:bg-gray-50">
              View Full Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;
