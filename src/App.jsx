import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Plans from "./pages/Plans";
import News from "./pages/News";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      {/* Global SEO / Verification */}
      <Helmet>
        <meta
          name="google-site-verification"
          content="xxxx" // ganti xxxx dengan kode dari Google Search Console
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
