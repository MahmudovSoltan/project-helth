import React from "react";
import { GrPowerReset } from "react-icons/gr";

const BlogsideBar = ({ setCategory, category }) => {
  const resetFilter = () => {
    setCategory("");
  };
  return (
    <div>
      <div className="blog_categories_container">
        <h5>Categories</h5>
        <div>
          <div
            className={`blog_categories ${
              category === "Blog" ? "blog_active" : ""
            } cursor-pointer`}
            onClick={() => setCategory(category === "Blog" ? "" : "Blog")}
          >
            Blog
          </div>
          <div
            className={`blog_categories ${
              category === "Business" ? "blog_active" : ""
            } cursor-pointer`}
            onClick={() =>
              setCategory(category === "Business" ? "" : "Business")
            }
          >
            Business
          </div>
          <div
            className={`blog_categories ${
              category === "Design - Branding" ? "blog_active" : ""
            } cursor-pointer`}
            onClick={() =>
              setCategory(
                category === "Design - Branding" ? "" : "Design - Branding"
              )
            }
          >
            Design - Branding
          </div>
          <div
            className={`blog_categories ${
              category === "Podcast" ? "blog_active" : ""
            } cursor-pointer`}
            onClick={() => setCategory(category === "Podcast" ? "" : "Podcast")}
          >
            Podcast
          </div>
          <div
            className={`blog_categories ${
              category === "Video" ? "blog_active" : ""
            } cursor-pointer`}
            onClick={() => setCategory(category === "Video" ? "" : "Video")}
          >
            Video
          </div>
        </div>
      </div>
      <div onClick={resetFilter} className="!bg-transparent">
        <button className="reset_btn">
          <span>
            <GrPowerReset size={20} />
          </span>
          Reset
        </button>
      </div>
    </div>
  );
};

export default BlogsideBar;
