"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        const response = await axios.get("http://localhost:5000/api/blogs")
        const published = response.data.filter((blog) => blog.status === "published")
        setBlogs(published)
      } catch (err) {
        console.error("Error fetching blogs:", err)
        setError("Failed to load blogs. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const truncateText = (text, maxLength) => {
    if (!text) return ""
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
  }

  if (loading) {
    return (
      <div className="container max-w-7xl mx-auto px-4 mt-24 py-10">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container max-w-7xl mx-auto px-4 mt-24 py-10">
        <div className="text-center py-12">
          <div className="text-red-500 text-lg mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 py-10">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Our Blogs</h1>
        <p className="text-gray-600 text-lg">Discover our latest articles and insights</p>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No blogs available at the moment.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.slug}`} key={blog._id} className="group block">
              <article className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100">
                  {blog.image ? (
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title || "Blog post"}
                      className="w-full h-48 sm:h-52 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=400&text=Blog+Image"
                      }}
                    />
                  ) : (
                    <div className="w-full h-48 sm:h-52 lg:h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-gray-400 text-sm font-medium">No Image</div>
                    </div>
                  )}

                  {/* Optional: Add a category badge */}
                  {blog.category && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Container - Flex grow to fill remaining space */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  {/* Title */}
                  <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {blog.title || "Untitled Post"}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-grow line-clamp-3">
                    {blog.description
                      ? truncateText(blog.description, 120)
                      : "No description available for this blog post."}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mt-auto pt-3 border-t border-gray-100">
                    {blog.publishedDate && (
                      <time dateTime={blog.publishedDate}>
                        {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    )}

                    {blog.readTime && (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {blog.readTime} min read
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default AllBlogs
