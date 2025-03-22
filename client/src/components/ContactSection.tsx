import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full  bg-transparent bg-opacity-10 backdrop-blur-md text-white py-10 mt-10 mb-0">
      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-blue-500 text-transparent bg-clip-text">
            Get in touch
          </h2>
          <p className="text-gray-400 mt-2">
            Building modern, scalable web applications.
          </p>
          <div className="mt-4 space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <FaEnvelope /> kaushishsaksham@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +91 7895254860
            </p>
          </div>
        </div>

        <div className="flex space-x-6 mt-6 md:mt-0">
          <a
            href="https://github.com/Saksham-hacked"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="www.linkedin.com/in/reach-saksham-kaushish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/DunkinDomino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 md:mt-0"
        >
          <Button className="px-6 py-3 text-lg bg-purple-600 hover:bg-purple-700">
            Message Me
          </Button>
        </motion.div> */}

        <div className="flex flex-col items-center gap-2 mt-6 md:mt-0">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-blue-500 text-transparent bg-clip-text">
            Message me
          </h3>
          <div className="flex space-x-4">
            <span
              onClick={() =>
                window.open(
                  "https://wa.me/7895254860?text=Hello!%20I'd%20like%20to%20connect",
                  "_blank"
                )
              }
              className="cursor-pointer text-gray-400 hover:text-purple-400 transition text-2xl"
            >
              <FaWhatsapp />
            </span>
            <span  onClick={() => window.location.href = "/mail"} className="cursor-pointer text-gray-400 hover:text-purple-400 transition text-2xl">

              <FaEnvelope />
            </span>
            
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Saksham Kaushish. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
