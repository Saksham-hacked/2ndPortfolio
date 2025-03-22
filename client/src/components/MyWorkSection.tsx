import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaDatabase,
  FaCuttlefish,
} from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { Button } from "@/components/ui/button";


const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-blue-300" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  //
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> },
  { name: "C++", icon: <FaCuttlefish className="text-gray-400" /> },
  { name: "postman", icon: <SiPostman className="text-gray-400" /> },
  //
  { name: "TypeScript", icon: <FaDatabase className="text-purple-500" /> },
  //
  { name: "Tailwind UI", icon: <FaDatabase className="text-purple-500" /> },
];

const projects = [
  {
    title: "Portfolio Website",
    image: "projectimages/portfolioWebsiteImage.png",
    description: "A personal portfolio website showcasing my projects.",
    link: "/",
  },
  {
    title: " TimetableModule of Xceed.nitj ",
    image: "projectimages/xceedImage.png",
    description: "Contibuted to timetable module of xceed.nitj. An institute level Project",
    link: "https://xceed.nitj.ac.in/timetable",
  },
  {
    title: "Blog Website(Desktop)",
    image: "/projectimages/blogApp.png",
    description: "An online blog website where users can read and write blogs.User can add comments also.",
    link: "https://blog-app-5t6y.onrender.com",
  },
  // {
  //   title: "Url Shortner",
  //   image: "../public/projectimages/githubimage.png",
  //   description: "A chatbot powered by AI for customer support.",
  //   link: "https://github.com/Saksham-hacked/short_url_generator",
  // },
];

const Footer = () => {
  return (
    <section
      id="myWork"
      className="container  max-w-screen-xl md:h-screen h-fit mx-auto flex justify-center items-center flex-col gap-10 px-6 md:px-10"
    >
      <div className="flex flex-col  md:flex-row justify-between items-center gap-10">
        
        <div className="  md:hidden   text-whitetext-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text col-end-4"><h1>Skills and Projects</h1></div>
        <div className="grid grid-cols-4  gap-4 w-full md:w-1/2">
        <div className="  hidden md:flex  md:col-span-3 text-whitetext-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text col-end-4"><h1>Skills and Projects</h1></div>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-3 bg-gray-800 rounded-lg text-center flex flex-col items-center gap-2"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-white text-xs ">{skill.name}</span>
            </div>
          ))}
          <Button   className="px-6 py-6 col-span-4 text-lg border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            <a href="./resume.pdf" download>Download Resume</a>

          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="p-5 bg-gray-900 rounded-lg text-center hover:bg-gray-700 transition shadow-lg flex flex-col items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className=" text-sm md:text-lg font-bold text-white ">{project.title}</h3>
              <p className="text-sm hidden md:flex text-gray-400 mt-2">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
