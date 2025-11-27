"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  githubLink:string;
  technologies: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <Image
        
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h1 className="text-xl font-bold mb-2">{project.name}</h1>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4 line-clamp-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#c9ffe9] font-medium text-xs rounded-full text-[#005c48]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <Link
            href={`/ProjectDetails/${project.id}`}
            className="px-4 py-2 bg-[#00d99c] hover:bg-[#008e6a] rounded-md font-medium transition duration-300 text-white"
          >
            View More
          </Link>

          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#00d99c] text-[#00d99c] hover:bg-[#c9ffe9] hover:bg-opacity-30 rounded-md font-medium transition duration-300"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;