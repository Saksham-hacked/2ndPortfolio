import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Login";
import Home from "./components/Home";
import BlogEditor from "./components/BlogEditorPage";
import BlogPage from "./components/BlogPage";
import AllBlogs from "./components/AllBlog";
import MailPage from "./components/MailPage";

// import {useState} from "react";
// import {Button} from "@/components/ui/button";

const App = () => {
  // const [imgUrl,setImgUrl] = useState("https://i.pinimg.com/1200x/ce/82/c1/ce82c1fb63cbd91a73bbc8098d3fbb84.jpg")
  // const imgUrls=["https://i.pinimg.com/1200x/ce/82/c1/ce82c1fb63cbd91a73bbc8098d3fbb84.jpg","https://i.pinimg.com/736x/77/e2/fb/77e2fb92bb5ac0857bfefd98a0b15f4a.jpg","https://i.pinimg.com/736x/5d/a1/01/5da101adae27f429e93d1b6da8520914.jpg"]
  // const changeImage = () => {
  //   setImgUrl(imgUrls[Math.floor(Math.random() * imgUrls.length)])
  // }

  

  return (
    <div className="w-full h-full  bg-[url(/bgImages/darkbg.jpg)]  bg-blend-overlay bg-black/70 bg-cover bg-no-repeat scroll-smooth ">
      <div className="container max-w-screen-xl mx-auto flex-col  items-center  ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/mail" element={<MailPage />} />
          <Route path="/blog" element={<AllBlogs />} />
          <Route path="/admin" element={<>
                <Navbar />
                <BlogEditor />
              </>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// bg-[url(https://i.pinimg.com/736x/77/e2/fb/77e2fb92bb5ac0857bfefd98a0b15f4a.jpg)]
