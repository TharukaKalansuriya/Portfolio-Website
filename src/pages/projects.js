"use client";
import React from "react";
import Image from "next/image";
import projectImage from "../../public/images/projects/Craze (4).png"; 
import projectImage2 from "../../public/images/projects/Blue Black Modern Neon Podium New Arrival Smartphone Sale Instagram Post.png";
import projectImage3 from "../../public/images/projects/passport.png"; 
import projectImage4 from "../../public/images/projects/rice mill.png"; 
import projectImage5 from "../../public/images/projects/T SECURE.png"; 
import projectImage6 from "../../public/images/projects/cloathing.png"; 
import projectImage7 from "../../public/images/projects/portf.png"; 
import projectImage8 from "../../public/images/projects/mental.png"; 

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

const projectsData = [
  {
    id: 1,
    title: "Attendance Management System",
    description: "A Flutter-based mobile app integrated with IoT and Django to automate attendance marking using fingerprint and QR scanning.",
    image: projectImage2,
    githubLink: "https://github.com/TharukaKalansuriya/Mobile-application--Attendance-management", 
  },
  {
    id: 2,
    title: "Passport Automation System",
    description: "A Java-based system with MySQL for managing passport registration, user authentication, and administrative functions with secure database storage.",
    image: projectImage3,
    githubLink: "https://github.com/TharukaKalansuriya/Passport-Automation-System",
  },
  {
    id: 3,
    title: "Automated Rice Mill System",
    description: " An Arduino-powered IoT system simulating automated rice milling, including cleaning, grading, steaming, drying, and packaging processes.",
    image: projectImage4,
    githubLink: "https://github.com/yourusername/project3",
  },
  {
    id: 4,
    title: "TSecure Security Solution Website",
    description: "A front-end website designed for selling security solutions, featuring a responsive UI, interactive navigation, and category-specific product pages.",
    image: projectImage5,
    githubLink: "https://github.com/TharukaKalansuriya/T-Secure-Sample-Website",
  },
  {
    id: 5,
    title: "Clothing Store Database",
    description: " A MySQL-based database system with role-based user authentication, ensuring secure access control and efficient store inventory management.",
    image: projectImage6,
    githubLink: "https://github.com/TharukaKalansuriya",
  },
  {
    id: 6,
    title: "Craze Kicks Web Application ",
    description: "A sneaker e-commerce website with PHP back-end, role-based access control, an admin dashboard, and a PHPMyAdmin database.",
    image: projectImage,
    githubLink: "https://github.com/TharukaKalansuriya",
  },
  {
    id: 7,
    title: "Portfolio Website ",
    description: "A sneaker e-commerce website with PHP back-end, role-based access control, an admin dashboard, and a PHPMyAdmin database.",
    image: projectImage7,
    githubLink: "https://github.com/yourusername/project4",
  },
  {
    id: 8,
    title: "Mental Health Management App (ongoing) ",
    description: "AI-driven mobile app analyzing user data, search history, and daily routines to monitor stress levels and mental health conditions.",
    image: projectImage8,
    githubLink: "https://github.com/TharukaKalansuriya",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-light p-8">
     <Layout>
          <AnimatedText text="Innovating Through Code!" className="mb-16" />
        </Layout>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => window.open(project.githubLink, "_blank")}
          >
            <Image src={project.image} alt={project.title} className="rounded-lg w-full h-auto" />
            <h3 className="text-2xl font-semibold text-dark mt-4">{project.title}</h3>
            <p className="text-base text-gray-700 mt-2">{project.description}</p>
            <button className="mt-4 px-4 py-2 bg-dark text-light rounded-md hover:bg-gray-700 transition">
              View on GitHub
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
