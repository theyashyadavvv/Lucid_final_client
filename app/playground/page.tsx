"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState("cgi")
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [sliderValue, setSliderValue] = useState(50)

  // Simple canvas animation for demo purposes
  useEffect(() => {
    if (activeTab !== "cgi" || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = 50

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 60 + 20}, 100%, 50%)`,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update position
        particle.x += particle.speedX * (sliderValue / 25)
        particle.y += particle.speedY * (sliderValue / 25)

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [activeTab, sliderValue])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              The <span className="text-orange-500">Playground</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Explore our experimental projects and interactive demos showcasing our capabilities in CGI, AI, and web
              technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Playground */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Tabs defaultValue="cgi" onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
              <TabsTrigger value="cgi">CGI Demo</TabsTrigger>
              <TabsTrigger value="ai">AI Experiment</TabsTrigger>
              <TabsTrigger value="web">Web Prototype</TabsTrigger>
            </TabsList>

            <TabsContent value="cgi" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Particle System</h2>
                <p className="text-lg text-gray-600 mb-8">
                  A real-time particle system demo showcasing our CGI capabilities. Adjust the speed using the slider
                  below.
                </p>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video relative">
                <canvas ref={canvasRef} className="w-full h-full"></canvas>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <span>Slow</span>
                  <span>Fast</span>
                </div>
                <Slider
                  value={[sliderValue]}
                  onValueChange={(value) => setSliderValue(value[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="py-4"
                />
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">AI Style Transfer</h2>
                <p className="text-lg text-gray-600 mb-8">
                  An experimental AI-powered style transfer demo. Upload an image and apply different artistic styles.
                </p>
              </div>

              <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg p-8 text-center">
                <div className="mb-8">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="AI Style Transfer Demo"
                    className="rounded-lg mx-auto"
                  />
                </div>

                <p className="text-gray-500 mb-6">
                  This interactive demo is currently in development. Check back soon for the full experience!
                </p>

                <Button disabled className="bg-orange-500 hover:bg-orange-600">
                  Coming Soon
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="web" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Interactive Web Prototype</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Explore our experimental web interface prototype showcasing advanced interactions and animations.
                </p>
              </div>

              <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg p-8 text-center">
                <div className="mb-8">
                  <img src="/placeholder.svg?height=400&width=600" alt="Web Prototype" className="rounded-lg mx-auto" />
                </div>

                <p className="text-gray-500 mb-6">
                  This interactive prototype is currently in development. Check back soon for the full experience!
                </p>

                <Button disabled className="bg-orange-500 hover:bg-orange-600">
                  Coming Soon
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experimental Projects */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Experimental Projects</h2>
            <p className="text-lg text-gray-600">
              Explore our latest experiments and work-in-progress projects pushing the boundaries of digital creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Neural Style Transfer",
                description:
                  "An AI experiment that applies artistic styles to images in real-time using neural networks.",
                image: "/placeholder.svg?height=400&width=600",
                tag: "AI Experiment",
              },
              {
                title: "Procedural Landscape Generator",
                description: "A CGI tool that creates realistic 3D landscapes using procedural generation algorithms.",
                image: "/placeholder.svg?height=400&width=600",
                tag: "CGI Tool",
              },
              {
                title: "Interactive Data Visualization",
                description:
                  "A web-based experiment visualizing complex datasets through intuitive, interactive interfaces.",
                image: "/placeholder.svg?height=400&width=600",
                tag: "Web Experiment",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" className="w-full">
                    Coming Soon
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Interested in collaborating on experimental projects?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
            We're always looking for partners to explore new creative and technical frontiers.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
