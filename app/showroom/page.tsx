import { StatusBar } from "@/components/status-bar"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { LucidLogo } from "@/components/lucid-logo"
import Link from "next/link"

export default function ShowroomPage() {
  const experiments = [
    {
      title: "Real-time CGI Renderer",
      description: "Interactive 3D scene with real-time lighting and materials",
      category: "CGI",
      status: "Live Demo",
      icon: "◊",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "AI Style Transfer",
      description: "Transform images using neural style transfer algorithms",
      category: "AI",
      status: "Beta",
      icon: "△",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "AR Object Placement",
      description: "Place and manipulate 3D objects in augmented reality",
      category: "Mobile",
      status: "Prototype",
      icon: "◯",
      color: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "WebGL Particle System",
      description: "Interactive particle effects running in the browser",
      category: "Web",
      status: "Live Demo",
      icon: "◢",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Neural Network Visualizer",
      description: "Real-time visualization of neural network training",
      category: "AI",
      status: "Coming Soon",
      icon: "▲",
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Procedural Landscape",
      description: "Generate infinite landscapes using procedural algorithms",
      category: "CGI",
      status: "Live Demo",
      icon: "⬢",
      color: "from-orange-500/20 to-yellow-500/20",
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
              THE
              <br />
              <span className="text-orange-500">SHOWROOM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed opacity-0 animate-fade-in-up animate-delay-600 max-w-4xl mx-auto">
              Explore our experimental projects and interactive demos showcasing the future of digital creation.
            </p>
          </div>
        </section>

        {/* Featured Demo */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="opacity-0 animate-fade-in-up animate-delay-800">
              <div className="service-card p-12 rounded-3xl mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-6">
                    FEATURED <span className="text-orange-500">EXPERIMENT</span>
                  </h2>
                  <p className="text-gray-300 text-xl">Interactive Real-time CGI Renderer</p>
                </div>

                <div className="aspect-video bg-black/50 border border-orange-500/30 rounded-2xl flex items-center justify-center mb-8">
                  <div className="text-center">
                    <div className="text-9xl text-orange-500/40 mb-6 animate-pulse-glow">◊</div>
                    <p className="text-gray-300 font-mono text-lg">Interactive Demo Loading...</p>
                    <p className="text-gray-400 text-sm mt-3">Click and drag to rotate • Scroll to zoom</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Real-time Rendering</h3>
                    <p className="text-gray-400">60 FPS performance with dynamic lighting</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Material Editor</h3>
                    <p className="text-gray-400">Adjust materials and textures in real-time</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Export Options</h3>
                    <p className="text-gray-400">Download renders in multiple formats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiments Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-8xl">
            <div className="text-center mb-20 opacity-0 animate-fade-in-up animate-delay-300">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                EXPERIMENTAL <span className="text-orange-500">PROJECTS</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Cutting-edge prototypes and research projects that push the boundaries of what's possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiments.map((experiment, index) => (
                <div key={index} className={`opacity-0 animate-fade-in-up animate-delay-${600 + index * 200}`}>
                  <div className="project-card group relative overflow-hidden rounded-3xl hover-lift hover-glow transition-all duration-500">
                    <div
                      className={`aspect-[4/3] bg-gradient-to-br ${experiment.color} border border-orange-500/20 flex items-center justify-center relative`}
                    >
                      <div className="text-8xl text-orange-500/40 group-hover:text-orange-500/60 transition-colors duration-300 animate-pulse-glow">
                        {experiment.icon}
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-6 left-6">
                        <span
                          className={`px-4 py-2 text-sm font-mono rounded-full ${
                            experiment.status === "Live Demo"
                              ? "bg-green-500 text-white"
                              : experiment.status === "Beta"
                                ? "bg-orange-500 text-white"
                                : experiment.status === "Prototype"
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-500 text-white"
                          }`}
                        >
                          {experiment.status}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-6 right-6">
                        <span className="bg-black/50 text-orange-500 px-4 py-2 text-sm font-mono rounded-full">
                          {experiment.category}
                        </span>
                      </div>

                      {/* Overlay */}
                      <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-2xl font-bold text-white mb-3">{experiment.title}</h3>
                          <p className="text-gray-300 mb-6">{experiment.description}</p>
                          <button
                            className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                              experiment.status === "Coming Soon"
                                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                                : "btn-outline hover-glow"
                            }`}
                          >
                            {experiment.status === "Coming Soon" ? "Coming Soon" : "Try Demo"}
                          </button>
                        </div>
                      </div>
                    </div>
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
                WANT TO
                <br />
                <span className="text-orange-500">COLLABORATE?</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                We're always looking for partners to explore new creative and technical frontiers together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <button className="btn-primary text-lg px-8 py-4 animate-button-glow">START PROJECT</button>
                </Link>
                <Link href="/about">
                  <button className="btn-outline text-lg px-8 py-4 hover-glow">LEARN MORE</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
