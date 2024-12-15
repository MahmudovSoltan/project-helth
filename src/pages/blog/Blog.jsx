import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import CoursesFilterNav from "../../components/courses/CoursesFilterNav";
import BlogsideBar from "../../components/blog/BlogsideBar";
import Blogcards from "../../components/blog/Blogcards";
import Pagination from "../../components/pagination/Pagination";
import { useSelector } from "react-redux";
import "../../assets/css/blog.css";
import Blogsearch from "../../components/blog/Blogsearch";
const Blog = () => {
  const { blogs } = useSelector((state) => state.blog);
  const [index, setIndex] = useState(1);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(null);
  const searchFilterProduct = blogs
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "a-z") {
        return a.title.localeCompare(b.title);
      } else if (sort === "z-a") {
        return b.title.localeCompare(a.title);
      } else if (sort === "high-to-low") {
        return b.price - a.price;
      } else if (sort === "low-to-high") {
        return a.price - b.price;
      }
      return 0;
    });
  const filterProduct = searchFilterProduct.filter(
    (item) => !category || item.categories === category
   
  );
  console.log(filterProduct.length);
  
  const perPage = 9;
  const newpagination = filterProduct.slice(
    (index - 1) * perPage,
    index * perPage
  );

  const totalPge = Math.ceil(filterProduct.length / perPage);
  console.log(totalPge);
  
  const buttons = [];
  for (let i = 0; i < totalPge; i++) {
    buttons.push(i);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <Banner title={"Blog"} />
     <Blogsearch  setSort={setSort} sort={sort} setSearch={setSearch}/>
      <div className="flex container max-[993px]:flex-col-reverse">
        <div className="w-[80%]  max-[993px]:w-full ">
          <Blogcards blogs={newpagination} />
          <Pagination setIndex={setIndex} index={index} totalPge={buttons} />
        </div>
        <div className="w-[20%]  max-[993px]:w-full">
          <BlogsideBar setCategory={setCategory} category={category} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
