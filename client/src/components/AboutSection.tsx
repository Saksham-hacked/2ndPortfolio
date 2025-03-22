// import { motion } from "framer-motion";
// // import Image from "next/image";
// // import sakshamImage from "@/public/saksham.jpg"; // Replace with your actual image path

// export default function AboutSection() {
//   return (
//     <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-black text-white">
//       {/* Left Section: About Text */}
//       <motion.div 
//         className="md:w-1/2 space-y-6"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
//           About Me
//         </h2>
//         <p className="text-gray-300 text-lg leading-relaxed">
//           Hey there! I'm <span className="text-purple-400 font-semibold">Saksham Koshish</span>, an aspiring Electrical Engineer passionate about software development, AI, and embedded systems. I love crafting innovative and modern web experiences using React, Tailwind, and Framer Motion.
//         </p>
//         <p className="text-gray-400">
//           I'm currently pursuing my BTech at NIT Jalandhar, actively exploring how technology can drive impactful solutions. Whether it's web development, AI models, or embedded systems, I'm always eager to experiment and build!
//         </p>
//         <p className="text-gray-400">
//           Outside of coding, you'll find me hitting the gym, traveling, or diving into the latest tech trends.
//         </p>
//       </motion.div>
      
//       {/* Right Section: Image */}
//       <motion.div 
//         className="md:w-1/2 flex justify-center mt-10 md:mt-0"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-xl border-2 border-purple-500">
//           {/* <Image src={sakshamImage} alt="Saksham Koshish" layout="fill" objectFit="cover" className="rounded-xl" /> */}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImageRevealEffect from "./Image";

export default function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Optional: Reset when out of view
    }
  }, [inView, controls]);

  return (
    <section
      id="about"
      ref={ref}
      className=" flex h-screen  flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-transparent text-white"
    >
      {/* Left Section: About Text */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hey there! I'm <span className="text-purple-400 font-semibold">Saksham Kaushish</span>, a passionate problem solver who comes up with innovative solutions through code. Building modern, scalable, and beautiful web applications is my forte.
        </p>
        <p className="text-gray-400">
          I'm currently pursuing my BTech at NIT Jalandhar, actively exploring how technology can drive impactful solutions. Whether it's web development, AI models, or embedded systems, I'm always eager to experiment and build!
        </p>
        <p className="text-gray-400">
          Outside of coding, you'll find me hitting the gym, traveling, or diving into the latest tech trends.
        </p>
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        className="md:w-1/2 hidden md:flex justify-center mt-10 md:mt-0"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-xl ">
          {/* Image Placeholder */}
          {/* <img src="/public/myImages/colouredMinecraft.jpeg"  className="rounded-xl object-cover w-full h-full " alt="my photo" />/
          //  */}
          <ImageRevealEffect />
        </div>
      </motion.div>
    </section>
  );
}
