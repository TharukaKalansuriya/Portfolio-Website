import React from "react";
import Image from "next/image";
import researchImage from "../../public/images/projects/mental.png"; 
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

const researchData = [
    {
        id: 1,
        title: "AI-Powered Mental Health Tracking App",
        description:
            "A mobile application designed to monitor mental health using AI-driven analysis of user data. The app tracks stress levels, analyzes behavioral patterns, and sends alerts when intervention is needed.",
        image: researchImage,
        link: "#", 
    },
    // Future research projects can be added here
];

const ResearchPage = () => {
    return (
        <div className="min-h-screen bg-light p-8">
            <Layout>
                <AnimatedText text=" Tech solutions for challenges." className="mb-16 text-7xl" />
            </Layout>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {researchData.map((research) => (
                    <div
                        key={research.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col items-center text-center"
                    >
                        <Image
                            src={research.image}
                            alt={research.title}
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-dark mb-2">
                            {research.title}
                        </h3>
                        <p className="text-base text-gray-700 mb-4">
                            {research.description}
                        </p>
                        <a
                            href={research.link}
                            className="px-4 py-2 bg-dark text-light rounded-md text-lg font-medium hover:bg-gray-800 transition-all"
                        >
                            View Research
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResearchPage;
