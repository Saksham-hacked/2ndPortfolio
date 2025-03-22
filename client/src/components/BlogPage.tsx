import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

interface Blog {
  _id: string;
  title: string;
  coverImageUrl: string;
  body: string;
  createdBy: {
    username: string;
  };
  createdAt: string;
}

const BlogPage = () => {
  const { id } = useParams<{ id: string }>(); // Get blog ID from URL
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blog/${id}`);
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const data = await response.json();
        setBlog(data.blog);
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);
  console.log(blog);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-400"></div>
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex flex-col justify-center items-center text-red-500">
        <p>{error}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );

  if (!blog) return <p className="text-center text-gray-400">No blog found</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url(../public/bgImages/darkbg.jpg)] bg-no-repeat bg-blend-overlay bg-cover bg-center bg-black/70 w-screen absolute left-0">
      <motion.div
        className="max-w-3xl w-full bg-gray-950 bg-transparent backdrop-blur-md text-white rounded-lg shadow-2xl p-6 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-pink-400 to-purple-500 p-6 "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {blog.title}
        </motion.h1>

        {/* Cover Image */}
        {blog.coverImageUrl && (
          <motion.img
            src={blog.coverImageUrl}
            alt="Cover"
            className="w-full h-72 md:h-96 object-cover mt-6 rounded-lg shadow-lg"
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            loading="lazy"
          />
        )}

        {/* Blog Content */}
        <p className="mt-6 text-lg md:text-xl leading-8 md:leading-9 text-gray-300 tracking-wide overflow-auto max-h-[60vh] px-2">
          {blog.body}
        </p>
      </motion.div>
    </div>
  );
};

export default BlogPage;
