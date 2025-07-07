import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { app } from '../../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const auth = getAuth(app);
  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // Optionally, you can check for doctor role here if needed
      // Example: fetch user from Firestore and check role === "doctor"
      // But as per previous instructions, login is allowed for any user
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen w-full flex bg-white">
      {/* Left Side - Logo */}
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <img
          src="/undraw_medicine_hqqg.png"
          alt="Myyiel Logo"
          className="max-w-[380px] w-full"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="flex flex-col items-end mb-8">
            <svg width="48" height="48" fill="none" className="mb-2 mr-2">
              <path d="M44 8c-2 8-12 18-28 28" stroke="#F15A2B" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M44 8l-4 8" stroke="#F15A2B" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-[#232323] mb-8 text-left">Connexion</h2>
          {error && (
            <div className="mb-4 text-[#F15A2B] text-sm text-left">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-[#232323] mb-2">E-mail</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bdbdbd]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M16 12l-4 4-4-4m8-4H8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E5E7EB] bg-white focus:ring-2 focus:ring-[#F15A2B] focus:border-[#F15A2B] text-base placeholder-[#bdbdbd] transition"
                  placeholder="Entrez votre identifiant"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#232323] mb-2">Mot de passe</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bdbdbd]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-2V9a6 6 0 10-12 0v6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E5E7EB] bg-white focus:ring-2 focus:ring-[#F15A2B] focus:border-[#F15A2B] text-base placeholder-[#bdbdbd] transition"
                  placeholder="Entrez votre Mot de passe"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[#232323]">
                <input
                  type="checkbox"
                  className="accent-[#F15A2B] rounded border-gray-300"
                />
                Se souvenir de moi
              </label>
              <a href="#" className="text-[#F15A2B] hover:underline font-semibold">Mot de passe oublié ?</a>
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#232323] text-[#F7E924] py-3 rounded-full font-bold text-lg mt-2 shadow transition"
            >
              Connexion
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

