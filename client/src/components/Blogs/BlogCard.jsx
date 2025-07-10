
import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title, author, to }) => {
  return (
    <>
      <Link
        to={`/itinerary/${to}`}
        onClick={() => {
          window.scrollTo(0, 0);
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        state={{ image, date, title, author }}
      >
        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm">
          <div className="overflow-hidden">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:scale-110"
            />

          </div>

          <div className="p-4 space-y-2">
            <div className="flex justify-between pt-2 text-slate-600">
              <p>{date}</p>
              <p className="line-clamp-1">By {author}</p>
            </div>
            <div className="space-y-2 py-3">
              <h1 className="line-clamp-1 font-bold">{title}</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};


export default BlogCard;
