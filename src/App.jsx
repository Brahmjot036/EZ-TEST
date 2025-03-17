import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import logo from "./assets/EZ Works Blue/Ez.png";

//  service images
import presentationImg from "./assets/Present.png";
import graphicImg from "./assets/graphic.png";
import videoImg from "./assets/audio.png";
import translationImg from "./assets/translation.png";
import researchImg from "./assets/research.png";
import dataProcessingImg from "./assets/data.png";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const services = [
    { title: "Presentation Design", image: presentationImg, description: "Create visually appealing presentations tailored for business success." },
    { title: "Graphic Design", image: graphicImg, description: "Elevate branding with compelling logos, infographics, and promotional content." },
    { title: "Audio-Visual Production", image: videoImg, description: "Professional video and multimedia production for engaging marketing." },
    { title: "Translation Services", image: translationImg, description: "Accurate, multi-language translation services to expand your reach." },
    { title: "Research & Analytics", image: researchImg, description: "Data-driven insights and reports for informed decision-making." },
    { title: "Data Processing", image: dataProcessingImg, description: "Efficient data handling to optimize workflow and operations." },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-between px-4 md:px-10 py-6 md:py-10 transition-all duration-500 ${
        isDark ? "bg-[#0f172a] text-white" : "bg-white text-gray-900"
      }`}
    >

      {/* THEME TOGGLE */}
      <div className="absolute top-4 right-4 flex items-center space-x-3">
        <span className="text-sm font-semibold">{isDark ? "🌙" : " ☀️"}</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={isDark} onChange={() => setIsDark(!isDark)} className="sr-only peer" />
          <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-orange-500 peer-checked:after:bg-gray-900"></div>
        </label>
      </div>

      {/* MAIN CONTENT - FLEX REVERSE ON MOBILE */}
      <div className="w-full flex flex-col-reverse md:flex-row-reverse items-center gap-6">
        
        {/* SERVICE CARDS */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-0">
          {services.map((service, index) => (
            <Card key={index} title={service.title} image={service.image} description={service.description} isDark={isDark} />
          ))}
        </div>

        {/* LOGO, TEXT, & FORM */}
        <div className="w-full md:w-1/3 flex flex-col items-center sm:items-center md:items-start text-center sm:text-center md:text-left space-y-4">
          <img src={logo} alt="EZ Works" className="w-40 md:w-64 h-auto rounded-lg" />
          <h2 className={`text-2xl md:text-3xl font-semibold ${isDark ? "text-white" : "text-[#112949]"}`}>
            Suite of Business Support Services
          </h2>
          <p className="text-sm md:text-md leading-relaxed px-4 md:px-0">
            At EZ Works, we provide a diverse range of professional services tailored to streamline business operations, enhance productivity.
          </p>

          {/* FORM MOVED BELOW CARDS ON MOBILE */}
          <div className="w-full max-w-md">
            <Form isDark={isDark} />
          </div>
        </div>

      </div>

    </div>
  );
};

export default App;
