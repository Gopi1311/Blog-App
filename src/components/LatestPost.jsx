import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { format } from "date-fns";

const LatestPost = ({ id }) => {
  const { theme, blogs } = useContext(ThemeContext);

  return (
    <div
      className="latest-post py-5"
      id={id}
      style={{
        backgroundColor:
          theme === "dark" ? "rgba(6,6,34,0.927)" : "rgba(245,245,245,1)",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <div className="container">
        {/* Header section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Latest Posts</h2>
          <Link to="/viewAllPosts/all" className="btn btn-outline-primary">
            View More
          </Link>
        </div>

        {/* Cards section */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {blogs.map(
            (post, index) =>
              index <= 7 && (
                <div className="col" key={index}>
                  <Link
                    to={`/blogDetail/${index}`}
                    className="text-decoration-none"
                  >
                    <div
                      className="card h-100 shadow-lg border-0 hover-card "
                      style={{
                        backgroundColor:
                          theme === "dark" ? "rgba(0,0,0,0.93)" : "white",
                        color: theme === "dark" ? "white" : "black",
                        // border: "4px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <img
                        src={
                          post.image instanceof File
                            ? URL.createObjectURL(post.image)
                            : post.image
                        }
                        className="card-img-top rounded-top"
                        alt={post.title}
                        loading="lazy"
                        height={200}
                        style={{ objectFit: "cover" }}
                      />

                      <div className="card-body">
                        <button
                          className="btn btn-sm mb-2 text-white"
                          style={{
                            backgroundColor:
                              theme === "dark"
                                ? "rgba(19, 19, 38, 1)"
                                : "#3f3e3e9d",
                          }}
                        >
                          {post.category}
                        </button>

                        <h6 className="card-title ">{post.title}</h6>
                        <p
                          className={`card-text ${
                            theme === "dark" ? "text-light" : "text-muted"
                          } small`}
                        >
                          {post.description.slice(0, 70)}...
                        </p>
                        <p className="card-text  opacity-75 small mb-0">
                          <img
                            src={
                              post.image instanceof File
                                ? URL.createObjectURL(post.image)
                                : post.image
                            }
                            alt="profile img"
                            className="rounded-circle me-2"
                            width={20}
                            height={20}
                            style={{ objectFit: "cover" }}
                          />
                          {post.name} |{" "}
                          {format(new Date(post.date), "MMM dd, yyyy")}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
          )}
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }
      `}</style>
    </div>
  );
};

export default LatestPost;
