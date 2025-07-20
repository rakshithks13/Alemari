"use client";

import { useState, useEffect } from "react";
import {
    PlusIcon,
    TrashIcon,
    PencilIcon,
    CalendarIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/outline";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"


const DashboardBlogs = () => {
    const [posts, setPosts] = useState([]);
    const [activeTab, setActiveTab] = useState("all");
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/api/blogs")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data); // ✅ not setBlogs
            })
            .catch((err) => console.error(err));
    }, []);

    const filteredPosts = posts.filter((post) => {
        if (activeTab === "all") return true;
        return post.status === activeTab;
    });

    const handleCreatePost = () => {
        setEditingPost(null);
        setShowCreateModal(true);
    };

    const handleEditPost = (post) => {
        setEditingPost(post);
        setShowCreateModal(true);
    };

    const handleDeletePost = async (postSlug) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            setLoading(true);
            try {
                await fetch(`http://localhost:5000/api/blogs/${postSlug}`, {
                    method: "DELETE",
                });
                setPosts(posts.filter((post) => post.slug !== postSlug));
            } catch (error) {
                console.error("Error deleting post:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    const getStatusCount = (status) => {
        if (status === "all") return posts.length;
        return posts.filter((post) => post.status === status).length;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
                        <p className="text-gray-600 mt-1">Manage your blog content</p>
                    </div>
                    <button
                        onClick={handleCreatePost}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <PlusIcon className="w-5 h-5" />
                        Create Post
                    </button>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div className="flex border-b border-gray-200">
                        {[
                            { key: "all", label: "All" },
                            { key: "published", label: "Published" },
                            { key: "draft", label: "Draft" },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.key
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {tab.label}
                                <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                    {getStatusCount(tab.key)}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Posts List */}
                    <div className="divide-y divide-gray-200">
                        {filteredPosts.length === 0 ? (
                            <div className="p-8 text-center">
                                <DocumentTextIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    No posts found
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    Get started by creating your first blog post.
                                </p>
                                <button
                                    onClick={handleCreatePost}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Create Post
                                </button>
                            </div>
                        ) : (
                            filteredPosts.map((post) => (
                                <div
                                    key={post._id}
                                    className="p-6 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Post Image */}
                                        <div className="flex-shrink-0">
                                            <img
                                                src={post.image || "/placeholder.svg"}
                                                alt={post.title}
                                                className="w-20 h-20 rounded-lg object-cover bg-gray-200"
                                            />
                                        </div>

                                        {/* Post Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                                        {post.title}
                                                    </h3>
                                                    <div className="text-sm text-gray-600 break-words line-clamp-2 max-w-md">
                                                        {post.description || "No description provided."}
                                                    </div>


                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <div className="flex items-center gap-1">
                                                            <CalendarIcon className="w-4 h-4" />
                                                            Updated {formatDate(post.updatedAt)}
                                                        </div>
                                                        <span
                                                            className={`px-2 py-1 rounded-full text-xs font-medium ${post.status === "published"
                                                                ? "bg-green-100 text-green-800"
                                                                : "bg-yellow-100 text-yellow-800"
                                                                }`}
                                                        >
                                                            {post.status
                                                                ? post.status.charAt(0).toUpperCase() +
                                                                post.status.slice(1)
                                                                : "Unknown"}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                <div className="flex items-center gap-2 ml-4">
                                                    <button
                                                        onClick={() => handleEditPost(post)}
                                                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                        title="Edit post"
                                                    >
                                                        <PencilIcon className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeletePost(post.slug)}
                                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete post"
                                                        disabled={loading}
                                                    >
                                                        <TrashIcon className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Create/Edit Modal */}
            {showCreateModal && (
                <BlogPostModal
                    post={editingPost}
                    onClose={() => setShowCreateModal(false)}
                    onSave={(savedPost) => {
                        if (editingPost) {
                            setPosts((prev) =>
                                prev.map((p) => (p._id === savedPost._id ? savedPost : p))
                            );
                        } else {
                            setPosts((prev) => [savedPost, ...prev]);
                        }
                        setShowCreateModal(false);
                    }}
                />
            )}
        </div>
    );
};

const BlogPostModal = ({ post, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        title: post?.title || "",
        description: post?.description || "",
        content: post?.content || "",
        image: post?.image || "",
        metaTitle: post?.metaTitle || "",
        metaDescription: post?.metaDescription || "",
        keywords: post?.keywords?.join(", ") || "",
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (status) => {
        if (!formData.title.trim() || !formData.description.trim()) {
            alert("Please fill in all required fields");
            return;
        }

        setLoading(true);
        try {
            const postData = {
                ...formData,
                status,
                updatedAt: new Date().toISOString(),
                keywords: formData.keywords.split(",").map((k) => k.trim()),
            };

            // API call would go here
            const res = await fetch(
                post?.slug
                    ? `http://localhost:5000/api/blogs/${post.slug}`
                    : "http://localhost:5000/api/blogs",
                {
                    method: post?._id ? "PUT" : "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(postData),
                }
            );

            const newBlog = await res.json();
            onSave(newBlog);
        } catch (error) {
            console.error("Error saving post:", error);
            alert("Error saving post. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {post ? "Edit Post" : "Add New Post"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                        ×
                    </button>
                </div>

                {/* Form */}
                <div className="p-6 space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-vertical"
                            required
                        />
                    </div>
                    {/* Blog Content */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Blog Content
                        </label>
                        <ReactQuill
                            theme="snow"
                            value={formData.content}
                            onChange={(value) =>
                                setFormData((prev) => ({ ...prev, content: value }))
                            }
                            className="bg-white rounded-lg"
                        />
                    </div>

                    {/* Cover Image Link */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cover Image URL
                        </label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            placeholder="https://example.com/image.jpg"
                        />
                        {formData.image && (
                            <img
                                src={formData.image}
                                alt="Preview"
                                className="mt-4 max-h-48 rounded-lg object-cover border"
                            />
                        )}
                    </div>

                    {/* Meta Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Meta Title
                        </label>
                        <input
                            type="text"
                            name="metaTitle"
                            value={formData.metaTitle}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Meta Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Meta Description
                        </label>
                        <textarea
                            name="metaDescription"
                            value={formData.metaDescription}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-vertical"
                        />
                    </div>

                    {/* Keywords */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Keywords (comma-separated)
                        </label>
                        <input
                            type="text"
                            name="keywords"
                            value={formData.keywords}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Publication Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <div className="flex gap-3">
                        <button
                            onClick={() => handleSubmit("draft")}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                            disabled={loading}
                        >
                            Save as Draft
                        </button>
                        <button
                            onClick={() => handleSubmit("published")}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Publishing..." : "Publish"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBlogs;
