import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { format } from "date-fns";

const BlogDetails = () => {
  const { id } = useParams();
  const { theme, blogs } = useContext(ThemeContext);
  const post = blogs[id];

  if (!post) {
    return (
      <div className="container py-5 text-center text-danger">
        <h3>Blog not found</h3>
      </div>
    );
  }

  return (
    <div
      className="container p-5 my-4 rounded shadow-sm"
      style={{
        maxWidth: "1000px",
        backgroundColor:
          theme === "dark" ? "rgba(6,6,34,0.927)" : "rgba(175, 175, 177, 0.13)",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      {/* Category Button */}
      <div className="mb-3">
        <button
          className="btn btn-sm text-white"
          style={{ backgroundColor: "rgba(19, 19, 38, 1)" }}
        >
          {post.category}
        </button>
      </div>

      {/* Title */}
      <h2 className="fw-bold mb-3">{post.title}</h2>

      {/* Author + Date */}
      <div
        className={`d-flex align-items-center ${
          theme === "dark" ? "text-light" : "text-muted"
        } mb-4`}
      >
        <img
          src={
            post.image instanceof File
              ? URL.createObjectURL(post.image)
              : post.image
          }
          alt="porfile img"
          width={15}
          className="rounded-circle me-2 "
        />
        <span>{post.name}</span>
        <span className="mx-2">|</span>
        <span> {format(new Date(post.date), "MMM dd, yyyy")}</span>
      </div>

      {/* Blog Image */}
      <div className="mb-4">
        <img
          src={
            post.image instanceof File
              ? URL.createObjectURL(post.image)
              : post.image
          }
          alt="blog"
          className="img-fluid rounded shadow-sm"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Blog Content */}
      <div className="blog-content lh-lg">
        <p>{post.description}</p>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <h4 className="fw-bold mt-4">Research Your Destination</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p>
          Nulla mollitia assumenda non doloremque minus voluptatum officiis
          deserunt reprehenderit magni tempore maiores inventore voluptate,
          animi architecto accusamus saepe provident porro ipsa facere aliquam
          quidem quod tempora consequatur!
        </p>

        <h4 className="fw-bold mt-4">Plan Your Itinerary</h4>
        <p>
          Atque totam dignissimos ad soluta nobis nihil saepe temporibus
          accusantium molestiae pariatur, nulla minima! Reprehenderit voluptas
          doloremque exercitationem quam aut eos aspernatur.
        </p>
        <p>
          Sequi itaque dicta incidunt explicabo eius, asperiores eum excepturi
          molestias vel illum dolorem, illo autem? Commodi molestiae dicta
          tenetur, cumque necessitatibus vel reiciendis dolor explicabo alias
          earum veniam, ab voluptatem.
        </p>
      </div>

      {/* Quote Section */}
      <div
        className="my-5 p-4 rounded text-center fw-semibold"
        style={{ backgroundColor: "#3f3e3e76", fontStyle: "italic" }}
      >
        “ Traveling can expose you to new environments and potential health
        risks, so it's crucial to take precautions to stay safe and healthy. ”
      </div>

      {/* Conclusion */}
      <div className="conclusion">
        <h4 className="fw-bold">Conclusion:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere,
          enim temporibus a dignissimos eos exercitationem ex iusto provident
          voluptatibus aliquam eveniet, voluptatem at porro. Error blanditiis
          iste voluptates et.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
