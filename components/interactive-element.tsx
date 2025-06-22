"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function InteractiveElement() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  // Initialize position to bottom right corner
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPosition({
        x: window.innerWidth - 150,
        y: window.innerHeight - 150,
      })
    }
  }, [])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()

        // Keep element within viewport bounds when resizing
        setPosition((prev) => ({
          x: Math.min(prev.x, window.innerWidth - rect.width),
          y: Math.min(prev.y, window.innerHeight - rect.height),
        }))
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.div
      ref={elementRef}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={position}
      animate={{
        x: position.x,
        y: position.y,
        scale: isDragging ? 1.1 : 1,
      }}
      className="fixed z-30 cursor-grab active:cursor-grabbing"
      style={{ touchAction: "none" }}
      whileDrag={{ scale: 1.1 }}
    >
      <div className="w-24 h-24 relative">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-pulse-glow"></div>

        {/* Middle ring */}
        <div className="absolute inset-2 rounded-full border border-orange-500/50"></div>

        {/* Inner geometric shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rotate-45 transform transition-transform duration-300">
            {/* Pulsing inner dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-orange-500/10 filter blur-md"></div>
      </div>
    </motion.div>
  )
}
