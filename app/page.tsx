"use client"

import { useState, useRef, useEffect } from "react"
import { projectService, Project } from "@/lib/firebase-service"
import { StatusBar } from "@/components/status-bar"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { LucidLogo } from "@/components/lucid-logo"
import { InteractiveElement } from "@/components/interactive-element"
import { BrandShowcase } from "@/components/brand-showcase"
import Link from "next/link"
import Image from "next/image"
import { ContactButton } from "@/components/contact-button"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  // Default projects as fallback
  const defaultServiceProjects = {
    CGI: [
      {
        title: "Hyperreal Product Visualization",
        description: "Photorealistic 3D rendering for luxury fashion brand",
        capabilities: ["Product Rendering", "Architectural Visualization", "Character Animation", "VFX"],
        image: "◊",
        color: "from-orange-500/20 to-red-500/20",
        year: "2023",
        client: "Fashion Brand"
      },
      {
        title: "Virtual Showroom Experience",
        description: "Interactive 3D environment for automotive industry",
        capabilities: ["Environment Design", "Real-time Rendering", "Interactive 3D", "Virtual Tours"],
        image: "⬢",
        color: "from-orange-500/20 to-yellow-500/20",
        year: "2023",
        client: "Automotive"
      },
      {
        title: "Cinematic Brand Campaign",
        description: "High-end CGI for global advertising campaign",
        capabilities: ["Motion Graphics", "Compositing", "Lighting Design", "Post-Production"],
        image: "◈",
        color: "from-orange-500/20 to-pink-500/20",
        year: "2023",
        client: "Global Brand"
      },
    ],
    AI: [
      {
        title: "Intelligent Design Assistant",
        description: "AI-powered design automation platform",
        capabilities: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Automation"],
        image: "△",
        color: "from-blue-500/20 to-purple-500/20",
        year: "2023",
        client: "Tech Company"
      },
      {
        title: "Smart Content Generator",
        description: "AI system for automated content creation",
        capabilities: ["Content Generation", "Image Recognition", "Predictive Analytics", "Data Processing"],
        image: "▲",
        color: "from-purple-500/20 to-pink-500/20",
        year: "2023",
        client: "Media Company"
      },
      {
        title: "Personalization Engine",
        description: "AI-driven user experience optimization",
        capabilities: ["Recommendation Systems", "User Behavior Analysis", "A/B Testing", "Performance Optimization"],
        image: "⟐",
        color: "from-cyan-500/20 to-blue-500/20",
        year: "2023",
        client: "E-commerce"
      },
    ],
    MOBILE: [
      {
        title: "AR Social Platform",
        description: "Immersive mobile experience with AR features",
        capabilities: ["iOS Development", "Android Development", "AR/VR Integration", "Social Features"],
        image: "◯",
        color: "from-green-500/20 to-teal-500/20",
        year: "2023",
        client: "Social Media"
      },
      {
        title: "E-commerce Mobile App",
        description: "Cross-platform shopping experience",
        capabilities: ["Cross-Platform Development", "Payment Integration", "Push Notifications", "Analytics"],
        image: "○",
        color: "from-teal-500/20 to-cyan-500/20",
        year: "2023",
        client: "Retail"
      },
      {
        title: "Fitness Tracking App",
        description: "AI-powered health and wellness platform",
        capabilities: ["Health Tracking", "AI Coaching", "Wearable Integration", "Data Visualization"],
        image: "◐",
        color: "from-green-500/20 to-lime-500/20",
        year: "2023",
        client: "Health Tech"
      },
    ],
    WEB: [
      {
        title: "Interactive Portfolio Site",
        description: "Next-generation web experience with 3D elements",
        capabilities: ["React/Next.js", "3D Web Graphics", "Performance Optimization", "SEO"],
        image: "◢",
        color: "from-purple-500/20 to-pink-500/20",
        year: "2023",
        client: "Creative Agency"
      },
      {
        title: "E-commerce Platform",
        description: "High-performance online store with AI features",
        capabilities: ["E-commerce Development", "Payment Systems", "Inventory Management", "Analytics"],
        image: "◣",
        color: "from-indigo-500/20 to-purple-500/20",
        year: "2023",
        client: "Online Store"
      },
      {
        title: "Corporate Website",
        description: "Professional business presence with CMS",
        capabilities: ["Content Management", "Multi-language Support", "Accessibility", "Mobile Responsive"],
        image: "◤",
        color: "from-blue-500/20 to-indigo-500/20",
        year: "2023",
        client: "Corporation"
      },
    ],
  }

  // Load projects from Firebase
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const firebaseProjects = await projectService.getAll()
        setProjects(firebaseProjects)
      } catch (error) {
        console.error('Failed to load projects:', error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  // Get projects by category, with fallback to default projects
  const getProjectsByCategory = (category: string) => {
    const firebaseProjects = projects.filter(p => p.category === category)
    if (firebaseProjects.length > 0) {
      return firebaseProjects
    }
    // Fallback to default projects
    return defaultServiceProjects[category as keyof typeof defaultServiceProjects] || []
  }

  // Scroll to contact section
  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen glow-background custom-cursor relative">
      <video
        src="/videos/MAINPAGE LOOP2.mp4"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-screen object-cover z-0"
      />
      <div className="relative z-10">
        <CustomCursor />
        <StatusBar />
        <Navigation />
        <LucidLogo />
        <InteractiveElement />

        {/* Glowing Orbs */}
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
        <div className="glow-orb-3"></div>

        <main className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <section className="h-screen flex items-center justify-center">
            <div className="text-center max-w-6xl mx-auto w-full px-3 sm:px-4 md:px-6">
              {/* Creative Technology Studio Text */}
              <div className="opacity-0 animate-fade-in-up animate-delay-800">
                <h2 className="text-hero-large mb-4">
                  <span className="text-white">CREATIVE</span>
                  <br />
                  <span className="text-orange-500">TECHNOLOGY</span>
                  <br />
                  <span className="text-white">STUDIO</span>
                </h2>
              </div>
            </div>
          </section>

          {/* Interactive Services Section */}
          <section className="relative z-10 py-12 sm:py-16 md:py-20 bg-black">
            <div className="responsive-container">
              <div className="opacity-0 animate-fade-in-up animate-delay-300">
                <div className="responsive-flex text-sm sm:text-base md:text-lg lg:text-xl font-mono text-gray-300">
                  {["CGI", "AI", "MOBILE", "WEB"].map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(selectedService === service ? null : service)}
                      className={`hover:text-orange-500 transition-all duration-300 cursor-pointer hover-scale relative min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg ${
                        selectedService === service ? "text-orange-500 scale-110 bg-orange-500/10" : ""
                      }`}
                    >
                      {service}
                      {selectedService === service && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 animate-fade-in-up"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service Projects Display */}
          {selectedService && (
            <section className="relative z-10 py-12 sm:py-16 md:py-20 bg-black">
              <div className="responsive-container">
                <div className="opacity-0 animate-fade-in-up animate-delay-300">
                  <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm">
                    <h3 className="text-section-title text-white mb-6 sm:mb-8 text-center">
                      {selectedService} <span className="text-orange-500">PROJECTS</span>
                    </h3>
                    <div className="responsive-grid">
                      {getProjectsByCategory(selectedService).map((project, index) => (
                        <ProjectCard
                          key={project.id || index}
                          id={index}
                          title={project.title}
                          description={project.description}
                          category={selectedService}
                          image={project.image}
                          color={project.color}
                          year={project.year}
                          client={project.client}
                          href={project.href || "/work"}
                        />
                      ))}
                    </div>
                    <div className="mt-6 sm:mt-8 text-center">
                      <Link
                        href="/work"
                        className="btn-outline px-4 sm:px-6 md:px-8 py-3 sm:py-4 inline-block hover-glow"
                      >
                        VIEW ALL {selectedService} PROJECTS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* About Preview Section */}
          <section className="relative z-10 section-padding px-3 sm:px-4 md:px-6 bg-black">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
                <div className="opacity-0 animate-fade-in-left animate-delay-300">
                  <h2 className="text-section-title text-white leading-tight mb-6 sm:mb-8">
                    CREATIVE
                    <br />
                    <span className="text-orange-500">TECHNOLOGY</span>
                    <br />
                    STUDIO
                  </h2>
                  <p className="text-body-large text-gray-300 mb-8 sm:mb-10">
                    We specialize in cutting-edge digital experiences that push the boundaries of creativity and technology.
                    From photorealistic CGI to AI-powered applications, we bring visionary concepts to life.
                  </p>
                  <Link href="/about">
                    <button className="btn-outline hover-glow">LEARN MORE</button>
                  </Link>
                </div>

                <div className="opacity-0 animate-fade-in-right animate-delay-600">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl sm:rounded-3xl border border-orange-500/30 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-orange-500/40 animate-pulse-glow">
                        ◊
                      </div>
                    </div>
                    <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-orange-500/20 rounded-full animate-float-glow"></div>
                    <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-orange-500/10 rounded-full animate-float-glow animate-delay-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Showcase Section */}
          <section className="relative z-10 section-padding px-3 sm:px-4 md:px-6 bg-black">
            <div className="container mx-auto max-w-7xl">
              <BrandShowcase />
            </div>
          </section>

          {/* Services Grid */}
          <section className="relative z-10 section-padding bg-black">
            <div className="responsive-container">
              <div className="text-center mb-12 sm:mb-16 md:mb-20 opacity-0 animate-fade-in-up animate-delay-300">
                <h2 className="text-section-title text-white mb-6 sm:mb-8">
                  OUR <span className="text-orange-500">EXPERTISE</span>
                </h2>
                <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
                  Transforming ideas into reality through innovative technology and creative excellence.
                </p>
              </div>

              <div className="responsive-grid">
                {[
                  { title: "CGI", subtitle: "VISUALIZATION", icon: "◊", delay: "400", href: "/services#cgi" },
                  { title: "AI", subtitle: "DEVELOPMENT", icon: "△", delay: "600", href: "/services#ai" },
                  { title: "MOBILE", subtitle: "APPS", icon: "◯", delay: "800", href: "/services#mobile" },
                  { title: "WEB", subtitle: "DEVELOPMENT", icon: "◢", delay: "1000", href: "/services#web" },
                ].map((service, index) => (
                  <div key={index} className={`opacity-0 animate-fade-in-up animate-delay-${service.delay}`}>
                    <Link href={service.href}>
                      <div className="service-card group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl hover-lift hover-glow transition-all duration-300 cursor-pointer h-full min-h-[200px] flex flex-col justify-center items-center text-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl text-orange-500 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 font-mono text-xs sm:text-sm">{service.subtitle}</p>

                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            ref={contactSectionRef}
            id="contact"
            className="relative z-10 section-padding px-3 sm:px-4 md:px-6 bg-black/50 backdrop-blur-sm border-t border-orange-500/20"
          >
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <h2 className="text-section-title text-white mb-6 sm:mb-8">
                  START YOUR <span className="text-orange-500">PROJECT</span>
                </h2>
                <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
                  Ready to bring your vision to life? Let's collaborate to create something extraordinary.
                </p>
              </div>

              <div className="flex justify-center mb-12 sm:mb-16">
                <ContactButton />
              </div>

              <div id="contact-details" className="hidden lg:grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
                {/* Contact Form */}
                <div className="service-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Get in Touch</h3>

                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-white font-mono text-xs sm:text-sm mb-2">Name *</label>
                        <input type="text" className="form-input w-full" placeholder="Your name" required />
                      </div>
                      <div>
                        <label className="block text-white font-mono text-xs sm:text-sm mb-2">Email *</label>
                        <input type="email" className="form-input w-full" placeholder="your@email.com" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-mono text-xs sm:text-sm mb-2">Project Type *</label>
                      <select className="form-input w-full" required>
                        <option value="">Select project type</option>
                        <option value="cgi">CGI & 3D Visualization</option>
                        <option value="ai">AI Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="web">Web Development</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-mono text-xs sm:text-sm mb-2">Message *</label>
                      <textarea
                        className="form-input w-full resize-none"
                        rows={4}
                        placeholder="Tell us about your project..."
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full py-3 sm:py-4 hover-glow animate-button-glow">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <div className="service-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-orange-500/20 p-2 sm:p-3 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                          <a
                            href="mailto:hello@lucidstudio.com"
                            className="text-white hover:text-orange-500 transition-colors text-sm sm:text-base"
                          >
                            hello@lucidstudio.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-orange-500/20 p-2 sm:p-3 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                          <a
                            href="tel:+14155551234"
                            className="text-white hover:text-orange-500 transition-colors text-sm sm:text-base"
                          >
                            +1 (415) 555-1234
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-orange-500/20 p-2 sm:p-3 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                          <p className="text-white text-sm sm:text-base">123 Creative Avenue, San Francisco, CA 94103</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Follow Us</h3>

                    <div className="flex space-x-3 sm:space-x-4">
                      {[
                        { icon: "instagram", href: "https://instagram.com" },
                        { icon: "twitter", href: "https://twitter.com" },
                        { icon: "linkedin", href: "https://linkedin.com" },
                        { icon: "behance", href: "https://behance.net" },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-orange-500/20 p-2 sm:p-3 rounded-lg hover:bg-orange-500 transition-colors group min-w-[44px] min-h-[44px] flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 group-hover:text-white transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Start Project Button at the End */}
          <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50">
            <button
              onClick={scrollToContact}
              className="btn-primary px-4 sm:px-6 py-3 hover-glow animate-button-glow relative group overflow-hidden"
            >
              <span className="relative z-10 text-xs sm:text-sm">START PROJECT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
