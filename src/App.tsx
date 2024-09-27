import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import Pages from "./Pages/Pages/FaqPage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BlogPost from "./Pages/Blog/Blog";
import FaqPage from "./Pages/Pages/FaqPage";
import JobSearch from "./Pages/Career/JobSearch/JobSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="nav-hero">
          <Navbar />
          <Hero />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/career" element={<JobSearch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
