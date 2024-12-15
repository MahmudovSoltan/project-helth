import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import "../../assets/css/courses.css";
import "../../assets/css/coursesRes.css";
import CoursesFilterNav from "../../components/courses/CoursesFilterNav";
import { useSelector } from "react-redux";
import CoursesSideBar from "../../components/courses/CoursesSideBar";
import Pagination from "../../components/pagination/Pagination";
import CoursesMainCard from "../../components/courses/CoursesMainCard";
import { CiMenuFries } from "react-icons/ci";
import { RiMenu5Fill } from "react-icons/ri";
import CoursesSideBarRes from "../../components/courses/CoursesSideBarRes";
const Courses = () => {
  const { products } = useSelector((state) => state.products);
  const [sort, setSort] = useState(null);
  const [sideBar,setSideBar]= useState(false)
  const [search, setSearch] = useState("");
  const perPage = 8;
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
  const handleSide = ()=>{
    setSideBar(true)
    console.log(true);
    
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="">
      <Banner title={"Courses"} />
      <div className="container">
        <button onClick={handleSide} className="flex gap-2 items-center py-[10px] px-[20px] mt-[50px] bg-[--primary] text-white rounded-2xl font-semibold cursor-pointer hidden max-[993px]:flex" >Filter <span><RiMenu5Fill /></span></button>
      </div>
      <CoursesFilterNav  setSort={setSort} sort={sort} setSearch={setSearch} />

      <div className="flex container gap-[30px]">
        <div className="w-[80%] max-[993px]:w-full">
          <CoursesMainCard filterProduct={newpagination} />
          <Pagination setIndex={setIndex} index={index} totalPge={buttons} />
        </div>
        <div className="w-[20%] max-[993px]:hidden">
          <CoursesSideBar
            setCategory={setCategory}
            category={category}
            setLevelFilter={setLevelFilter}
            price={price}
            levelFilter={levelFilter}
            setPrice={setPrice}
          />
        </div>
        <div className={`course_side_responsive${sideBar?"!w-auto":""}`}>
          <div onClick={()=>setSideBar(false)} className={`ovrlay ${sideBar?"!block":""}`}></div>
          <div className={`h-[100vh] overflow-auto side_bar ${sideBar?'coourse_sidebar_active':""}`} >
          <CoursesSideBarRes   setCategory={setCategory}
            category={category}
            setLevelFilter={setLevelFilter}
            price={price}
            levelFilter={levelFilter}
            setPrice={setPrice}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
