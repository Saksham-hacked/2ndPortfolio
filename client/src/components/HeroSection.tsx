import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {Link} from "react-scroll";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-[80vh] flex flex-col  m items-center justify-center text-center bg-transparent text-white px-6"
    >
      
      {/* Animated Intro Text */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Saksham Kaushish
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-lg md:text-2xl text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I build modern, scalable, and beautiful web applications.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        className="mt-6 mx-4 flex gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button className="px-4 py-3 mx-2 text-lg bg-purple-600 hover:bg-purple-700">
        <Link to="myWork" smooth={true} duration={500} spy={true} activeClass="text-purple-500"><span className="flex items-center">View Projects <ArrowRight className="ml-2" /></span>
        </Link>
          
        </Button>
        <Button
          variant="outline"
          
          className="px-4 mx-2 py-3 text-lg border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
        >
          <Link to="contact" smooth={true} duration={500} spy={true} activeClass="text-purple-500">contact me</Link>
        </Button>
      </motion.div>

      {/* <div className="mt-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem><div>
            <img src="https://images.unsplash.com/photo-1735836761873-1e5fa93f7125?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Saksham Koshish" className="w-sm h-sm object-cover" /></div></CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}
    </section>
  );
}
