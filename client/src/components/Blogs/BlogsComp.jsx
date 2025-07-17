
import BlogCard from "./BlogCard";
import Img1 from "../../assets/Blogs/1.png";
import Img2 from "../../assets/Blogs/Shirdi/shirdiMain.jpeg";
import Img3 from "../../assets/Blogs/Mysore/palace.jpg";
import Img4 from "../../assets/Blogs/Bengaluru/vidanaSoudha.webp";
import Img5 from "../../assets/Blogs/Mantralayam/mantralayamm.jpeg";





const BlogsData = [
  {
    id: 1,
    image: Img1,
    alt: "Travihara Tirupathi Package",
    title: "Tirupathi Package",
    author: "Rakshith",
    date: "Jan 22, 2025",
    to:"Tirupathi",
  },
  {
    id: 2,
    image: Img5,
    alt: "Travihara Mantralayam Package",
    title: "Mantralayam Package",
    author: "Anonymous",
    date: "July 23, 2025",
    to:"Mantralayam",
  },
   {
    id: 3,
    image: Img2,
    alt: "Travihara Shirdi Package",
    title: "Shirdi Package",
    author: "Anonymous",
    date: "July 10, 2025",
    to:"Shirdi",
  },
  {
    id: 4,
    image: Img3,
    alt: "Travihara One day package in Mysore",
    title: "One day package in Mysore",
    author: "Rakshith",
    date: "Feb 18, 2025",
    to:"MysoreBlog",
  },
  {
    id: 5,
    image: Img4,
    alt: "Travihara One day package in Bengaluru",
    title: "One day package in Bengaluru",
    author: "Anonymous",
    date: "April 04, 2025",
    to:"Bengaluru",
  },
  {
    id: 6,
    image: Img4,
    alt: "Travihara Kasi – Prayagraj – Ayodhya – Gaya – Bodhgaya Pilgrimage Tour from Bangalore",
    title: "Kasi – Prayagraj – Ayodhya – Gaya – Bodhgaya Pilgrimage Tour from Bangalore",
    author: "Anonymous",
    date: "July 12, 2025",
    to:"Kashi",
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
