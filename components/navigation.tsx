"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Search, Menu, X, Settings } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAdmin, user } = useAuth()

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "WORK", href: "/work" },
    { label: "SERVICES", href: "/services" },
    { label: "CONTACT", href: "/contact" },
    { label: "SHOWROOM", href: "/showroom" },
    ...(user ? [{ label: "DASHBOARD", href: isAdmin ? "/admin" : "/dashboard" }] : [{ label: "LOGIN", href: "/auth" }]),
  ]

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className="fixed top-[52px] right-4 z-40 flex items-center space-x-2 sm:space-x-3 w-max">
        <button className="p-2 sm:p-3 text-white hover:text-orange-500 transition-colors hover-scale min-w-[44px] min-h-[44px] flex items-center justify-center">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button className="p-2 sm:p-3 text-white hover:text-orange-500 transition-colors hover-scale min-w-[44px] min-h-[44px] flex items-center justify-center">
          <Search className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        {isAdmin && (
          <Link href="/admin">
            <button className="p-2 sm:p-3 text-white hover:text-orange-500 transition-colors hover-scale min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </Link>
        )}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn-outline px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
        >
          {isMenuOpen ? <X className="w-3 h-3 sm:w-4 sm:h-4" /> : <Menu className="w-3 h-3 sm:w-4 sm:h-4" />}
          <span className="hidden sm:inline">{isMenuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </nav>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-30 nav-menu transition-all duration-700 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center w-full max-w-4xl">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-12 sm:mb-16">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className={`transform transition-all duration-700 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block nav-item text-white hover:text-orange-500 transition-colors duration-300 ${pathname === item.href ? "text-orange-500" : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            <div
              className={`transform transition-all duration-700 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              <Link href="/contact">
                <button className="btn-primary text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 animate-button-glow">
                  START PROJECT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
