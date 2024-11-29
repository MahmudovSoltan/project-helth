import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [
    {
      title: "Content Marketing Certification Course",
      category: "Career Coaching",
      price: "Free",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/06/course-8.png",
      lessons: "7",
      students: "319",
      levels: "All levels",
      description:
        "Unlock your content marketing potential with HubSpot Academy’s Content Marketing Certification Course. Learn ",
    },
    {
      title: "Business Analytics Course Program(Data Scientist)",
      category: "Career Coaching",
      price: 80.0,
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/09/course-1.jpg",
      lessons: "7",
      students: "28",
      levels: "All levesls",
      description:"Share Mastering-da's Business Analytics Program Data Scientist Course. Propose smart, scientific business decisions"
    },
    {
      title: "Mini MBA Course – Lean Business",
      category: "Career Coaching",
      price: 30.0,
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/09/course-2.png",
      lessons: "8",
      students: "32",
      levels: "All levesls",
      description:"The program is designed with 7 Modules with 25 lessons (30 subjects), combined with 6 activities with the Training Board"
    },
    {
      title: "Professional Course Of Sales Skills And",
      category: "Coaching",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/09/course-5.jpg",
      price: "$36.00",
      lessons: "3",
      students: "26",
      levels: "All levesls",
      description:"Strong knowledge of sales skills, problem-solving skills, sales closing skills."
    },
    {
      title: "Method of online business from home with Authority Site",
      category: "Coaching",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/09/course-1.jpg",
      price: "$55.00",
      lessons: "5",
      students: "27",
      levels: "All levesls",
      description:"The online business method is based on many years of experience from the following methods: Product launch, Niche"
    },
    {
      title: "Building a business on the Internet",
      category: "Coaching",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/06/course-7.jpg",
      price: "Free",
      lessons: "4",
      students: "20",
      levels: "All levesls",
      description:"Suggest you how to choose and introduce reputable places where lecturers have purchased domain names."
    },
    {
      title: "Effective online business method for products",
      category: "Dieting",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/06/course-8.png",
      price: "$60.00",
      lessons: "5",
      students: "45",
      levels: "All levesls",
      description:"Are you planning to start your own business but still haven't found a way to advertise your products?"
    },
    {
      title:
        "Complete retail on Facebook, Zalo, Shopee to have thousands of orders",
      category: "Dieting",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/06/course-6.png",
      price: "Free",
      lessons: "6",
      students: "4",
      levels: "All levesls",
      description:"In today's digital age, the explosive era of online sales, online sellers range from housewives, nursing mothers to office"
    },
    {
      title: "Make money from selling on Smartphone",
      category: "Dieting",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/09/course-1.jpg",
      price: "$69.00",
      lessons: "5",
      students: "50",
      levels: "All levels",
      description:"With the popularization of smartphones by more than 40% of Vietnam's population, in big cities with more than 70% of"
    },
    {
      title:
        "Complete set of Marketing, the art of selling online from basic to actual sales, billions of",
      category: "Heathy",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/09/course-2.png",
      price: "$75.00",
      lessons: "3",
      students: "25",
      levels: "All levels",
      description:"In today's digital age, the explosive era of online sales, online sellers range from housewives, nursing mothers to office"
    },
    {
      title: "Learn Amazon Dropshiping from idea to practice.",
      category: "Heathy",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/09/course-5.jpg",
      price: "$94.00",
      lessons: "8",
      students: "15",
      levels: "All levels",
      description:"Make a business plan by yourself, implement the business methodically, in order to bring profit."
    },
    {
      title: "Implement your own online business",
      category: "Heathy",
      img: "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2022/09/course-5.jpg",
      price: "$99.00",
      lessons: "4",
      students: "25",
      levels: "All levels",
      description:"Learn Amazon Dropshiping from idea to practice"
    },
  ],
  priceSort: false,
  index: 1,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setIndex: (state) => {
      state.index += 1;
    },
    setindex2: (state) => {
      state.index -= 1;
    },
  },
});

export const { setIndex, setindex2 } = productSlice.actions;
export default productSlice.reducer;
