
import BlogCard from "./BlogCard";
import Img1 from "../../assets/Blogs/1.png";
import Img3 from "../../assets/Blogs/Bengaluru/vidanaSoudha.webp";
import Img2 from "../../assets/Blogs/Mysore/palace.jpg";


const BlogsData = [
  {
    id: 1,
    image: Img1,
    alt: "Travihara",
    title: "Tirupathi Package",
    author: "Rakshith",
    date: "April 22, 2025",
    to:"Tirupathi",
  },
  {
    id: 2,
    image: Img2,
    alt: "Travihara",
    title: "One day package in Mysore",
    author: "Rakshith",
    date: "April 22, 2022",
    to:"MysoreBlog",
  },
  {
    id: 3,
    image: Img3,
    alt: "Travihara",
    title: "One day package in Bengaluru",
    author: "Anonymous",
    date: "April 22, 2022",
    to:"Bengaluru",
  },
  // {
  //   id: 4,
  //   image: Img1,
  //   alt: "Travihara",
  //   title: "Top places to visit in Japan",
  //   author: "Someone",
  //   date: "April 22, 2022",
  //   to:"Tirupathi",
  // },
  
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
