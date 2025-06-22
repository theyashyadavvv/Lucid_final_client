"use client"

import { useEffect, useState } from "react"

export function StatusBar() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Los_Angeles",
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-orange-500/80">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[44px]">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white text-base font-mono tracking-wide">AVAILABLE FOR FREELANCE</span>
            </div>
            <div className="text-orange-500 font-bold text-lg">|</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-white text-base font-mono tracking-wide">AVAILABLE FOR PROJECTS</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-white text-base font-mono">
            <span>SF, CA</span>
            <span className="text-orange-500 font-bold text-lg">|</span>
            <span>{currentTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
