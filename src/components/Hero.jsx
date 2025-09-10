import React, { useContext } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/heroImg.png";
import { ThemeContext } from "../context/ThemeContext"; // ✅

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="hero container-fluid d-flex flex-column justify-content-center"
      style={{
        minHeight: "100vh",
        padding: "0 5vw",
        backgroundColor:
          theme === "dark" ? "rgba(6,6,34,0.927)" : "rgba(245,245,245,1)",
        color: theme === "dark" ? "white" : "black",
      }}
    >
    
      {/* Hero Image & Card */}
      <div className="row justify-content-center align-items-center flex-grow-1">
        <div className="col-12 col-md-10 col-lg-10 position-relative text-center">
          <img
            src={heroImg}
            alt="hero section img"
            className="img-fluid rounded"
            style={{ maxHeight: "60vh", width: "100%", objectFit: "cover" }}
          />

          {/* Overlay Card */}
          <div
            className="card shadow text-white"
            style={{
              margin: "-80px 0 0 30px", // slightly reduced pull-up
              maxWidth: "450px",
              width: "90%",
              backgroundColor: theme==="dark"?"rgba(6, 6, 34, 0.927)":"#3f3e3eff",
            }}
          >
            <div className="card-body d-flex flex-column align-items-start gap-2 p-3">
              <Link to="/" className="btn btn-primary btn-sm mb-2">
                Technology
              </Link>
              <h5 className="card-title text-start">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                <i className="bi bi-person-circle"></i> John Doe | Aug 24, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* Advertisement Row */}
      <div
        className="row justify-content-center mt-3 mb-3"
        style={{ marginTop: "20px" }} // reduced space
      >
        <div className="col-11 col-md-8 col-lg-6">
          <div
            className="d-flex flex-column justify-content-center align-items-center text-center rounded"
            style={{
              backgroundColor: "#3f3e3e76",
              height: "100px",
              color: theme==="dark"?"#b5b5b5":"#3f3e3ebc",
            }}
          >
            <p className="mb-1">Advertisement</p>
            <h6 className="mb-1">You can Place ads</h6>
            <span>750x100</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
