import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import "../../assets/css/courses.css";
import CoursesFilterNav from "../../components/courses/CoursesFilterNav";
import CoursesCard from "../../components/homeComp/CoursesCard";
import { useSelector } from "react-redux";
import CoursesSideBar from "../../components/courses/CoursesSideBar";
import Pagination from "../../components/pagination/Pagination";
const Courses = () => {
  const { products } = useSelector((state) => state.products);
  const [sort, setSort] = useState(null);
  const [search, setSearch] = useState("");
  const perPage = 9;
  const [index, setIndex] = useState(1);
  const [category, setCategory] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [price, setPrice] = useState("");

  const searchFilterProduct = products
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
    (item) =>
      (!category || item.category === category) &&
      (!levelFilter || item.levels === levelFilter) &&
      (!price || item.priceCatagory == price)
  );
  const newpagination = filterProduct.slice(
    (index - 1) * perPage,
    index * perPage
  );
  const totalPge = Math.ceil(filterProduct.length / perPage);
  const buttons = [];
  for (let i = 0; i < totalPge; i++) {
    buttons.push(i);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="">
      <Banner title={"Courses"} />
      <CoursesFilterNav setSort={setSort} sort={sort} setSearch={setSearch} />
      <div className="flex">
        <div className="w-[80%]">
          <CoursesCard filterProduct={newpagination} />
          <Pagination setIndex={setIndex} index={index} totalPge={buttons} />
        </div>
        <div className="w-[22%]">
          <CoursesSideBar
            setCategory={setCategory}
            category={category}
            setLevelFilter={setLevelFilter}
            price={price}
            levelFilter={levelFilter}
            setPrice={setPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
