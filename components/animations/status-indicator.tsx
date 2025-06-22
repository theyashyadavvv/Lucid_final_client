"use client"

import { useEffect, useState } from "react"

export function StatusIndicator() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center space-x-4 font-mono text-sm text-gray-400">
      <div className="flex items-center space-x-2">
        <span>LOCAL</span>
        <span>/</span>
        <span>{currentTime}</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <span>AVAILABLE FOR PROJECTS</span>
      </div>
    </div>
  )
}
