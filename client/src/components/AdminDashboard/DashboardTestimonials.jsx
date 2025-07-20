import { useState } from "react"
import { Plus, Pencil, Trash2, RefreshCw, X } from 'lucide-react'
import { useEffect } from "react";
import axios from "axios";


export default function DashboardTestimonials() {
 const [testimonials, setTestimonials] = useState([]);

 useEffect(() => {
  fetchTestimonials();
}, []);

const fetchTestimonials = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/testimonials");
    setTestimonials(res.data);
  } catch (err) {
    console.error("Failed to fetch testimonials:", err);
  }
};


  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    description: "",
    image: "",
    isActive: true
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const toggleTestimonialStatus = async (id) => {
  const testimonial = testimonials.find((t) => t._id === id);
  if (!testimonial) return;

  try {
    const res = await axios.put(
      `http://localhost:5000/api/testimonials/${id}`,
      { ...testimonial, isActive: !testimonial.isActive }
    );

    setTestimonials((prev) =>
      prev.map((t) => (t._id === id ? res.data : t))
    );
  } catch (error) {
    console.error("Failed to toggle status:", error);
  }
};


  const openCreateModal = () => {
    setFormData({ name: "", place: "", description: "", image: "", isActive: true })
    setIsEditMode(false)
    setIsModalOpen(true)
  }

  const openEditModal = (testimonial) => {
    setFormData({
      name: testimonial.name,
      place: testimonial.place,
      description: testimonial.description,
      image: testimonial.image,
      isActive: testimonial.isActive
    })
    setCurrentTestimonial(testimonial)
    setIsEditMode(true)
    setIsModalOpen(true)
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (isEditMode) {
      const res = await axios.put(
        `http://localhost:5000/api/testimonials/${currentTestimonial._id}`,
        formData
      );
      setTestimonials((prev) =>
        prev.map((t) =>
          t._id === currentTestimonial._id ? res.data : t
        )
      );
    } else {
      const res = await axios.post(
        "http://localhost:5000/api/testimonials",
        formData
      );
      setTestimonials((prev) => [res.data, ...prev]);
    }

    setIsModalOpen(false);
    setCurrentTestimonial(null);
  } catch (error) {
    console.error("Failed to submit testimonial:", error);
  }
};


  const handleDelete = (id) => {
    setDeleteId(id)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = async () => {
  try {
    await axios.delete(`http://localhost:5000/api/testimonials/${deleteId}`);
    setTestimonials((prev) => prev.filter((t) => t._id !== deleteId));
    setShowDeleteConfirm(false);
    setDeleteId(null);
  } catch (error) {
    console.error("Failed to delete testimonial:", error);
  }
};


  const handleRefresh = () => {
    // Simulate refresh - in real app this would refetch data
    console.log("Refreshing testimonials...")
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span>Dashboard</span>
              <span className="mx-2">/</span>
              <span>Testimonials</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button
              onClick={openCreateModal}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Place
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {testimonials.map((testimonial) => (
                <tr key={testimonial._id} className="hover:bg-gray-50">

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{testimonial.place}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-md">
                      {testimonial.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => toggleTestimonialStatus(testimonial._id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                        testimonial.isActive ? 'bg-purple-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          testimonial.isActive ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <div className={`text-xs mt-1 ${testimonial.isActive ? 'text-green-600' : 'text-gray-500'}`}>
                      {testimonial.isActive ? 'Active' : 'Inactive'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEditModal(testimonial)}
                        className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial._id)}
                        className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {isEditMode ? "Edit Testimonial" : "Create New Testimonial"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter customer name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Place
                </label>
                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter location (e.g., New York, USA)"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Enter testimonial description"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter image URL (optional)"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isActive"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="isActive" className="ml-2 block text-sm text-gray-700">
                  Display on website
                </label>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {isEditMode ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Delete Testimonial
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this testimonial? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}