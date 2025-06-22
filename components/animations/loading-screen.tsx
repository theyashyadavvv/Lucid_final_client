"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-orange-500 rounded-lg mr-3 animate-pulse-glow"></div>
          <span className="text-2xl font-bold text-white">Lucid Studio</span>
        </div>

        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-gray-400 text-sm">Loading... {Math.round(progress)}%</div>
      </div>
    </div>
  )
}
