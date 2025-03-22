// import { useEffect, useState } from "react";
// import Cookies from "js-cookie";

// interface Blog {
//   _id: string;
//   title: string;
//   coverImageUrl: string;
//   body: string;
// }

// const BlogEditor = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = Cookies.get("token"); // Read the authentication cookie
//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, []);

//   if (!isAuthenticated) {
//     return <p className="text-red-500 text-center">You must be logged in to access this page.</p>;
//   }
//   else{
//     const [title, setTitle] = useState("");
//     const [coverImage, setCoverImage] = useState<File | null>(null);
//     const [body, setBody] = useState("");
//     const [blogs, setBlogs] = useState<Blog[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
  
  
//     // Fetch Blogs from API
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/");
//         if (!response.ok) throw new Error("Failed to fetch blogs");
  
//         const data = await response.json();
//         setBlogs(data);
//       } catch (err) {
//         setError("Error fetching blogs");
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     useEffect(() => {
//       fetchBlogs();
//     }, []);
  
//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       if (e.target.files && e.target.files.length > 0) {
//         setCoverImage(e.target.files[0]);
//       }
//     };
  
//     const handlePublish = async () => {
//       if (!title || !coverImage || !body) {
//         alert("Please fill all fields before publishing!");
//         return;
//       }
  
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("coverImage", coverImage);
//       formData.append("body", body);
  
//       try {
//         const response = await fetch("http://localhost:3000/blog", {
//           method: "POST",
//           body: formData,
//           credentials: "include",
//         });
  
//         if (response.ok) {
//           alert("Blog Published Successfully!");
//           setTitle("");
//           setCoverImage(null);
//           setBody("");
//           fetchBlogs(); // Refresh blogs list
//         } else {
//           alert("Failed to publish blog");
//         }
//       } catch (error) {
//         console.error("Error publishing blog:", error);
//       }
//     };
  
//     const handleDelete = async (blogId: string) => {
//       try {
//         const response = await fetch(`http://localhost:3000/blog/${blogId}`, {
//           method: "DELETE",
//         });
  
//         if (response.ok) {
//           setBlogs(blogs.filter((blog) => blog._id !== blogId));
//           alert("Blog deleted successfully!");
//         } else {
//           alert("Failed to delete blog");
//         }
//       } catch (error) {
//         console.error("Error deleting blog:", error);
//       }
//     };
  
//     return (
//       <div className="w-full min-h-screen max-w-2xl mx-auto p-6 text-white">
//         <h2 className="text-3xl font-bold text-center mb-6">Write a Blog</h2>
  
//         {/* Blog Form */}
//         <input
//           type="text"
//           placeholder="Blog Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
//         />
  
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
//         />
  
//         <textarea
//           placeholder="Write your blog content here..."
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//           className="w-full p-2 h-40 rounded bg-gray-800 border border-gray-700 text-white"
//         ></textarea>
  
//         <button
//           onClick={handlePublish}
//           className="w-full mt-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
//         >
//           Publish Blog
//         </button>
  
//         {/* Blogs Section */}
//         <h2 className="text-2xl font-bold mt-10 mb-4">All Blogs</h2>
//         {loading ? (
//           <p className="text-gray-400">Loading blogs...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {blogs.map((blog) => (
//               <div
//                 key={blog._id}
//                 className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative"
//               >
//                 <img
//                   src={blog.coverImageUrl}
//                   alt={blog.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{blog.title}</h3>
//                   <p className="text-gray-400 mt-1 line-clamp-2">
//                     {blog.body.substring(0, 100)}...
//                   </p>
//                   <button
//                     onClick={() => handleDelete(blog._id)}
//                     className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }





//   // const [title, setTitle] = useState("");
//   // const [coverImage, setCoverImage] = useState<File | null>(null);
//   // const [body, setBody] = useState("");
//   // const [blogs, setBlogs] = useState<Blog[]>([]);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState<string | null>(null);


//   // // Fetch Blogs from API
//   // const fetchBlogs = async () => {
//   //   try {
//   //     const response = await fetch("http://localhost:3000/");
//   //     if (!response.ok) throw new Error("Failed to fetch blogs");

//   //     const data = await response.json();
//   //     setBlogs(data);
//   //   } catch (err) {
//   //     setError("Error fetching blogs");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchBlogs();
//   // }, []);

//   // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   if (e.target.files && e.target.files.length > 0) {
//   //     setCoverImage(e.target.files[0]);
//   //   }
//   // };

//   // const handlePublish = async () => {
//   //   if (!title || !coverImage || !body) {
//   //     alert("Please fill all fields before publishing!");
//   //     return;
//   //   }

//   //   const formData = new FormData();
//   //   formData.append("title", title);
//   //   formData.append("coverImage", coverImage);
//   //   formData.append("body", body);

//   //   try {
//   //     const response = await fetch("http://localhost:3000/blog", {
//   //       method: "POST",
//   //       body: formData,
//   //       credentials: "include",
//   //     });

//   //     if (response.ok) {
//   //       alert("Blog Published Successfully!");
//   //       setTitle("");
//   //       setCoverImage(null);
//   //       setBody("");
//   //       fetchBlogs(); // Refresh blogs list
//   //     } else {
//   //       alert("Failed to publish blog");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error publishing blog:", error);
//   //   }
//   // };

//   // const handleDelete = async (blogId: string) => {
//   //   try {
//   //     const response = await fetch(`http://localhost:3000/blog/${blogId}`, {
//   //       method: "DELETE",
//   //     });

//   //     if (response.ok) {
//   //       setBlogs(blogs.filter((blog) => blog._id !== blogId));
//   //       alert("Blog deleted successfully!");
//   //     } else {
//   //       alert("Failed to delete blog");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error deleting blog:", error);
//   //   }
//   // };

//   // return (
//   //   <div className="w-full min-h-screen max-w-2xl mx-auto p-6 text-white">
//   //     <h2 className="text-3xl font-bold text-center mb-6">Write a Blog</h2>

//   //     {/* Blog Form */}
//   //     <input
//   //       type="text"
//   //       placeholder="Blog Title"
//   //       value={title}
//   //       onChange={(e) => setTitle(e.target.value)}
//   //       className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
//   //     />

//   //     <input
//   //       type="file"
//   //       accept="image/*"
//   //       onChange={handleFileChange}
//   //       className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
//   //     />

//   //     <textarea
//   //       placeholder="Write your blog content here..."
//   //       value={body}
//   //       onChange={(e) => setBody(e.target.value)}
//   //       className="w-full p-2 h-40 rounded bg-gray-800 border border-gray-700 text-white"
//   //     ></textarea>

//   //     <button
//   //       onClick={handlePublish}
//   //       className="w-full mt-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
//   //     >
//   //       Publish Blog
//   //     </button>

//   //     {/* Blogs Section */}
//   //     <h2 className="text-2xl font-bold mt-10 mb-4">All Blogs</h2>
//   //     {loading ? (
//   //       <p className="text-gray-400">Loading blogs...</p>
//   //     ) : error ? (
//   //       <p className="text-red-500">{error}</p>
//   //     ) : (
//   //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//   //         {blogs.map((blog) => (
//   //           <div
//   //             key={blog._id}
//   //             className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative"
//   //           >
//   //             <img
//   //               src={blog.coverImageUrl}
//   //               alt={blog.title}
//   //               className="w-full h-40 object-cover"
//   //             />
//   //             <div className="p-4">
//   //               <h3 className="text-lg font-semibold">{blog.title}</h3>
//   //               <p className="text-gray-400 mt-1 line-clamp-2">
//   //                 {blog.body.substring(0, 100)}...
//   //               </p>
//   //               <button
//   //                 onClick={() => handleDelete(blog._id)}
//   //                 className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
//   //               >
//   //                 Delete
//   //               </button>
//   //             </div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     )}
//   //   </div>
//   // );
// };

// export default BlogEditor;







// // import { useState } from "react";

// // const BlogEditor = () => {
// //   const [title, setTitle] = useState("");
// //   const [coverImage, setCoverImage] = useState<File | null>(null);
// //   const [body, setBody] = useState("");

// //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files.length > 0) {
// //       setCoverImage(e.target.files[0]); // Save file
// //     }
// //   };

// //   const handlePublish = async () => {
// //     if (!title || !coverImage || !body) {
// //       alert("Please fill all fields before publishing!");
// //       return;
// //     }

// //     // Create FormData object
// //     console.log(coverImage);
// //     const formData = new FormData();
// //     formData.append("title", title);
// //     formData.append("coverImage", coverImage); // Image file
// //     formData.append("body", body);
    
// //     for (const pair of formData.entries()) {
// //         console.log(pair[0], pair[1]); // Log FormData contents
// //       }

// //     try {
// //       const response = await fetch("http://localhost:3000/blog", {
// //         method: "POST",
// //         body: formData,
// //         credentials: "include",
       
// //       });

// //       if (response.ok) {
// //         alert("Blog Published Successfully!");
// //         setTitle("");
// //         setCoverImage(null);
// //         setBody("");
// //       } else {
// //         alert("Failed to publish blog");
// //       }
// //     } catch (error) {
// //       console.error("Error publishing blog:", error);
// //     }
// //   };

// //   return (
// //     <div className="w-full h-full min-h-screen max-w-2xl mx-auto p-6 bg-transparent  text-white rounded-lg shadow-lg">
// //       <h2 className="text-3xl font-bold text-center mb-6">Write a Blog</h2>

// //       {/* Title Input */}
// //       <input
// //         type="text"
// //         placeholder="Blog Title"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //         className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
        
// //       />

// //       {/* File Upload Input */}
// //       <input
// //         type="file"
// //         accept="image/*"
// //         onChange={handleFileChange}
// //         placeholder="Upload Cover Image"
// //         className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
// //       />

// //       {/* Blog Body Input */}
// //       <textarea
// //         placeholder="Write your blog content here..."
// //         value={body}
// //         onChange={(e) => setBody(e.target.value)}
// //         className="w-full p-2 h-40 rounded bg-gray-800 border border-gray-700 text-white"
// //       ></textarea>

// //       {/* Blog Preview */}
// //       {/* {coverImage && (
// //         <div className="mt-6 text-wrap w-full">
// //           <h3 className="text-2xl font-semibold">{title}</h3>
// //           <p className="mt-2">{body.substring(0, 200)}...</p>
// //         </div>
// //       )} */}

// //       {/* Publish Button */}
// //       <button
// //         onClick={handlePublish}
// //         className="w-full mt-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
// //       >
// //         Publish Blog
// //       </button>
// //     </div>
// //   );
// // };

// // export default BlogEditor;




import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Blog {
  _id: string;
  title: string;
  coverImageUrl: string;
  body: string;
}

const BlogEditor = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [body, setBody] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://twondportfolio.onrender.com/");
      if (!response.ok) throw new Error("Failed to fetch blogs");

      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError("Error fetching blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
    }
  };

  const handlePublish = async () => {
    if (!title || !coverImage || !body) {
      alert("Please fill all fields before publishing!");
      return;
    }

    const token = Cookies.get("token");
    if (!token) {
      alert("Authentication error. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("coverImage", coverImage);
    formData.append("body", body);

    try {
      const response = await fetch("https://twondportfolio.onrender.com/blogs", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Blog Published Successfully!");
        setTitle("");
        setCoverImage(null);
        setBody("");
        fetchBlogs();
      } else {
        alert("Failed to publish blog");
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
    }
  };

  const handleDelete = async (blogId: string) => {
    const token = Cookies.get("token");

    try {
      const response = await fetch(`https://twondportfolio.onrender.com/blog/${blogId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog._id !== blogId));
        alert("Blog deleted successfully!");
      } else {
        alert("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (!isAuthenticated) {
    return <p className="text-red-500 text-center">You must be logged in to access this page.</p>;
  }

  return (
    <div className="w-full min-h-screen max-w-2xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Write a Blog</h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700 text-white"
      />

      <textarea
        placeholder="Write your blog content here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-2 h-40 rounded bg-gray-800 border border-gray-700 text-white"
      ></textarea>

      <button
        onClick={handlePublish}
        className="w-full mt-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
      >
        Publish Blog
      </button>

      <h2 className="text-2xl font-bold mt-10 mb-4">All Blogs</h2>
      {loading ? (
        <p className="text-gray-400">Loading blogs...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
              <img src={blog.coverImageUrl} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-400 mt-1">{blog.body.substring(0, 100)}...</p>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogEditor;

