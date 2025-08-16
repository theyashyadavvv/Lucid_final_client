"use client"

import { useEffect, useState } from "react"

export function StatusBar({ transparent = false }: { transparent?: boolean }) {
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

  const backgroundClass = transparent ? "bg-transparent" : "bg-black"

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${backgroundClass} border-b border-orange-500/80`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between h-auto min-h-[44px] gap-y-2 overflow-x-auto">
          <div className="flex flex-wrap items-center space-x-4 sm:space-x-6 gap-y-2 min-w-0">
            <div className="flex items-center space-x-2 min-w-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-white text-xs sm:text-base font-mono tracking-wide whitespace-nowrap">AVAILABLE FOR FREELANCE</span>
            </div>
            <div className="text-orange-500 font-bold text-lg hidden xs:inline">|</div>
            <div className="flex items-center space-x-2 min-w-0">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-white text-xs sm:text-base font-mono tracking-wide whitespace-nowrap">AVAILABLE FOR PROJECTS</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 text-white text-xs sm:text-base font-mono min-w-0">
            <span className="whitespace-nowrap">{currentTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
