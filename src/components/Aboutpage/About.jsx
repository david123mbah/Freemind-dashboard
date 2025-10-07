import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { 
      number: "500K+", 
      label: "YouTube Subscribers", 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      number: "2M+", 
      label: "Monthly Views", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    { 
      number: "1000+", 
      label: "Devices Reviewed", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      number: "5+", 
      label: "Years Experience", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  const expertise = [
    {
      category: "Smartphones",
      description: "In-depth reviews of latest Android and iOS devices, camera tests, performance benchmarks",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      brands: ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"]
    },
    {
      category: "Laptops & PCs",
      description: "Gaming laptops, ultrabooks, desktop builds, and productivity machine reviews",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      brands: ["Apple", "Dell", "HP", "Lenovo", "ASUS"]
    },
    {
      category: "Audio Tech",
      description: "Headphones, earbuds, speakers, and audio equipment comprehensive testing",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      brands: ["Sony", "Bose", "Apple", "Sennheiser", "JBL"]
    },
    {
      category: "Smart Gadgets",
      description: "Wearables, smart home devices, drones, and emerging technology reviews",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      brands: ["Fitbit", "Garmin", "DJI", "Nest", "Ring"]
    }
  ];

  const youtubeVideos = [
    {
      title: "iPhone 15 Pro Max vs Samsung Galaxy S24 Ultra - Ultimate Comparison",
      views: "1.2M views",
      duration: "15:23",
      thumbnail: "/ions/homeImages/Iphone Image.png"
    },
    {
      title: "Best Budget Android Phones Under $500 in 2025",
      views: "850K views", 
      duration: "12:45",
      thumbnail: "/ions/homeImages/mannete.png"
    },
    {
      title: "Gaming Laptop Buying Guide 2025 - What You Need to Know",
      views: "720K views",
      duration: "18:30",
      thumbnail: "/ions/homeImages/camera.png"
    },
    {
      title: "AirPods Pro 3 vs Sony WH-1000XM5 - Audio Quality Test",
      views: "650K views",
      duration: "10:15",
      thumbnail: "/ions/homeImages/aniks.png"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Modern Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background with curved design */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-50 transform -skew-y-2 origin-bottom-left"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-16 w-48 h-48 bg-yellow-400/5 rounded-full blur-2xl"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-6 lg:px-12 py-6">
          <div className="text-2xl font-bold text-white">
            TCOLTECH
          </div>
          <div className="hidden md:flex items-center space-x-8 text-white">
           
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition-colors">
            Subscribe
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-4xl">
            {/* Decorative Element */}
            <div className="mb-8">
              <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              About
              <br />
              <span className="text-yellow-400">TcolTech</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              Empowering you with our <span className="text-yellow-400 font-semibold">tech expertise</span>
              <br />through <span className="text-yellow-400 font-semibold">honest reviews</span> and insights.
            </p>

            <p className="text-gray-400 mb-12 max-w-2xl text-lg">
              I'm on a mission to provide comprehensive tech reviews and guidance. My passionate 
              approach is dedicated to helping you make informed decisions about technology.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-yellow-500 mb-4">5</div>
              <div className="text-gray-600 font-medium text-lg">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-yellow-500 mb-4">1,000+</div>
              <div className="text-gray-600 font-medium text-lg">Devices Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-yellow-500 mb-4">500K</div>
              <div className="text-gray-600 font-medium text-lg">YouTube Subscribers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Column - Services List */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <span className="bg-black text-white text-sm font-bold px-4 py-2 rounded-full">
                  # Services
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                My Tech Review
                <br />
                Services
              </h2>
              
              <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                Explore my diverse services designed to help you navigate the tech world. 
                From detailed reviews to buying guides, I offer a comprehensive approach 
                to help you make informed decisions about technology.
              </p>

              {/* Services List */}
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 group-hover:border-yellow-400 transition-colors">
                    <span className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      Device Reviews
                    </span>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    Comprehensive reviews with real-world testing and honest opinions
                  </p>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 group-hover:border-yellow-400 transition-colors">
                    <span className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      Buying Guides
                    </span>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    Expert advice to help you choose the perfect device for your needs
                  </p>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 group-hover:border-yellow-400 transition-colors">
                    <span className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      Tech Comparisons
                    </span>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    Side-by-side comparisons to help you make informed decisions
                  </p>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 group-hover:border-yellow-400 transition-colors">
                    <span className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      YouTube Content
                    </span>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    Weekly video reviews and tech insights on my YouTube channel
                  </p>
                </div>
              </div>

              <button className="mt-12 bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                Get Started →
              </button>
            </div>

            {/* Right Column - Featured Service */}
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Featured Service Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="relative h-64 bg-gradient-to-br from-yellow-400 to-yellow-500">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between text-black">
                      <div>
                        <span className="bg-black/20 text-black font-bold text-sm px-3 py-1 rounded-full">
                          Featured Service
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Tech Reviews</h3>
                        <p className="text-black/80">
                          One-on-one sessions with our expert tech reviewers for personalized device recommendations.
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative tech icons */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 rounded-xl transition-colors">
                      Get Started →
                    </button>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-900 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions about a product or want to collaborate? I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Link>
            <a 
              href="mailto:contact@tcoltech.com"
              className="border-2 border-gray-300 text-gray-700 hover:border-yellow-400 hover:text-yellow-600 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Email Direct
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <a href="https://youtube.com/@tcoltech" className="text-gray-400 hover:text-red-500 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://twitter.com/tcoltech" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://instagram.com/tcoltech" className="text-gray-400 hover:text-pink-500 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.553 3.708 13.402 3.708 12.105s.49-2.448 1.42-3.321c.873-.873 2.024-1.363 3.321-1.363s2.448.49 3.321 1.363c.873.873 1.363 2.024 1.363 3.321s-.49 2.448-1.363 3.321c-.873.807-2.024 1.297-3.321 1.297zm7.068 0c-1.297 0-2.448-.49-3.321-1.297-.873-.873-1.363-2.024-1.363-3.321s.49-2.448 1.363-3.321c.873-.873 2.024-1.363 3.321-1.363s2.448.49 3.321 1.363c.873.873 1.363 2.024 1.363 3.321s-.49 2.448-1.363 3.321c-.873.807-2.024 1.297-3.321 1.297z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
