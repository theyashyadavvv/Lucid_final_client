"use client"

import { useEffect, useRef } from "react"

export function BrandShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth

    if (scrollWidth <= clientWidth) return

    let position = 0
    const speed = 1

    const scroll = () => {
      position -= speed

      if (Math.abs(position) >= scrollWidth / 2) {
        position = 0
      }

      if (container) {
        container.style.transform = `translateX(${position}px)`
      }

      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  const brands = [
    { name: "Apple", logo: "◆" },
    { name: "L&T", logo: "◇" },
    { name: "TVS", logo: "△" },
    { name: "Puma", logo: "▲" },
    { name: "Mercedes", logo: "○" },
    { name: "Nike", logo: "◎" },
    { name: "Adidas", logo: "□" },
    { name: "Sony", logo: "■" },
    { name: "Samsung", logo: "▢" },
    { name: "Google", logo: "▣" },
  ]

  return (
    <section className="relative z-10 py-16 px-6 overflow-hidden bg-black/30 backdrop-blur-sm border-y border-orange-500/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 opacity-0 animate-fade-in-up animate-delay-300">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            TRUSTED BY <span className="text-orange-500">GLOBAL BRANDS</span>
          </h2>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex items-center space-x-16 py-8 whitespace-nowrap transition-transform duration-1000 ease-linear"
          >
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="text-5xl text-orange-500/60 group-hover:text-orange-500 transition-colors duration-300 mb-4">
                  {brand.logo}
                </div>
                <span className="text-gray-400 font-mono text-sm group-hover:text-white transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
