import { useContext } from "react";
import { FaBlog } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SunFill, MoonFill } from "react-bootstrap-icons";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
      bsCollapse.hide();
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      id="header"
      style={{
        height: "100px",
        padding: "0px 10vw",
        backgroundColor: "black",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center text-white"
          to="/"
        >
          <FaBlog size={28} className="me-2" />
          <span className="fw-bold fs-4">
            My<b>Blog</b>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse rounded position-relative"
          id="navbarNav"
          style={{ backgroundColor: "black", zIndex: "1050", padding: "1rem" }}
        >
          <ul className="navbar-nav mx-auto gap-3 ">
            <li className="nav-item ">
              <Link
                className="nav-link text-white under-line"
                to="/"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link text-white under-line"
                to="/#latest-post"
                onClick={closeNavbar}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white under-line"
                to="/createBlog"
                onClick={closeNavbar}
              >
                Create Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white under-line"
                to="/viewAllPosts/all"
                onClick={closeNavbar}
              >
                ViewAllBlogs
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white text-decoration-none"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/viewAllPosts/Technology"
                    onClick={closeNavbar}
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/viewAllPosts/Lifestyle"
                    onClick={closeNavbar}
                  >
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/viewAllPosts/Travel"
                    onClick={closeNavbar}
                  >
                    Travel
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/viewAllPosts/Food"
                    onClick={closeNavbar}
                  >
                    Food
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/viewAllPosts/Health"
                    onClick={closeNavbar}
                  >
                    Health
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/viewAllPosts/Business"
                    onClick={closeNavbar}
                  >
                    Business
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search + Theme Switch */}
          <div className="d-flex align-items-center gap-4 mt-3 mt-lg-0">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
            />

            {/* Bootstrap Switch */}
            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                id="themeSwitch"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
              <label
                className="form-check-label ms-2 text-white"
                htmlFor="themeSwitch"
              >
                {theme === "dark" ? (
                  <MoonFill size={20} />
                ) : (
                  <SunFill size={20} />
                )}
              </label>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
    .under-line {
      position: relative;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .under-line::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px; /* thickness of underline */
      background-color: white;
      transition: width 0.3s ease;
    }

    .under-line:hover::after {
      width: 100%;
    }

    .under-line:hover {
      color: #fff;
      font-weight: 500;
    }


  `}
      </style>
    </nav>
  );
};

export default Header;
