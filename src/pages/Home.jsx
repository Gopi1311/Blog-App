import { useEffect } from "react";
import Hero from "../components/Hero";
import LastestPost from "../components/LatestPost";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash === "#latest-post") {
      const element = document.getElementById("latest-post");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div>
      <Hero />
      <LastestPost id="latest-post" />
    </div>
  );
};

export default Home;
