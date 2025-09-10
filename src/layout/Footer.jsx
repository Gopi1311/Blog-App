import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Envelope } from "react-bootstrap-icons";
import { FaBlog } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact"
      className="footer px-4 py-5 text-light"
      style={{ backgroundColor: "rgba(8, 8, 8, 0.93)" }}
    >
      <div className="container">
        <div className="row g-4 justify-content-between">
          {/* About Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="mb-3 fw-bold text-uppercase">About</h6>
            <p className="about-para small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              dolor? Vitae ullam iste fuga rerum asperiores unde. Facilis
              officiis natus velit rem ullam animi consequatur.
            </p>
            <div className="d-flex flex-column small">
              <span>
                <b>Email:</b> <i className="cont"> your@example.com</i>
              </span>
              <span>
                <b>Phone:</b> <i className="cont">+91 894 5123 065</i>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="mb-3 fw-bold text-uppercase">Quick Links</h6>
            <div className="d-flex flex-column gap-2">
              <Link to="/#header" className="footer-link text-decoration-none">
                Home
              </Link>
              <Link to="/about" className="footer-link text-decoration-none">
                About
              </Link>
              <Link to="/#latest-post" className="footer-link text-decoration-none">
                Blog
              </Link>
              <Link to="/archived" className="footer-link text-decoration-none">
                Archived
              </Link>
              <Link to="/author" className="footer-link text-decoration-none">
                Author
              </Link>
              <Link to="#contact" className="footer-link text-decoration-none">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="mb-3 fw-bold text-uppercase">Categories</h6>
            <div className="d-flex flex-column gap-2">
              <Link
                to="/viewAllPosts/Lifestyle"
                className="footer-link text-decoration-none"
              >
                Lifestyle
              </Link>
              <Link
                to="/viewAllPosts/Technology"
                className="footer-link text-decoration-none"
              >
                Technology
              </Link>
              <Link to="/viewAllPosts/Travelling" className="footer-link text-decoration-none">
                Travel
              </Link>
              <Link to="/viewAllPosts/Business" className="footer-link text-decoration-none">
                Business
              </Link>
              <Link to="/viewAllPosts/Economy" className="footer-link text-decoration-none">
                Economy
              </Link>
              <Link to="/viewAllPosts/Sports" className="footer-link text-decoration-none">
                Sports
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <div
              className="newsletter-card p-4 rounded text-center w-100"
              style={{
                maxWidth: "340px",
                backgroundColor: "#1e1e2e",
                color: "#fff",
              }}
            >
              <h6 className="fw-bold mb-2">Weekly Newsletter</h6>
              <p className="small text-secondary mb-4">
                Get blog articles and offers via email
              </p>

              {/* Input with icon */}
              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="bg-dark text-white border-secondary"
                />
                <InputGroup.Text className="bg-dark text-white border-secondary">
                  <Envelope />
                </InputGroup.Text>
              </InputGroup>

              {/* Subscribe button */}
              <Button
                variant="primary"
                className="w-100 fw-semibold"
                style={{ backgroundColor: "#3b5bff", border: "none" }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom mt-5 pt-3 border-top border-secondary d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
          {/* Logo and title */}
          <div className="footer-logo d-flex align-items-center justify-content-center justify-content-md-start">
            <FaBlog size={28} className="me-2 " />
            <div className="footer-title d-flex flex-column text-start">
              <span>
                My<b>Blog</b>
              </span>
              <span className="small">
                © {new Date().getFullYear()} All Rights Reserved
              </span>
            </div>
          </div>

          {/* Terms links */}
          <div className="footer-terms">
            <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0 justify-content-center justify-content-md-end">
              <li>
                <Link to="" className="text-decoration-none footer-link">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="" className="text-decoration-none footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="" className="text-decoration-none footer-link">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Inline Styles for Hover */}
      <style>
        {`
          .footer-link, .about-para, .cont {
            color: #bbb;
            transition: color 0.3s ease, transform 0.2s ease;
          }
          .footer-link:hover {
            color: white;
            font-weight: bold ;
            transform: translateX(4px);
          }
          .newsletter-card input {
            max-width: 250px;
          }
          .newsletter-card input::placeholder {
            color: #aaa !important;
            opacity: 1;
          }
           
        `}
      </style>
    </footer>
  );
};

export default Footer;
