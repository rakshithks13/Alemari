
import BlogCard from "./BlogCard";
import Img1 from "../../assets/Blogs/1.png";
import Img2 from "../../assets/Blogs/Shirdi/shirdi.jpeg";
import Img3 from "../../assets/Blogs/Mysore/palace.jpg";
import Img4 from "../../assets/Blogs/Bengaluru/vidanaSoudha.webp";





const BlogsData = [
  {
    id: 1,
    image: Img1,
    alt: "Travihara",
    title: "Tirupathi Package",
    author: "Rakshith",
    date: "Jan 22, 2025",
    to:"Tirupathi",
  },
   {
    id: 2,
    image: Img2,
    alt: "Travihara",
    title: "Shirdi Package",
    author: "Anonymous",
    date: "July 10, 2025",
    to:"Shirdi",
  },
  {
    id: 3,
    image: Img3,
    alt: "Travihara",
    title: "One day package in Mysore",
    author: "Rakshith",
    date: "Feb 18, 2025",
    to:"MysoreBlog",
  },
  {
    id: 4,
    image: Img4,
    alt: "Travihara",
    title: "One day package in Bengaluru",
    author: "Anonymous",
    date: "April 04, 2025",
    to:"Bengaluru",
  },

  
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Itinerary's
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id}  {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
