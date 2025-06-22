"use client"

import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface DuneButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const DuneButton = forwardRef<HTMLButtonElement, DuneButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses =
      "relative overflow-hidden font-mono font-medium transition-all duration-300 hover-lift hover-glow"

    const variants = {
      primary: "bg-orange-600 text-white border border-orange-600 hover:bg-orange-700",
      secondary: "bg-white text-black border border-white hover:bg-gray-100",
      outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <button ref={ref} className={cn(baseClasses, variants[variant], sizes[size], "group", className)} {...props}>
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 scanline-effect" />
      </button>
    )
  },
)

DuneButton.displayName = "DuneButton"

export { DuneButton }
