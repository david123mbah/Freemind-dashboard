import React, { useState } from 'react';
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { app } from "../../firebase";

const DoctorForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialty: '',
    image: '',
    bio: '',
    location: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const db = getFirestore(app);
      // Generate a UID for the doctor (could use Firebase Auth or random string)
      const uid = Math.random().toString(36).slice(2) + Date.now();
      const doctorData = {
        name: formData.name,
        email: formData.email,
        specialty: formData.specialty,
        imageUrl: formData.image,
        bio: formData.bio,
        location: formData.location,
        rating: "4.0",
        role: "doctor",
        uid,
        createdAt: serverTimestamp(),
      };
      await setDoc(doc(db, "doctors", uid), doctorData);
      setLoading(false);
      onClose();
    } catch (err) {
      setLoading(false);
      setError("Failed to create doctor. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-[#232323]/60 z-50 flex justify-center items-center">
      <div className="bg-white rounded-[32px] shadow-2xl p-8 w-full max-w-2xl border border-[#F7E924]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#232323] tracking-tight">Add New Doctor</h2>
          <button onClick={onClose} className="text-[#bdbdbd] hover:text-[#232323] text-2xl px-2 py-1 rounded-full transition">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#232323] mb-1">Doctor's Name</label>
              <input
                type="text"
                required
                className="block w-full border border-[#ededed] rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7E924] text-base bg-[#fafbfa] placeholder:text-[#bdbdbd]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#232323] mb-1">Email</label>
              <input
                type="email"
                required
                className="block w-full border border-[#ededed] rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7E924] text-base bg-[#fafbfa] placeholder:text-[#bdbdbd]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#232323] mb-1">Password</label>
              <input
                type="password"
                required
                className="block w-full border border-[#ededed] rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7E924] text-base bg-[#fafbfa] placeholder:text-[#bdbdbd]"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#232323] mb-1">Specialty</label>
              <select
                className="block w-full border border-[#ededed] rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7E924] text-base bg-[#fafbfa] text-[#232323]"
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                required
              >
                <option value="">Select Specialty</option>
                <option value="Psychiatrist">Psychiatrist</option>
                <option value="Clinical Psychologist">Clinical Psychologist</option>
                <option value="Child Psychiatrist">Child Psychiatrist</option>
                <option value="Behavioral Therapist">Behavioral Therapist</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#232323] mb-1">Profile Image URL</label>
              <input
                type="url"
                className="block w-full border border-[#ededed] rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7E924] text-base bg-[#fafbfa] placeholder:text-[#bdbdbd]"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#232323] mb-1">Location</label>
              <input
                type="text"
                required
                className="block w-full border border-[#ededed] rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7E924] text-base bg-[#fafbfa] placeholder:text-[#bdbdbd]"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="City, Country"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#232323] mb-1">Bio</label>
            <textarea
              className="block w-full border border-[#ededed] rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7E924] text-base bg-[#fafbfa] placeholder:text-[#bdbdbd] resize-none"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows="3"
              placeholder="Brief description about the doctor's experience and expertise"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
          <div className="flex justify-end space-x-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-[#ededed] rounded-full text-[#232323] font-bold hover:bg-[#fafbfa] transition"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-[#F7E924] text-[#232323] font-bold rounded-full hover:bg-[#e6e04d] transition"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorForm;