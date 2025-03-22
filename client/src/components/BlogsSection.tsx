import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


type Blog = {
  _id: string;
  title: string;
  coverImageUrl: string;
};

const BlogSection: React.FC = () => {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        const data = await response.json();
        console.log("Fetched Blogs:", data);
        setAllBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  if (allBlogs.length === 0) {
    return <p className="text-white text-center">Loading Blogs...</p>;
  }

  return (
    <div className=" w-full bg-transparent px-4">
      <h2 className="   my-6 text-center text-whitetext-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text col-end-4">Latest Blogs</h2>

      {/* Blog Cards Container */}
      <div className="flex flex-col md:flex-row gap-2 space-x-4  justify-center flex-wrap px-4">
        {allBlogs.map((blog, index) => (
            index<5 &&<motion.div onClick={() => window.location.href = `/blog/${blog._id}`}
                key={blog._id}
                className="relative w-[180px] md:w-[220px] bg-gray-800 rounded-lg shadow-lg p-3 
                           transition-all duration-300 ease-in-out hover:scale-110"
              >
                {/* Blog Image */}
                <img
                  src={blog.coverImageUrl}
                  alt={blog.title}
                  className="w-full h-[120px] md:h-[150px] object-cover rounded-md"
                />
    
                {/* Blog Title */}
                <h3 className="text-white text-lg font-semibold mt-3 text-center">
                {blog.title.length > 20 ? blog.title.substring(0, 40) + "..." : blog.title}
                </h3>
    
                {/* View Full Blog Button */}
               
              </motion.div>
          
        ))}

        <div className=" flex justify-center items-center"><Button variant="outline"  onClick={() => window.location.href = "/blog"} className="px-6 py-3 text-lg border-purple-500 text-purple-500 bg-purple-500 text-white">
          View All Blogs <ArrowRight className="ml-2" />
        </Button></div>
      </div>
    </div>
  );
};

export default BlogSection;
