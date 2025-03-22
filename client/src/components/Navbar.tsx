import {Link} from "react-scroll";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Button} from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="sticky top-0 pt-10 w-full left-0 right-0 flex justify-between items-center px-6 md:px-10 py-4 bg-transparent bg-opacity-10 backdrop-blur-md text-white z-50 ">
        <div className="flex items-center  space-x-14 " >

        <div onClick={() => window.location.href = "/"} className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-blue-500 text-violet-200 bg-clip-text">
          Saksham kaushish
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-400">
  <li className="cursor-pointer hover:text-purple-400 transition">
    <Link to="home" smooth={true} duration={500} spy={true} activeClass="text-purple-500">
      Home
    </Link>
  </li>
  <li className="cursor-pointer hover:text-purple-400 transition">
    <Link to="about" smooth={true} duration={500} spy={true} activeClass="text-purple-500">
      About
    </Link>
  </li>
  <li className="cursor-pointer hover:text-purple-400 transition">
    <Link to="myWork" smooth={true} duration={500} spy={true} activeClass="text-purple-500">
      myWork
    </Link>
  </li>
  <li className="cursor-pointer hover:text-purple-400 transition">
    <Link to="contact" smooth={true} duration={500} spy={true} activeClass="text-purple-500">
      Contact
    </Link>
  </li>
        </ul>

        </div>
        <div className="hidden  sm:hidden lg:flex  items-center space-x-4">
         <div className="flex items-center space-x-4 md:hidden lg:flex">
         <a href="https://github.com/Saksham-hacked" target="_blank" rel="noopener noreferrer" className="text-voilet-300 hover:text-purple-400 transition">
            <FaGithub size={24} />
          </a>
          <a href="www.linkedin.com/in/reach-saksham-kaushish" target="_blank" rel="noopener noreferrer" className="text-voilet-300 hover:text-purple-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/DunkinDomino" target="_blank" rel="noopener noreferrer" className="text-voilet-300 hover:text-purple-400 transition">
            <FaXTwitter size={24} />
          </a>
         </div>
          <Button  className="ml-4 px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700">
           <NavLink to="/login">Login</NavLink>
            
          </Button>
        </div>
        {/* Mobile Dropdown */}
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu size={24} className="text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black text-white">
              <DropdownMenuItem><Link to="home" smooth={true} duration={500}>Home</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="about" smooth={true} duration={500}>About</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="projects" smooth={true} duration={500}>myWork</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="contact" smooth={true} duration={500}>Contact</Link></DropdownMenuItem>
              {/* <DropdownMenuItem>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </DropdownMenuItem> */}
              <DropdownMenuItem>
                <Button className="w-full bg-purple-600 hover:bg-purple-700"><NavLink to="/login">Login</NavLink></Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
  )
}

export default Navbar







// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6">
//       {/* Animated Intro Text */}
//       <motion.h1
//         className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Hi, I'm Saksham Koshish
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         className="mt-4 text-lg md:text-2xl text-gray-400"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         I build modern, scalable, and beautiful web applications.
//       </motion.p>

//       {/* Call to Action Buttons */}
//       <motion.div
//         className="mt-6 flex gap-4"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1, duration: 0.5 }}
//       >
//         <Button className="px-6 py-3 text-lg bg-purple-600 hover:bg-purple-700">
//           View Projects <ArrowRight className="ml-2" />
//         </Button>
//         <Button variant="outline" className="px-6 py-3 text-lg border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
//           Contact Me
//         </Button>
//       </motion.div>
//     </section>
//   );
// }
