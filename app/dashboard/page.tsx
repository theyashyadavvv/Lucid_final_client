"use client"

import { useState, Suspense } from "react"
import dynamic from "next/dynamic"
import { StatusBar } from "@/components/status-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  Plus,
  Search,
  Settings,
  User,
  Home,
  FileText,
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  TrendingUp,
  Calendar,
} from "lucide-react"
import Link from "next/link"

const Navigation = dynamic(() => import("@/components/navigation").then(mod => mod.default), {
  ssr: false,
  loading: () => <div style={{ height: 56 }} />,
})

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  const recentContent = [
    {
      id: 1,
      title: "Getting Started with SmartHub",
      description: "A comprehensive guide to using all features of SmartHub effectively.",
      author: "John Doe",
      date: "2 hours ago",
      likes: 24,
      comments: 8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Best Practices for Content Creation",
      description: "Learn the top strategies for creating engaging content that resonates with your audience.",
      author: "Jane Smith",
      date: "5 hours ago",
      likes: 42,
      comments: 15,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Community Guidelines Update",
      description: "Important updates to our community guidelines and what they mean for you.",
      author: "SmartHub Team",
      date: "1 day ago",
      likes: 18,
      comments: 6,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const stats = [
    { label: "Total Posts", value: "24", change: "+12%", icon: <FileText className="w-4 h-4" /> },
    { label: "Followers", value: "1.2K", change: "+8%", icon: <User className="w-4 h-4" /> },
    { label: "Engagement", value: "94%", change: "+5%", icon: <Heart className="w-4 h-4" /> },
    { label: "Views", value: "8.5K", change: "+15%", icon: <TrendingUp className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <StatusBar />
      {/* Orange line below the bar */}
      <div style={{ height: 2, background: "var(--orange)" }} />
      <Suspense fallback={<div style={{ height: 56 }} />}>
        <Navigation />
      </Suspense>
      {/* <LucidLogo /> */}
      <div className="container mx-auto px-4 py-6 pt-32">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {[
                    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
                    { id: "content", label: "My Content", icon: <FileText className="w-4 h-4" /> },
                    { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
                    { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${activeTab === item.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "home" && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
                        <p className="opacity-90">Ready to create something amazing today?</p>
                      </div>
                      <div className="hidden md:block">
                        <Calendar className="w-12 h-12 opacity-50" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-sm text-green-600">{stat.change}</p>
                          </div>
                          <div className="text-gray-400">{stat.icon}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Content</CardTitle>
                    <CardDescription>Latest posts from your network</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentContent.map((post) => (
                      <div key={post.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start space-x-4">
                          <img
                            src={post.image || "/images/lucid-logo.png"}
                            alt={post.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{post.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{post.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>By {post.author}</span>
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                                  <Heart className="w-4 h-4" />
                                  <span className="text-sm">{post.likes}</span>
                                </button>
                                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                                  <MessageCircle className="w-4 h-4" />
                                  <span className="text-sm">{post.comments}</span>
                                </button>
                                <button className="text-gray-500 hover:text-gray-700">
                                  <Share2 className="w-4 h-4" />
                                </button>
                                <button className="text-gray-500 hover:text-gray-700">
                                  <MoreHorizontal className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "content" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Content</CardTitle>
                  <CardDescription>Manage all your created content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No content yet</h3>
                    <p className="text-gray-600 mb-4">Start creating your first piece of content</p>
                    <Button asChild>
                      <Link href="/content/create">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Content
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Manage your profile information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Management</h3>
                    <p className="text-gray-600 mb-4">Update your profile information and preferences</p>
                    <Button asChild>
                      <Link href="/profile">View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Configure your app preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">App Settings</h3>
                    <p className="text-gray-600 mb-4">Customize your SmartHub experience</p>
                    <Button asChild>
                      <Link href="/settings">Open Settings</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden">
        <div className="grid grid-cols-4 gap-1">
          {[
            { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
            { id: "content", label: "Content", icon: <FileText className="w-5 h-5" /> },
            { id: "profile", label: "Profile", icon: <User className="w-5 h-5" /> },
            { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-1 ${activeTab === item.id ? "text-blue-600" : "text-gray-600"
                }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
