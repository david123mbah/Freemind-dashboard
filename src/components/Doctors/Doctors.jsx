import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DoctorModal from "./DoctorModal";
import DoctorForm from "./DoctorForm";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      specialty: "Psychiatrist",
      patients: 124,
      rating: 4.8,
      availability: "Available",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      expertise: ["Depression", "Anxiety Disorders", "Mood Disorders", "PTSD"],
      treatments: [
        "Cognitive Behavioral Therapy",
        "Medication Management",
        "Psychoanalysis",
      ],
      assessments: [
        "Mental Status Examination",
        "Psychiatric Evaluation",
        "Risk Assessment",
      ],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Clinical Psychologist",
      patients: 98,
      rating: 4.9,
      availability: "In Session",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      expertise: [
        "Stress Management",
        "Behavioral Therapy",
        "Cognitive Therapy",
      ],
      treatments: [
        "Mindfulness Training",
        "Behavioral Modification",
        "Psychotherapy",
      ],
      assessments: [
        "Behavioral Assessment",
        "Cognitive Function Testing",
        "Stress Evaluation",
      ],
    },
    {
      id: 3,
      name: "Dr. Emily Brooks",
      specialty: "Child Psychiatrist",
      patients: 156,
      rating: 4.7,
      availability: "Available",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      expertise: ["ADHD", "Autism Spectrum Disorders", "Childhood Anxiety"],
      treatments: ["Play Therapy", "Family Therapy", "Medication Management"],
      assessments: [
        "Developmental Assessment",
        "Child Psychiatric Evaluation",
        "Behavioral Analysis",
      ],
    },
    {
      id: 4,
      name: "Dr. James Murphy",
      specialty: "Behavioral Therapist",
      patients: 112,
      rating: 4.6,
      availability: "With Patient",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      expertise: ["Anger Management", "Habit Disorders", "Phobias"],
      treatments: [
        "Exposure Therapy",
        "Relaxation Techniques",
        "Behavioral Counseling",
      ],
      assessments: [
        "Behavioral Observation",
        "Therapeutic Progress Evaluation",
        "Phobia Assessment",
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isAddingDoctor, setIsAddingDoctor] = useState(false);

  const specialties = [
    "All",
    "Psychiatrist",
    "Clinical Psychologist",
    "Child Psychiatrist",
    "Behavioral Therapist",
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      filterSpecialty === "All" || doctor.specialty === filterSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold text-gray-800">Doctors</h1>
            <button 
              onClick={() => setIsAddingDoctor(true)}
              className="bg-[#2b3555] hover:bg-[#2b3555]/90 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Doctor
            </button>
          </div>

          {/* Search and Filter */}
          <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[240px]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search doctors..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b3555] focus:border-[#2b3555]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      filterSpecialty === specialty
                        ? "bg-[#2b3555] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setFilterSpecialty(specialty)}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {doctor.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Patients</p>
                      <p className="text-lg font-medium text-gray-900">
                        {doctor.patients}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-lg font-medium text-gray-900">
                          {doctor.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        doctor.availability === "Available"
                          ? "bg-green-100 text-green-800"
                          : doctor.availability === "In Session"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {doctor.availability}
                    </span>
                    <button className="text-[#2b3555] hover:text-[#2b3555]/80">
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
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isAddingDoctor && (
            <DoctorForm onClose={() => setIsAddingDoctor(false)} />
          )}

          {selectedDoctor && (
            <DoctorModal
              doctor={selectedDoctor}
              onClose={() => setSelectedDoctor(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
