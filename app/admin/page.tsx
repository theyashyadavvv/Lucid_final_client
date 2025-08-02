'use client'

import { useState } from 'react'
import { ProtectedRoute } from '@/components/protected-route'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LogOut, Plus } from 'lucide-react'
import { BrandManager } from '@/components/brand-manager'
import { ProjectManager } from '@/components/project-manager'

export default function AdminPage() {
  const { logout, user } = useAuth()
  const [activeTab, setActiveTab] = useState('projects')

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }

  return (
    <ProtectedRoute requireAdmin={true}>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-orange-500/20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-orange-500">Admin Dashboard</h1>
              <p className="text-gray-400">Welcome back, {user?.email}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-orange-500/20 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-900 border border-orange-500/20">
              <TabsTrigger 
                value="projects" 
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger 
                value="brands" 
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                Brands
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="mt-6">
              <ProjectManager />
            </TabsContent>

            <TabsContent value="brands" className="mt-6">
              <BrandManager />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </ProtectedRoute>
  )
}
