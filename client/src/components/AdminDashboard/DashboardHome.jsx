"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../Ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../Ui/charts"
import { Progress } from "../Ui/progress"
import { Badge } from "../Ui/badge"
import { Skeleton } from "../Ui/skeleton"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"
import { useEffect, useState } from "react"
import { FileText, MessageSquare, TrendingUp, CheckCircle, Clock, BarChart3, PieChartIcon } from "lucide-react"

const DashboardHome = () => {
  const [blogStats, setBlogStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
  })

  const [testimonialStats, setTestimonialStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:5000/api/dashboard/summary")
        if (!response.ok) throw new Error("Failed to fetch data")
        const data = await response.json()
        setBlogStats(data.blogs || {})
        setTestimonialStats(data.testimonials || {})
      } catch (err) {
        setError(err.message)
        console.error("Failed to fetch dashboard stats:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const chartConfig = {
    published: {
      label: "Published",
      color: "hsl(142, 76%, 36%)",
    },
    draft: {
      label: "Draft",
      color: "hsl(346, 87%, 43%)",
    },
    approved: {
      label: "Approved",
      color: "hsl(142, 76%, 36%)",
    },
    pending: {
      label: "Pending",
      color: "hsl(48, 96%, 53%)",
    },
  }

  // Create chart data with fallback values to ensure charts render
  const blogData = [
    {
      name: "Published",
      value: blogStats.published || 0,
      fill: chartConfig.published.color,
    },
    {
      name: "Draft",
      value: blogStats.draft || 0,
      fill: chartConfig.draft.color,
    },
  ]

  const testimonialData = [
    {
      name: "Approved",
      value: testimonialStats.approved || 0,
      fill: chartConfig.approved.color,
    },
    {
      name: "Pending",
      value: testimonialStats.pending || 0,
      fill: chartConfig.pending.color,
    },
  ]

  const combinedData = [
    {
      category: "Blogs",
      published: blogStats.published || 0,
      draft: blogStats.draft || 0,
    },
    {
      category: "Testimonials",
      published: testimonialStats.approved || 0,
      draft: testimonialStats.pending || 0,
    },
  ]

  // Check if we have any data to display
  const hasBlogData = blogStats.total > 0
  const hasTestimonialData = testimonialStats.total > 0
  const hasAnyData = hasBlogData || hasTestimonialData

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="pb-2">
                  <Skeleton className="h-4 w-24" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const publishedPercentage = blogStats.total > 0 ? (blogStats.published / blogStats.total) * 100 : 0
  const approvedPercentage = testimonialStats.total > 0 ? (testimonialStats.approved / testimonialStats.total) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">Monitor your content performance at a glance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Blogs */}
          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-blue-100">Total Blogs</CardTitle>
                <FileText className="h-5 w-5 text-blue-200" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{blogStats.total}</div>
              <div className="flex items-center mt-2">
                <Progress value={publishedPercentage} className="flex-1 h-2" />
                <span className="ml-2 text-xs text-blue-200">{publishedPercentage.toFixed(0)}% published</span>
              </div>
            </CardContent>
          </Card>

          {/* Published Blogs */}
          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-green-100">Published</CardTitle>
                <CheckCircle className="h-5 w-5 text-green-200" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{blogStats.published}</div>
              <Badge variant="secondary" className="mt-2 bg-white/20 text-green-100 border-0">
                <TrendingUp className="h-3 w-3 mr-1" />
                Live
              </Badge>
            </CardContent>
          </Card>

          {/* Total Testimonials */}
          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-purple-100">Total Testimonials</CardTitle>
                <MessageSquare className="h-5 w-5 text-purple-200" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{testimonialStats.total}</div>
              <div className="flex items-center mt-2">
                <Progress value={approvedPercentage} className="flex-1 h-2" />
                <span className="ml-2 text-xs text-purple-200">{approvedPercentage.toFixed(0)}% approved</span>
              </div>
            </CardContent>
          </Card>

          {/* Pending Reviews */}
          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-orange-500 to-amber-600 text-white transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-orange-100">Pending Review</CardTitle>
                <Clock className="h-5 w-5 text-orange-200" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{testimonialStats.pending + blogStats.draft}</div>
              <Badge variant="secondary" className="mt-2 bg-white/20 text-orange-100 border-0">
                Needs attention
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Blog Status Chart */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-xl font-semibold text-gray-800">Blog Distribution</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {hasBlogData ? (
                <>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={blogData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {blogData.map((entry, index) => (
                            <Cell
                              key={`blog-cell-${index}`}
                              fill={entry.fill}
                              className="hover:opacity-80 transition-opacity cursor-pointer"
                            />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: chartConfig.published.color }}
                      ></div>
                      <span className="text-sm text-gray-600">Published ({blogStats.published})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartConfig.draft.color }}></div>
                      <span className="text-sm text-gray-600">Draft ({blogStats.draft})</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No blog data available</p>
                    <p className="text-sm">Create your first blog post to see the distribution</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Testimonial Status Chart */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-xl font-semibold text-gray-800">Testimonial Status</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {hasTestimonialData ? (
                <>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={testimonialData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {testimonialData.map((entry, index) => (
                            <Cell
                              key={`testimonial-cell-${index}`}
                              fill={entry.fill}
                              className="hover:opacity-80 transition-opacity cursor-pointer"
                            />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: chartConfig.approved.color }}
                      ></div>
                      <span className="text-sm text-gray-600">Approved ({testimonialStats.approved})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: chartConfig.pending.color }}
                      ></div>
                      <span className="text-sm text-gray-600">Pending ({testimonialStats.pending})</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No testimonial data available</p>
                    <p className="text-sm">Collect your first testimonial to see the status</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Comparison Chart */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-indigo-600" />
              <CardTitle className="text-xl font-semibold text-gray-800">Content Comparison</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            {hasAnyData ? (
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={combinedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="published" fill={chartConfig.published.color} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="draft" fill={chartConfig.pending.color} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No content data available</p>
                  <p className="text-sm">Start creating blogs and collecting testimonials to see the comparison</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardHome
