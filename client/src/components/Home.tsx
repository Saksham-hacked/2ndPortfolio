import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import { Element } from "react-scroll";
import Footer from "./ContactSection";
import MyWorkSection from "./MyWorkSection";
import BlogSection from "./BlogsSection";

const Home = () => {
  return (
    <>
      <Element name="home"id="home" >
          <HeroSection />
        </Element>
        <Element name="about" id="about">
          <AboutSection />
        </Element>
        <Element name="myWork"  id="myWork">
          <MyWorkSection />
        </Element>
        <Element name="blogs"  id="blogs">
          <BlogSection />
        </Element>
        <Element name="contact" id="contact">
          <Footer />
        </Element>
    </>
  )
}

export default Home
