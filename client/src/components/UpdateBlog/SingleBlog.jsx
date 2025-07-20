"use client"

import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"

const SingleBlog = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [relatedBlogs, setRelatedBlogs] = useState([])

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await axios.get(`http://localhost:5000/api/blogs/${slug}`)

                if (response.data.status === "published") {
                    setBlog(response.data)

                    // Fetch related blogs (optional)
                    try {
                        const relatedResponse = await axios.get(
                            `http://localhost:5000/api/blogs?category=${response.data.category}&limit=3`,
                        )
                        const related = relatedResponse.data
                            .filter((b) => b._id !== response.data._id && b.status === "published")
                            .slice(0, 3)
                        setRelatedBlogs(related)
                    } catch (relatedError) {
                        console.log("Could not fetch related blogs:", relatedError)
                    }
                } else {
                    setError("This blog post is not published or does not exist.")
                }
            } catch (err) {
                console.error("Error fetching blog:", err)
                if (err.response?.status === 404) {
                    setError("Blog post not found.")
                } else {
                    setError("Failed to load blog post. Please try again later.")
                }
            } finally {
                setLoading(false)
            }
        }

        if (slug) {
            fetchBlog()
        }
    }, [slug])

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const calculateReadTime = (content) => {
        if (!content) return 0
        const wordsPerMinute = 200
        const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).length
        return Math.ceil(wordCount / wordsPerMinute)
    }

    const handleShare = async (platform) => {
        const url = window.location.href
        const title = blog?.title || "Check out this blog post"

        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            instagram: `https://www.instagram.com/create/story/?url=${encodeURIComponent(url)}`,
            copy: url,
        }

        if (platform === "copy") {
            try {
                await navigator.clipboard.writeText(url)
                alert("Link copied to clipboard!")
            } catch (err) {
                console.error("Failed to copy link:", err)
            }
        } else {
            window.open(shareUrls[platform], "_blank", "width=600,height=400")
        }
    }

    // Loading State
    if (loading) {
        return (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 py-10">
                <div className="animate-pulse">
                    {/* Back button skeleton */}
                    <div className="h-10 w-24 bg-gray-200 rounded mb-8"></div>

                    {/* Title skeleton */}
                    <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>

                    {/* Meta info skeleton */}
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>

                    {/* Image skeleton */}
                    <div className="h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg mb-8"></div>

                    {/* Content skeleton */}
                    <div className="space-y-4">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="h-4 bg-gray-200 rounded w-full"></div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Error State
    if (error) {
        return (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 py-10">
                <div className="text-center py-20">
                    <div className="mb-4">
                        <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Blog Not Found</h2>
                    <p className="text-gray-600 mb-8">{error}</p>
                    <div className="space-x-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            Go Back
                        </button>
                        <Link
                            to="/blogs"
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block"
                        >
                            View All Blogs
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    // Main Content
    return (
        <div className="min-h-screen bg-gray-50">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-20 py-10">
                {/* Back Navigation */}
                <nav className="mb-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>
                </nav>

                {/* Article Header */}
                <header className="mb-8 lg:mb-12">
                    {/* Category Badge */}
                    {blog.category && (
                        <div className="mb-4">
                            <span className="inline-block bg-blue-100 text-blue-800 text-sm  font-semibold px-3 py-1 rounded-full">
                                {blog.category}
                            </span>
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                        {blog.author && (
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">{blog.author}</span>
                            </div>
                        )}

                        <div className="flex items-center text-xs lg:text-lg">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time>
                        </div>

                        <div className="flex items-center text-xs lg:text-lg">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>{calculateReadTime(blog.content)} min read</span>
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="flex items-center space-x-3 ">
                        <span className="text-sm font-medium text-gray-700">Share:</span>
                         <button
                            onClick={() => handleShare("instagram")}
                            className="p-2 text-gray-600 hover:text-blue-700 transition-colors"
                            aria-label="Share on Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                            </svg>
                        </button>
                        
                        <button
                            onClick={() => handleShare("facebook")}
                            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label="Share on Facebook"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                        <button
                            onClick={() => handleShare("linkedin")}
                            className="p-2 text-gray-600 hover:text-blue-700 transition-colors"
                            aria-label="Share on LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </button>
                       
                        <button
                            onClick={() => handleShare("twitter")}
                            className="p-2 text-gray-600 hover:text-blue-400 transition-colors"
                            aria-label="Share on Twitter"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </button>

                        <button
                            onClick={() => handleShare("copy")}
                            className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                            aria-label="Copy link"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* Featured Image */}
                {blog.image && (
                    <div className="mb-8 lg:mb-12">
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={blog.image || "/placeholder.svg"}
                                alt={blog.title}
                                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                onError={(e) => {
                                    e.target.src = "/placeholder.svg?height=400&width=800&text=Blog+Image"
                                }}
                            />
                        </div>
                    </div>
                )}

                {/* Blog Description */}
                {blog.description && (
                    <div className="mb-8">
                        <p className="text-xl text-gray-700 leading-relaxed font-light italic border-l-4 border-blue-500 pl-6">
                            {blog.description}
                        </p>
                    </div>
                )}

                {/* Blog Content */}
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-12 mb-12">
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-lg prose-img:shadow-md"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Related Blogs */}
                {relatedBlogs.length > 0 && (
                    <section className="border-t border-gray-200 pt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedBlogs.map((relatedBlog) => (
                                <Link
                                    key={relatedBlog._id}
                                    to={`/blogs/${relatedBlog.slug}`}
                                    className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                                >
                                    {relatedBlog.image && (
                                        <img
                                            src={relatedBlog.image || "/placeholder.svg"}
                                            alt={relatedBlog.title}
                                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    )}
                                    <div className="p-4">
                                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {relatedBlog.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{relatedBlog.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Navigation */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                    <div className="flex justify-between items-center">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            All Blogs
                        </Link>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            Back to Top
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default SingleBlog
