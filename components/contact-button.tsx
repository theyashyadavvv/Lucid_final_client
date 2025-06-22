"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ContactButton() {
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    if (isClicked) {
      const contactDetails = document.getElementById("contact-details")
      if (contactDetails) {
        contactDetails.classList.remove("hidden")
        contactDetails.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [isClicked])

  return (
    <AnimatePresence>
      {!isClicked ? (
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          exit={{
            scale: 1.2,
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          onClick={() => setIsClicked(true)}
          className="btn-primary text-xl px-16 py-8 hover-glow animate-button-glow relative group overflow-hidden"
        >
          <span className="relative z-10">GET IN TOUCH</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-16 transition-all duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-orange-500 mb-4">Contact Details Revealed!</div>
          <p className="text-white text-lg mb-8">Please fill out the form below or use our contact information.</p>
          <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
