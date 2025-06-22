"use client"

import Link from "next/link"
import { useState } from "react"

interface ProjectCardProps {
  id: string | number
  title: string
  description: string
  category: string
  image: string
  color: string
  year: string
  client: string
  href?: string
}

export function ProjectCard({
  id,
  title,
  description,
  category,
  image,
  color,
  year,
  client,
  href = `/work/${id}`,
}: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Link href={href}>
      <div
        className="project-card group relative overflow-hidden rounded-3xl hover-lift hover-glow transition-all duration-500 cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className={`aspect-[4/3] bg-gradient-to-br ${color} border border-orange-500/20 flex items-center justify-center relative`}
        >
          <div className="text-8xl text-orange-500/40 group-hover:text-orange-500/60 transition-colors duration-300 animate-pulse-glow">
            {image}
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-orange-500 text-white px-3 py-1 text-xs font-mono rounded-full">{category}</span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-black/50 text-white px-3 py-1 text-xs font-mono rounded-full">{year}</span>
          </div>

          {/* View Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white rounded-full px-8 py-2 font-bold text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              VIEW
            </div>
          </div>

          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-3">{description}</p>
            <p className="text-orange-500 text-xs font-mono">{client}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
