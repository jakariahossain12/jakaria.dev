"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  name: string;
  description: string;
  detailedDescription?: string;
  imageUrl: string;
  techStack: string;
  GalleryImg?: string[];
  liveLink?: string;
  githubLink?: string;
  server?: string;
  challenges?: string;
  futurePlans?: string;
}

const ProjectDetails = () => {
  const params = useParams();
  const id = params?.id as string;

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => {
        const found = data.find((p) => p.id.toString() === id);
        setProject(found || null);
      });
  }, [id]); // ✅ depend on id

  if (!project) {
    return (
      <div className="pt-20 text-center text-[#00d99c]">
        Loading project details...
      </div>
    );
  }

  return (
    <div>
      <div className="pt-20 pb-12 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12 group">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-96 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold  mb-2">
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-8 space-y-8">
            {/* Description Card */}
            <div className="p-6 rounded-xl shadow-lg   ">
              <h2 className="text-2xl font-bold  mb-4 flex items-center">
                <span className="w-6 h-6 bg-[#00d99c] rounded-full mr-3"></span>
                Project Overview
              </h2>
              <p className=" text-lg leading-relaxed">
                {project.description}
              </p>

              {project.detailedDescription && (
                <>
                  <h3 className="text-xl font-semibold mt-6 mb-2 ">
                    Detailed Features
                  </h3>
                  <p className="">
                    {project.detailedDescription}
                  </p>
                </>
              )}
            </div>

            {/* Screenshot Gallery */}
            {project.GalleryImg && (
              <div className="  p-6 rounded-xl shadow-lg ">
                <h2 className="text-2xl font-bold  mb-6 flex items-center">
                  <span className="w-6 h-6 bg-[#007055] rounded-full mr-3"></span>
                  Project Gallery
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.GalleryImg.map((i, index) => (
                    <div key={index}>
                      <img
                        src={i}
                        alt={`Gallery ${index}`}
                        className="rounded-lg shadow-md hover:shadow-lg transition-all cursor-zoom-in"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 space-y-6">
            {/* Quick Links */}
            <div className=" p-6 rounded-xl shadow-lg    sticky top-20">
              <h2 className="text-xl font-bold text-[#00d99c]  mb-4">
                Project Links
              </h2>
              <div className="space-y-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-between p-3  rounded-lg hover:bg-[#00d99c] transition-colors"
                  >
                    <span className="font-medium">Live Demo</span>
                    <FaExternalLinkAlt className="text-[#007055]" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-between p-3  rounded-lg hover:bg-[#00d99c]  transition-colors"
                  >
                    <span className="font-medium">Source Code Client</span>
                    <FaGithub className="text-[#007055]" />
                  </a>
                )}
                {project?.server && (
                  <a
                    href={project?.server}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-between p-3  rounded-lg hover:bg-[#00d99c]  transition-colors"
                  >
                    <span className="font-medium">Source Code Server</span>
                    <FaGithub className="text-[#007055]" />
                  </a>
                )}

              </div>
            </div>

            {/* Challenges */}
            {project.challenges && (
              <div className=" p-6 rounded-xl shadow-lg ">
                <h2 className="text-xl font-bold  mb-4 flex items-center">
                  <span className="w-6 h-6 bg-[#007055] rounded-full mr-3"></span>
                  Key Challenges
                </h2>
                <ul className="space-y-3">
                  {project.challenges?.split(",").map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#007055] mr-2 mt-1">•</span>
                      <span className="">
                        {challenge.trim()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Future Improvements */}
        {project.futurePlans && (
          <div className="mt-12  p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-center  mb-6">
              Future Vision
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.futurePlans?.split(",").map((plan, i) => (
                <div
                  key={i}
                  className="bg-[#00d99c] p-6 rounded-xl backdrop-blur-sm   shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-lg mb-2 text-black ">
                    {plan.trim()}
                  </h3>
                  <p className="text-black text-sm">
                    Planned enhancement to improve user experience and functionality.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;