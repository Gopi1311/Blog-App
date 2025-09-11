import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import ViewAllPosts from "./pages/ViewAllPosts";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "../src/context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogDetail/:id" element={<BlogDetails />} />
          <Route path="/createBlog" element={<CreateBlog/>} />
           <Route path="/viewAllPosts/:category" element={<ViewAllPosts/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
