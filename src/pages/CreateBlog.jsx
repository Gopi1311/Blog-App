import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateBlog = () => {
  const { theme, addBlog } = useContext(ThemeContext);
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    name: "",
    date: new Date(),
    image: null,
    category: "Technology",
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setBlog((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (file) => {
    if (file) {
      setBlog((prev) => ({ ...prev, image: file }));
      setUploadStatus("Uploading...");
      setUploadProgress(0);

      let progress = 0;
      const interval = setInterval(() => {
        progress += 25;
        setUploadProgress(progress);

        if (progress >= 100) {
          clearInterval(interval);
          setUploadStatus("Completed ✅");
        }
      }, 300);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const fileClear = (e) => {
    e.preventDefault();
    setBlog((prev) => ({ ...prev, image: null }));
    setUploadProgress(0);
    setUploadStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    addBlog(blog);
    console.log("Create Blog");
    toast.success("🎉 Blog Created Successfully!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: theme === "dark" ? "dark" : "colored",
    });
    setTimeout(() => {
      console.log("📌 Blog Data:", blog);
      setIsSubmitting(false);

      navigate("/");
    }, 5000);
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div
        className="card shadow p-4"
        style={{
          maxWidth: "60%",
          backgroundColor:
            theme === "dark"
              ? "rgba(6,6,34,0.927)"
              : "rgba(175, 175, 177, 0.13)",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <h2 className="text-center">Create New Blog</h2>
        <p
          className={`text-center ${
            theme === "dark" ? "text-white" : "text-muted"
          }  `}
        >
          Share your thoughts and ideas with the world
        </p>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Blog Title */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Blog Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a captivating title"
                value={blog.title}
                onChange={(e) => handleChange("title", e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Category</label>
              <select
                className="form-select"
                value={blog.category}
                onChange={(e) => handleChange("category", e.target.value)}
              >
                <option>Technology</option>
                <option>Lifestyle</option>
                <option>Travel</option>
                <option>Food</option>
                <option>Health</option>
                <option>Business</option>
                <option>Sports</option>
                <option>Economy</option>
              </select>
            </div>

            {/* Author */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Author Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={blog.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>

            {/* Date Picker */}
            <div className="col-md-3 d-flex flex-column">
              <label className="form-label fw-bold">Publish Date</label>
              <DatePicker
                selected={blog.date}
                onChange={(date) => handleChange("date", date)}
                className="form-control"
                dateFormat="dd MMM yyyy"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-3">
            <label className="form-label fw-bold">Blog Content</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="Write your blog content here..."
              value={blog.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
            ></textarea>
            <small className="text-muted">
              {blog.description.length}/2000 characters
            </small>
          </div>

          {/* File Upload */}
          <div className="mt-3">
            <label className="form-label fw-bold">Featured Image</label>
            <div
              className="file-upload rounded p-4 text-center"
              style={{
                cursor: "pointer",
                border: "2px dashed ",
                borderColor: blog.image
                  ? "rgba(9, 241, 102, 1)"
                  : "rgba(255, 0, 0, 1)",
                backgroundColor: blog.image
                  ? " rgba(13, 158, 71, 0.21)"
                  : "rgba(223, 22, 22, 0.08)",
              }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <p>📂 Drag & drop your image here or click to browse</p>
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-muted"
                } small my-4`}
              >
                Supports JPG, PNG, GIF up to 5MB
              </p>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            {blog.image && (
              <div className="card mt-3 p-4 shadow-md">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{blog.image.name}</strong>{" "}
                    <small className="text-muted">
                      ({Math.round(blog.image.size / 1024)} KB)
                    </small>
                  </div>
                  <div>
                    <span>{uploadStatus}</span>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm rounded ms-3"
                      onClick={fileClear}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </div>
                <div className="progress mt-2" style={{ height: "6px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Submit */}
          <div className=" mt-4 col-4">
            <button
              type="submit"
              className="blog-btn btn btn-md text-white border-0 "
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Blog..." : "Create Blog"}
            </button>
          </div>
        </form>
      </div>

      <style>
        {`
          .blog-btn, .progress-bar {
            background: linear-gradient(90deg, #667eea, #764ba2);
          }
          .blog-btn:hover {
            background: linear-gradient(150deg, #3d5ad9ff, #731ccaff);
          }
        `}
      </style>
      <ToastContainer />
    </div>
  );
};

export default CreateBlog;
