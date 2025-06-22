"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { DuneButton } from "@/components/ui/dune-button"
import { Search, Phone } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "WORK", href: "/work" },
    { label: "SERVICES", href: "/services" },
    { label: "CONTACT", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src="/images/lucid-logo.png"
                alt="Lucid Studio"
                className="h-8 w-auto transition-all duration-300 group-hover:scale-110"
              />
            </Link>

            <div className="flex items-center space-x-6">
              <button className="p-2 hover:text-orange-400 transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-orange-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <MagneticButton>
                <DuneButton variant="outline" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? "CLOSE" : "MENU"}
                </DuneButton>
              </MagneticButton>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-700 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <nav className="text-center">
            <div className="space-y-8">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className={`transform transition-all duration-700 ${
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    className={`block text-6xl md:text-8xl font-bold tracking-tight hover:text-orange-400 transition-colors duration-300 ${
                      pathname === item.href ? "text-orange-400" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            <div
              className={`mt-16 transform transition-all duration-700 ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <MagneticButton>
                <DuneButton variant="primary" size="lg">
                  START PROJECT
                </DuneButton>
              </MagneticButton>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
