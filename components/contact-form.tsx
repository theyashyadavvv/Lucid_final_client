"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      })
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="service-card p-12 rounded-3xl text-center">
        <div className="text-8xl text-orange-500 mb-8 animate-pulse-glow">✓</div>
        <h3 className="text-3xl font-bold text-white mb-6">Message Sent Successfully!</h3>
        <p className="text-gray-300 text-lg mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        <button onClick={() => setIsSubmitted(false)} className="btn-outline px-8 py-4 hover-glow">
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="service-card p-12 rounded-3xl">
      <h2 className="text-4xl font-bold text-white mb-10">
        START YOUR <span className="text-orange-500">PROJECT</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-white font-mono text-sm mb-3">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input w-full"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-white font-mono text-sm mb-3">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input w-full"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-white font-mono text-sm mb-3">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="form-input w-full"
            placeholder="Your company name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-white font-mono text-sm mb-3">Project Type *</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="form-input w-full"
            >
              <option value="">Select project type</option>
              <option value="cgi">CGI & 3D Visualization</option>
              <option value="ai">AI Development</option>
              <option value="mobile">Mobile App</option>
              <option value="web">Web Development</option>
              <option value="multiple">Multiple Services</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-mono text-sm mb-3">Budget Range</label>
            <select name="budget" value={formData.budget} onChange={handleChange} className="form-input w-full">
              <option value="">Select budget range</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-30k">$15,000 - $30,000</option>
              <option value="30k-50k">$30,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k+">$100,000+</option>
              <option value="discuss">Let's discuss</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-white font-mono text-sm mb-3">Timeline</label>
          <select name="timeline" value={formData.timeline} onChange={handleChange} className="form-input w-full">
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-2months">1-2 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6months+">6+ months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label className="block text-white font-mono text-sm mb-3">Project Details *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="form-input w-full resize-none"
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center space-x-3 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed animate-button-glow"
        >
          {isSubmitting ? (
            <>
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-6 h-6" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
