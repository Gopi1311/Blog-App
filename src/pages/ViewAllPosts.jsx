import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { GrEmptyCircle } from "react-icons/gr";
import { format } from "date-fns";

const ViewAllPosts = () => {
  const { theme, blogs } = useContext(ThemeContext);
  const { category } = useParams();

  const blogContent =
    category && category !== "all"
      ? blogs.filter((b) => b.category === category)
      : blogs;

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: theme === "dark" ? "rgba(6,6,34,0.927)" : "#f5f5f5",
        color: theme === "dark" ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">
            {category === "all" ? "All Blog Posts" : `${category} Posts`}
          </h2>
          <Link to="/" className={`btn ${theme==='dark'?'btn-outline-light':'btn-outline-dark'} `}>
            ← Back to Home
          </Link>
        </div>

        {/* Blog Cards */}
        {blogContent && blogContent.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {blogContent.map((post, index) => (
              <div className="col" key={index}>
                <Link to={`/blogDetail/${index}`} className="text-decoration-none">
                  <div
                    className="card h-100 shadow-lg border-0 hover-card"
                    style={{
                      backgroundColor: theme === "dark" ? "rgba(0,0,0,0.93)" : "white",
                      color: theme === "dark" ? "white" : "black",
                    }}
                  >
                    <img
                      src={post.image}
                      className="card-img-top rounded-top"
                      alt={post.title}
                      height={220}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <span
                        className="badge mb-2"
                        style={{
                          backgroundColor:
                            theme === "dark" ? "rgba(19,19,38,1)" : "#3f3e3e9d",
                          color: "white",
                        }}
                      >
                        {post.category}
                      </span>
                      <h5 className="card-title">{post.title}</h5>
                      <p className={`card-text ${theme === "dark" ? "text-light" : "text-muted"} small`}>
                        {post.description.slice(0, 100)}...
                      </p>
                    </div>
                    <div className="card-footer border-0 bg-transparent d-flex align-items-center small">
                      <img
                        src={
                          post.image instanceof File ? URL.createObjectURL(post.image) : post.image
                        }
                        alt="author"
                        className="rounded-circle me-2"
                        width={24}
                        height={24}
                        style={{ objectFit: "cover" }}
                      />
                      {post.name} | {format(new Date(post.date), "MMM dd, yyyy")}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: "50vh", textAlign: "center" }}
          >
           <GrEmptyCircle size={100} />
            <h3 style={{ color: theme === "dark" ? "white" : "#6c757d" }}>
              No blogs available in this category: <b>{category}</b>
            </h3>
            <Link to="/createBlog" className=" mt-3">
               Let's Create Your Own Blog
            </Link>
          </div>
        )}
      </div>

      {/* CSS for hover effect */}
      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default ViewAllPosts;
