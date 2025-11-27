import ProjectCard from "./ProjectCard"
import projects from "@/public/projects.json";


const  Project = async() => {
    
  return (
     <section id="project" className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-4 border-[#00d99c] pb-2">My Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default Project