import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title, description, author }) => {
  return (
    <>
      <Link
        to={`/blogs/${title}`}
        onClick={() => {
          window.scrollTo(0, 0);
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        state={{ image, date, title, description, author }}
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
            <p className="line-clamp-2">{description}</p>
          </div>
          </div>
        </div>
      </Link>
    </>
  );
};


export default BlogCard;




// import React from "react";
// import { Link } from "react-router-dom";
// import { Star } from "lucide-react"; // optional: icon lib like lucide or use emoji

// const BlogCard = ({ image, date, title, description, author, price = "48.25", rating = "4.96", reviews = "672", label = "Top Rated" }) => {
//   return (
//     <Link
//       to={`/blogs/${title}`}
//       onClick={() =>
//         window.scroll({
//           top: 0,
//           left: 0,
//           behavior: "smooth",
//         })
//       }
//       state={{ image, date, title, description, author }}
//     >
//       <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm">
//         {/* Image and label */}
//         <div className="relative">
//           <img
//             src={image}
//             alt={title}
//             className="h-[200px] w-full object-cover"
//           />
//           {/* Label badge */}
//           <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
//             {label}
//           </div>
//           {/* Rating */}
//           <div className="absolute bottom-2 right-2 bg-white text-gray-800 text-sm px-2 py-1 rounded-full flex items-center gap-1 shadow">
//             <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//             {rating} <span className="text-xs text-gray-500">({reviews} reviews)</span>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-4 space-y-2">
//           <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
//           <p className="text-sm text-gray-500">
//             3 days 3 nights • 4–6 guest
//           </p>
//           <div className="flex items-center justify-between mt-2">
//             <span className="text-gray-900 font-semibold text-base">
//               ${price} <span className="text-sm text-gray-500">/ person</span>
//             </span>
//             <button className="px-4 py-1 text-sm font-semibold rounded-full bg-primary text-white hover:bg-secondary transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default BlogCard;
