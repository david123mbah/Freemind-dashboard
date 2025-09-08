import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";
import DoctorModal from "./DoctorModal";
import DoctorForm from "./DoctorForm";

const DEFAULT_AVATAR = "/undraw_young-man-avatar_wgbd.png"; // Use a standard avatar

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isAddingDoctor, setIsAddingDoctor] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "doctors"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  // Get unique specialties from doctors
  const specialties = [
    "All",
    ...Array.from(new Set(doctors.map((doc) => doc.specialty).filter(Boolean))),
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
    <div className="flex min-h-screen bg-[#fafbfa] font-sans">
      {/* Sidebar slot if needed */}
      <div className="flex-1 ml-[230px]">
        <div className="max-w-[1400px] mx-auto py-8 px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#232323] tracking-tight">
              Doctors
            </h1>
            <button
              onClick={() => setIsAddingDoctor(true)}
              className="bg-[#F7E924] hover:bg-[#e6e04d] text-[#232323] font-bold px-6 py-3 rounded-full flex items-center shadow transition"
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
          <div className="bg-white p-6 rounded-2xl shadow flex flex-wrap gap-4 mb-8 items-center">
            <div className="relative flex-1 min-w-[240px]">
              <input
                type="text"
                placeholder="Search doctors..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F7E924] focus:border-[#F7E924] text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg
                  className="h-5 w-5"
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
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                    filterSpecialty === specialty
                      ? "bg-[#232323] text-[#F7E924]"
                      : "bg-gray-100 text-[#232323] hover:bg-gray-200"
                  }`}
                  onClick={() => setFilterSpecialty(specialty)}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer flex flex-col"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center mb-4">
                    <img
                      src={doctor.imageUrl ? doctor.imageUrl : DEFAULT_AVATAR}
                      alt={doctor.name}
                      className="h-16 w-16 rounded-full object-cover border-2 border-[#F7E924]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = DEFAULT_AVATAR;
                      }}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-[#232323]">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-[#bdbdbd]">
                        {doctor.specialty}
                      </p>
                      <p className="text-xs text-[#bdbdbd]">
                        {doctor.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-[#bdbdbd]">Email</p>
                      <p className="text-sm font-semibold text-[#232323]">
                        {doctor.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#bdbdbd]">Rating</p>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-lg font-bold text-[#232323]">
                          {doctor.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#bdbdbd] mb-1">Bio</p>
                    <p className="text-sm text-[#232323] line-clamp-3">
                      {doctor.bio}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-4 flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      doctor.role === "doctor"
                        ? "bg-[#F7E924] text-[#232323]"
                        : "bg-gray-200 text-[#232323]"
                    }`}
                  >
                    {doctor.role}
                  </span>
                  <button className="text-[#232323] hover:text-[#F7E924]">
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
