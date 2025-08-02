"use client"

import { useEffect, useRef, useState } from "react"
import { brandService, Brand } from "@/lib/firebase-service"

export function BrandShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)

  // Default brands as fallback
  const defaultBrands = [
    { name: "Apple", logo: "◆", description: "Technology Company" },
    { name: "L&T", logo: "◇", description: "Engineering & Construction" },
    { name: "TVS", logo: "△", description: "Automotive" },
    { name: "Puma", logo: "▲", description: "Sports Brand" },
    { name: "Mercedes", logo: "○", description: "Luxury Automotive" },
    { name: "Nike", logo: "◎", description: "Sports Brand" },
    { name: "Adidas", logo: "□", description: "Sports Brand" },
    { name: "Sony", logo: "■", description: "Electronics" },
    { name: "Samsung", logo: "▢", description: "Technology" },
    { name: "Google", logo: "▣", description: "Technology" },
  ]

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const firebaseBrands = await brandService.getAll()
        if (firebaseBrands.length > 0) {
          setBrands(firebaseBrands)
        } else {
          // Use default brands if no Firebase brands exist
          setBrands(defaultBrands as Brand[])
        }
      } catch (error) {
        console.error('Failed to load brands:', error)
        // Fallback to default brands
        setBrands(defaultBrands as Brand[])
      } finally {
        setLoading(false)
      }
    }

    loadBrands()
  }, [])

  useEffect(() => {
    if (loading || brands.length === 0) return

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
  }, [loading, brands])

  if (loading) {
    return (
      <section className="relative z-10 py-16 px-6 overflow-hidden bg-black/30 backdrop-blur-sm border-y border-orange-500/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading brands...</p>
          </div>
        </div>
      </section>
    )
  }

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
              <div key={`${brand.id || brand.name}-${index}`} className="flex flex-col items-center group">
                <div className="text-5xl text-orange-500/60 group-hover:text-orange-500 transition-colors duration-300 mb-4">
                  {brand.logo.startsWith('http') ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-logo.png'
                      }}
                    />
                  ) : (
                    brand.logo
                  )}
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
