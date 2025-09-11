import { createContext, useState, useEffect } from "react";
import { LatestPosts as initialPosts } from "../utils/BlogData";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const [blogs, setBlogs] = useState(initialPosts);
  console.log("Context:", blogs);
  const addBlog = (newBlog) => {
    setBlogs((prev) => [newBlog, ...prev]);
  };

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-dark text-white" : "bg-light text-dark";
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, blogs, addBlog, setBlogs }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
