"use client"

import { useEffect, useRef, useState } from "react"

interface DuneTextRevealProps {
  children: string
  className?: string
  delay?: number
}

export function DuneTextReveal({ children, className = "", delay = 0 }: DuneTextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1500 ease-out ${isVisible ? "animate-text-reveal" : "opacity-0"}`}
        style={{ clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
      >
        {children}
      </div>
    </div>
  )
}
