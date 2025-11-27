import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaNodeJs,
  FaFileDownload,
  FaHtml5,
  FaCss3Alt,
  FaFacebook,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiMongoose 
  
} from "react-icons/si";
import GlareHove from "@/components/GlareHover"

const Skills = () => {
    const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl" /> },
    { name: "React", icon: <FaReact className="text-4xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs  className="text-4xl" /> },
    { name: "Mongoose", icon: <SiMongoose   className="text-4xl" /> },
  ];
  return (
     <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-4 border-[#16f1b1] pb-2">My Skills</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-6 gap-8  transition duration-300"
              >
                
                      <div className="text-[#16f1b1] text-center ">{skill.icon}</div>
                       <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
                  
               




                
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills