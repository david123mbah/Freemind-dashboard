import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

const DEFAULT_AVATAR = "/undraw_young-man-avatar_wgbd.png"; // Use this avatar everywhere

const Dashboard = () => {
  // Firebase state
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);
    const auth = getAuth(app);

    // Get current user profile (email, etc.)
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    // Fetch Dr Lois Nyonpoa profile
    const fetchDoctor = async () => {
      const docRef = doc(db, "doctors", "rHhI99SiYiWQJFhRSnA3c3o8O642");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDoctor(docSnap.data());
      }
    };

    // Fetch all appointments for all doctors
    const fetchAppointments = async () => {
      const querySnapshot = await getDocs(collection(db, "appointments"));
      const data = [];
      querySnapshot.forEach((doc) => {
        const d = doc.data();
        data.push({ id: doc.id, ...d });
      });
      setAppointments(data);
    };

    fetchDoctor();
    fetchAppointments();

    return () => unsubscribe();
  }, []);

  // Chart data for "Patients Visits" - this can remain as is if not fetched from Firebase
  const visitsData = [
    { month: "Jan", Male: 20, Female: 25 },
    { month: "Feb", Male: 30, Female: 40 },
    { month: "Mar", Male: 25, Female: 45 },
    { month: "Apr", Male: 40, Female: 35 },
    { month: "May", Male: 35, Female: 50 },
    { month: "Jun", Male: 45, Female: 30 },
    { month: "Jul", Male: 30, Female: 45 },
    { month: "Aug", Male: 50, Female: 35 },
    { month: "Sep", Male: 40, Female: 50 },
    { month: "Oct", Male: 35, Female: 25 },
    { month: "Nov", Male: 25, Female: 40 },
    { month: "Dec", Male: 30, Female: 35 },
  ];

  // Calendar data (for demo, highlight 13th)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex min-h-screen bg-[#fafbfa] font-sans">
      {/* Sidebar slot */}
      {/* ...existing code for sidebar... */}

      <main className="flex-1 ml-[230px] px-0 py-0">
        <div className="max-w-[1400px] mx-auto py-8 px-8">
          {/* Doctor Profile Card */}
          {doctor && (
            <div className="flex items-center gap-6 bg-white rounded-[32px] shadow p-6 mb-8">
              <img
                src={doctor.imageUrl ? doctor.imageUrl : DEFAULT_AVATAR}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#F7E924]"
                onError={e => { e.target.onerror = null; e.target.src = DEFAULT_AVATAR; }}
              />
              <div>
                <div className="text-2xl font-bold text-[#232323]">{doctor.name}</div>
                <div className="text-[#bdbdbd] text-base font-semibold">{doctor.specialty} &middot; {doctor.location}</div>
                <div className="text-[#232323] text-sm mt-2">{doctor.bio}</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#F7E924] font-bold text-lg">{doctor.rating}</span>
                  <span className="text-[#bdbdbd] text-xs">/ 5.0</span>
                </div>
                {currentUser && (
                  <div className="mt-2 text-[#bdbdbd] text-sm">
                    <span className="font-bold text-[#232323]">Logged in as:</span> {currentUser.email}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-8 items-center">
              <button className="text-[1.6rem] font-bold text-[#232323] bg-white rounded-t-[22px] px-7 py-4 shadow-none focus:outline-none border-none">
                Doctors
              </button>
              <button className="text-[1.6rem] font-bold text-[#bdbdbd] bg-transparent px-7 py-4 shadow-none focus:outline-none border-none">
                Patients
              </button>
              <button className="text-[1.6rem] font-bold text-[#bdbdbd] bg-transparent px-7 py-4 shadow-none focus:outline-none border-none">
                Departments
              </button>
              <button className="ml-4 flex items-center gap-1 text-[#232323] font-bold text-lg bg-transparent px-0 py-0 border-none">
                View All
                <svg className="w-6 h-6" fill="none" stroke="#232323" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 bg-[#fafbfa] border border-[#ededed] rounded-full text-base focus:outline-none focus:ring-2 focus:ring-[#F7E924] focus:border-[#F7E924] text-[#232323] placeholder:text-[#bdbdbd] w-44"
                  style={{ fontFamily: "Lato, sans-serif" }}
                />
                <span className="absolute left-3 top-2.5 text-[#bdbdbd]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </div>
              <button className="relative bg-transparent p-2 rounded-full hover:bg-[#f7e924]/30">
                <svg className="w-7 h-7 text-[#232323]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" fill="#F7E924" />
                </svg>
                <span className="absolute top-0 right-0 w-3 h-3 bg-[#F7E924] rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-2 bg-transparent">
                <img
                  src={DEFAULT_AVATAR}
                  alt={currentUser?.email || "User"}
                  className="w-10 h-10 rounded-full object-cover"
                  onError={e => { e.target.onerror = null; e.target.src = DEFAULT_AVATAR; }}
                />
                <div className="flex flex-col">
                  <span className="text-[#232323] font-bold text-base leading-4">
                    {currentUser?.email || "User"}
                  </span>
                  <span className="text-[#bdbdbd] text-xs">Logged in</span>
                </div>
                <svg className="w-6 h-6 text-[#bdbdbd]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Patient Visits Chart */}
          <div className="bg-white rounded-[32px] shadow p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#232323] text-lg">Patients Visits</span>
                <span className="flex items-center gap-2 text-xs font-bold">
                  <span className="w-3 h-3 rounded-full bg-[#2323f7] inline-block"></span> Male
                  <span className="w-3 h-3 rounded-full bg-[#f723c7] inline-block ml-4"></span> Female
                </span>
              </div>
              <span className="text-xs text-[#bdbdbd] font-bold flex items-center gap-1">
                Monthly
                <svg className="w-4 h-4 text-[#bdbdbd]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={visitsData}>
                  <CartesianGrid stroke="#f3f3f3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="Male" stroke="#2323f7" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="Female" stroke="#f723c7" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Upcoming Appointments - moved below dashboard */}
          <div className="bg-white rounded-[32px] shadow p-7 mt-10">
            <div className="flex justify-between items-center mb-4">
              <span className="font-extrabold text-[#232323] text-xl leading-tight tracking-tight">Upcoming Appointments</span>
            </div>
            <table className="min-w-full text-base">
              <thead>
                <tr className="bg-white text-[#bdbdbd] uppercase text-xs">
                  <th className="px-4 py-3 font-bold text-left">Patient</th>
                  <th className="px-4 py-3 font-bold text-left">Doctor</th>
                  <th className="px-4 py-3 font-bold text-left">Specialty</th>
                  <th className="px-4 py-3 font-bold text-left">Location</th>
                  <th className="px-4 py-3 font-bold text-left">Date</th>
                  <th className="px-4 py-3 font-bold text-left">Time</th>
                  <th className="px-4 py-3 font-bold text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-6 text-[#bdbdbd]">No appointments found.</td>
                  </tr>
                )}
                {appointments.map((appt) => (
                  <tr key={appt.id} className="border-b border-[#f3f3f3]">
                    <td className="px-4 py-3 font-semibold text-[#232323] flex items-center gap-2">
                      <img
                        src={DEFAULT_AVATAR}
                        alt={appt.patientName}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#ededed]"
                        onError={e => { e.target.onerror = null; e.target.src = DEFAULT_AVATAR; }}
                      />
                      <span>{appt.patientName}</span>
                    </td>
                    <td className="px-4 py-3 text-[#232323]">{appt.doctorName}</td>
                    <td className="px-4 py-3 text-[#bdbdbd]">{appt.specialty}</td>
                    <td className="px-4 py-3 text-[#bdbdbd]">{appt.location}</td>
                    <td className="px-4 py-3 text-[#232323]">
                      {appt.appointmentDate && appt.appointmentDate.toDate
                        ? appt.appointmentDate.toDate().toLocaleDateString()
                        : appt.appointmentDate || ""}
                    </td>
                    <td className="px-4 py-3 text-[#232323]">{appt.timeSlot}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold
                        ${appt.status === "confirmed" ? "bg-[#F7E924] text-[#232323]" : "bg-[#bdbdbd] text-white"}`}>
                        {appt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

