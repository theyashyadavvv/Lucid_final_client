'use client'

import { useAuth } from '@/lib/auth-context'
import { AdminLogin } from './admin-login'
import { useState } from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAdmin?: boolean
}

export function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const { user, loading, isAdmin } = useAuth()
  const [showLogin, setShowLogin] = useState(false)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user || (requireAdmin && !isAdmin)) {
    return <AdminLogin onSuccess={() => setShowLogin(false)} />
  }

  return <>{children}</>
}
