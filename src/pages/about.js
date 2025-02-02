"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../../public/images/profile/pss.jpg";

// Animated Counter Component
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = value / (duration / 16); // Smooth steps

    const updateCounter = () => {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [value]);

  return <motion.span className="inline-block text-7xl font-bold">{count}+</motion.span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About Tharuka Kanalsuriya" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText text="Passion Drives Innovation!" className="mb-16" />
        </Layout>

        <div className="grid w-full grid-cols-8 gap-16">
          {/* About Me Section */}
          <div className="col-span-3 flex flex-col items-start justify-start p-14">
            <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75">About Me</h2>
            <p className="font-medium p-2">
              Hi, I am Tharuka, a passionate full-stack developer, mobile app developer, and IoT enthusiast
              dedicated to crafting powerful, user-friendly digital solutions. With hands-on experience
              in web development, mobile applications, and embedded systems, I bring ideas to life through
              clean code and smart designs.
            </p>

            <p className="font-medium p-2">
              Development isn’t just about coding; it’s about solving real problems, improving user experiences, and driving
              innovation. Whether it’s a website, mobile app, or IoT system, I create functional and efficient solutions.
            </p>

            <p className="font-medium p-2">
              With a strong foundation in Flutter, Django, Tailwind CSS, PHP, and Arduino, I have developed projects
              ranging from automated systems to AI-driven applications. I’m always exploring new technologies
              to stay ahead in the ever-evolving tech landscape.
            </p>

            <h2 className="font-bold p-2">🚀 Let’s build something amazing together!</h2>
          </div>

          {/* Profile Image Section */}
          <div className="col-span-3 relative h-max rounded-2xl mt-32 p-2">
            <Image src={profilePic} alt="Tharuka" className="w-full h-auto rounded-2xl" />
          </div>

          {/* Statistics Section */}
          <div className="col-span-2 flex flex-col items-center justify-around">
            <div className="flex flex-col items-center justify-center">
              <AnimatedNumber value={15} />
              <h2 className="text-xl font-medium capitalize text-dark/75">Projects Completed</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <AnimatedNumber value={7} />
              <h2 className="text-xl font-medium capitalize text-dark/75">Frameworks</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <AnimatedNumber value={3} />
              <h2 className="text-xl font-medium capitalize text-dark/75">Years Coding Experience</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
