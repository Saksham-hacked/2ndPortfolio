import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Blog {
  _id: string;
  title: string;
  coverImageUrl: string;
  body: string;
}

const AllBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`https://twondportfolio.onrender/`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        console.log(data);
        setBlogs(data); // Make sure the API returns { blogs: [...] }
      } catch (err) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
//   if (blogs.length === 0) return <p className="text-center text-gray-400">No blogs found</p>;
  console.log(blogs);

  return (
    <div className="min-h-screen h-full bg-transparent flex flex-wrap text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Have fun reading...</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <motion.div  onClick={() => window.location.href = `/blog/${blog._id}`}
            key={blog._id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={blog.coverImageUrl}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-400 mt-2 line-clamp-2">
                {blog.body.substring(0, 100)}...
              </p>
              <Link
                to={`/blog/${blog._id}`}
                className="inline-block mt-4 text-blue-400 hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
