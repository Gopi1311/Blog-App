import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "../src/context/ThemeContext"; // ✅ import
import ScrollToTop from "./components/ScrollToTop";
import CreateBlog from "./pages/CreateBlog";
import ViewAllPosts from "./pages/ViewAllPosts";

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
