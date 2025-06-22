"use client"

import { useState } from "react"
import { StatusBar } from "@/components/status-bar"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { LucidLogo } from "@/components/lucid-logo"
import Link from "next/link"

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL")

  const projects = [
    {
      id: 1,
      title: "Hyperreal Product Visualization",
      category: "CGI",
      description: "Photorealistic 3D rendering for luxury brand campaign",
      image: "◊",
      color: "from-orange-500/20 to-red-500/20",
      year: "2023",
      client: "Luxury Fashion Brand",
    },
    {
      id: 2,
      title: "AI-Powered Design System",
      category: "AI",
      description: "Intelligent design automation platform",
      image: "△",
      color: "from-blue-500/20 to-purple-500/20",
      year: "2023",
      client: "Tech Startup",
    },
    {
      id: 3,
      title: "Immersive Mobile Experience",
      category: "MOBILE",
      description: "AR-enhanced social platform",
      image: "◯",
      color: "from-green-500/20 to-teal-500/20",
      year: "2023",
      client: "Social Media Company",
    },
    {
      id: 4,
      title: "Interactive Web Platform",
      category: "WEB",
      description: "Next-generation e-commerce experience",
      image: "◢",
      color: "from-purple-500/20 to-pink-500/20",
      year: "2023",
      client: "E-commerce Brand",
    },
    {
      id: 5,
      title: "Virtual Showroom",
      category: "CGI",
      description: "3D interactive product showcase",
      image: "⬢",
      color: "from-orange-500/20 to-yellow-500/20",
      year: "2022",
      client: "Automotive Company",
    },
    {
      id: 6,
      title: "Smart Analytics Dashboard",
      category: "AI",
      description: "Real-time data visualization platform",
      image: "◎",
      color: "from-cyan-500/20 to-blue-500/20",
      year: "2022",
      client: "Enterprise Client",
    },
    {
      id: 7,
      title: "Fitness Tracking App",
      category: "MOBILE",
      description: "AI-powered health and wellness platform",
      image: "◐",
      color: "from-green-500/20 to-lime-500/20",
      year: "2022",
      client: "Health Tech Startup",
    },
    {
      id: 8,
      title: "Corporate Website",
      category: "WEB",
      description: "Professional business presence with CMS",
      image: "◤",
      color: "from-indigo-500/20 to-purple-500/20",
      year: "2022",
      client: "Fortune 500 Company",
    },
  ]

  const categories = ["ALL", "CGI", "AI", "MOBILE", "WEB"]

  const filteredProjects =
    selectedCategory === "ALL" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen glow-background custom-cursor relative">
      <CustomCursor />

      {/* Glowing Orbs */}
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>
      <div className="glow-orb-3"></div>

      <StatusBar />
      <Navigation />
      <LucidLogo />

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-16">
        {/* Hero Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 opacity-0 animate-fade-in-up animate-delay-300 tracking-tight">
              OUR
              <br />
              <span className="text-orange-500">WORK</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed opacity-0 animate-fade-in-up animate-delay-600 max-w-4xl mx-auto">
              Explore our portfolio of innovative projects that push the boundaries of creativity and technology.
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-800">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-4 font-mono text-sm border border-orange-500/30 rounded-xl transition-all duration-300 hover-glow ${selectedCategory === category
                    ? "bg-orange-500 text-white border-orange-500"
                    : "text-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-8xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={
                    selectedCategory === "ALL"
                      ? "opacity-0 animate-fade-in-up animate-delay-1000"
                      : `opacity-0 animate-fade-in-up animate-delay-${1000 + index * 100}`
                  }
                >
                  <Link href={`/work/${project.id}`}>
                    <div className="project-card group relative overflow-hidden rounded-3xl hover-lift hover-glow transition-all duration-500 cursor-pointer">
                      <div
                        className={`aspect-[4/3] bg-gradient-to-br ${project.color} border border-orange-500/20 flex items-center justify-center relative`}
                      >
                        <div className="text-8xl text-orange-500/40 group-hover:text-orange-500/60 transition-colors duration-300 animate-pulse-glow">
                          {project.image}
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-orange-500 text-white px-3 py-1 text-xs font-mono rounded-full">
                            {project.category}
                          </span>
                        </div>

                        {/* Year Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-black/50 text-white px-3 py-1 text-xs font-mono rounded-full">
                            {project.year}
                          </span>
                        </div>

                        {/* View Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white rounded-full px-8 py-2 font-bold text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            VIEW
                          </div>
                        </div>

                        {/* Project Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                          <p className="text-orange-500 text-xs font-mono">{project.client}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="opacity-0 animate-fade-in-up animate-delay-300">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                READY TO CREATE
                <br />
                <span className="text-orange-500">SOMETHING AMAZING?</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Let's collaborate to bring your vision to life with cutting-edge technology and creative excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <button className="btn-primary text-lg px-8 py-4 animate-button-glow">START PROJECT</button>
                </Link>
                <Link href="/services">
                  <button className="btn-outline text-lg px-8 py-4 hover-glow">VIEW SERVICES</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
