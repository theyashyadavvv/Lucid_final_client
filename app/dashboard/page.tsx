'use client'

import { useAuth } from '@/lib/auth-context'
import { ProtectedRoute } from '@/components/protected-route'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { user, logout, isAdmin } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }

  // Redirect admin to admin panel
  if (isAdmin) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Admin Access Detected</h1>
          <p className="text-gray-400 mb-6">You have admin privileges. Redirecting to admin panel...</p>
          <Link href="/admin">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Go to Admin Panel
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-orange-500/20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-orange-500">Project Dashboard</h1>
              <p className="text-gray-400">Welcome back, {user?.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" className="border-orange-500/20 text-orange-500 hover:bg-orange-500 hover:text-white">
                  View Website
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-orange-500/20 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Dashboard */}
            <div className="lg:col-span-2 space-y-6">
              {/* Welcome Card */}
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Welcome to Your Dashboard
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Track your projects, collaborate with our team, and manage your creative journey.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Your personalized dashboard for managing projects and collaborating with Lucid Studio.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="bg-gray-900 border-orange-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Start New Project
                    </Button>
                  </Link>
                  <Link href="/work">
                    <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                      View Portfolio
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                      Our Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Account Info */}
              <Card className="bg-gray-900 border-orange-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Account Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{user?.email}</p>
                      <p className="text-gray-400 text-sm">Client Account</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
