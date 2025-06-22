import { StatusBar } from "@/components/status-bar"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { LucidLogo } from "@/components/lucid-logo"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "cgi",
      title: "CGI & 3D Visualization",
      description:
        "We create photorealistic 3D visualizations and animations that bring your ideas to life with stunning detail and clarity.",
      features: [
        "Photorealistic Product Rendering",
        "Architectural Visualization",
        "Character Design & Animation",
        "Virtual Environments",
        "Visual Effects (VFX)",
        "Concept Art Visualization",
      ],
      icon: "◊",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      id: "ai",
      title: "AI-Powered Solutions",
      description:
        "We develop cutting-edge artificial intelligence applications that transform how users interact with your brand and products.",
      features: [
        "Generative AI Applications",
        "Computer Vision Solutions",
        "Natural Language Processing",
        "Recommendation Systems",
        "Predictive Analytics",
        "AI-Enhanced User Experiences",
      ],
      icon: "△",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      description:
        "We build native and cross-platform mobile applications designed for seamless user experiences across all devices.",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "AR/VR Experiences",
        "IoT Integration",
        "Mobile Commerce",
        "Location-Based Services",
      ],
      icon: "◯",
      color: "from-green-500/20 to-teal-500/20",
    },
    {
      id: "web",
      title: "Web Development",
      description:
        "We create custom websites and web applications built with modern technologies for optimal performance and engagement.",
      features: [
        "Interactive Websites",
        "E-Commerce Platforms",
        "Web Applications",
        "Content Management Systems",
        "Progressive Web Apps",
        "3D Web Experiences",
      ],
      icon: "◢",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ]

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
      <main className="relative z-10 pt-32 pb-16">
        {/* Hero Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 opacity-0 animate-fade-in-up animate-delay-300 tracking-tight">
              OUR
              <br />
              <span className="text-orange-500">SERVICES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed opacity-0 animate-fade-in-up animate-delay-600 max-w-4xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional digital experiences.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-8xl">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div
                      className={`opacity-0 animate-fade-in-${index % 2 === 0 ? "left" : "right"} animate-delay-300`}
                    >
                      <div className="text-6xl mb-8 text-orange-500">{service.icon}</div>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h2>
                      <p className="text-xl text-gray-300 leading-relaxed mb-10">{service.description}</p>

                      <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/contact">
                        <button className="btn-primary px-8 py-4 hover-glow animate-button-glow">
                          Discuss Your Project
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div
                      className={`opacity-0 animate-fade-in-${index % 2 === 0 ? "right" : "left"} animate-delay-600`}
                    >
                      <div className="relative aspect-square">
                        <div
                          className={`w-full h-full bg-gradient-to-br ${service.color} border border-orange-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm`}
                        >
                          <div className="text-9xl text-orange-500/40 animate-pulse-glow">{service.icon}</div>
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full animate-float-glow"></div>
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-500/10 rounded-full animate-float-glow animate-delay-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20 opacity-0 animate-fade-in-up animate-delay-300">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                OUR <span className="text-orange-500">PROCESS</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a collaborative, iterative approach to ensure your project exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We start by understanding your goals, audience, and vision through in-depth consultation.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "We develop a comprehensive plan tailored to your specific needs and objectives.",
                },
                {
                  step: "03",
                  title: "Creation",
                  description: "Our team brings your vision to life through iterative design and development.",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "We refine, test, and launch your project, ensuring it meets the highest standards.",
                },
              ].map((phase, index) => (
                <div key={index} className={`opacity-0 animate-fade-in-up animate-delay-${600 + index * 200}`}>
                  <div className="service-card p-8 rounded-2xl relative hover-lift hover-glow transition-all duration-300">
                    <div className="text-6xl font-bold text-orange-500/20 absolute -top-4 right-4">{phase.step}</div>
                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{phase.title}</h3>
                    <p className="text-gray-300 relative z-10 leading-relaxed">{phase.description}</p>
                  </div>
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
                READY TO START
                <br />
                <span className="text-orange-500">YOUR PROJECT?</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Let's collaborate to create something extraordinary that pushes the boundaries of what's possible.
              </p>
              <Link href="/contact">
                <button className="btn-primary text-lg px-8 py-4 animate-button-glow">Get in Touch</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
