import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // This would typically come from a database or CMS
  const project = {
    id: params.slug,
    title: "Hyperreal CGI Campaign",
    client: "Luxury Fashion Brand",
    category: "CGI Visualization",
    description:
      "A series of photorealistic CGI visualizations for a major fashion campaign, blurring the line between reality and digital art.",
    challenge:
      "Create ultra-realistic 3D renderings of fashion products that are indistinguishable from traditional photography, while allowing for creative flexibility not possible with physical photoshoots.",
    solution:
      "We developed a custom workflow combining advanced 3D modeling, physically-based materials, and cutting-edge rendering techniques to achieve photorealistic results. Our team worked closely with the brand's creative directors to ensure every detail matched their vision.",
    outcome:
      "The campaign received widespread acclaim for its innovative approach and visual impact. The client reported a 40% increase in engagement compared to previous campaigns, and the project won multiple industry awards for technical excellence and creative direction.",
    technologies: ["Blender", "Cinema 4D", "Octane Render", "Substance Designer", "Photoshop"],
    images: [
      "/placeholder.svg?height=1080&width=1920",
      "/placeholder.svg?height=1080&width=1920",
      "/placeholder.svg?height=1080&width=1920",
    ],
    year: "2023",
    nextProject: "ai-powered-design-system",
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end project-detail-header">
        <img
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          className="object-cover w-full h-full absolute inset-0 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <Link
              href="/work"
              className="inline-flex items-center text-white mb-6 hover:text-orange transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 items-center text-white">
              <span className="project-detail-badge">{project.category}</span>
              <span className="text-gray-200">Client: {project.client}</span>
              <span className="text-gray-200">Year: {project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="project-detail-divider" />

      {/* Project Overview */}
      <section className="py-16 project-detail-content">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-black">Overview</h2>
              <p className="text-lg text-gray-700 mb-8">{project.description}</p>

              <h3 className="text-2xl font-bold tracking-tight mb-4 text-black">The Challenge</h3>
              <p className="text-lg text-gray-700 mb-8">{project.challenge}</p>

              <h3 className="text-2xl font-bold tracking-tight mb-4 text-black">Our Solution</h3>
              <p className="text-lg text-gray-700 mb-8">{project.solution}</p>

              <h3 className="text-2xl font-bold tracking-tight mb-4 text-black">The Outcome</h3>
              <p className="text-lg text-gray-700">{project.outcome}</p>
            </div>

            <div>
              <div className="bg-black/90 p-8 rounded-lg text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-orange">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-orange mb-2">CLIENT</h4>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-orange mb-2">CATEGORY</h4>
                    <p className="font-medium">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-orange mb-2">YEAR</h4>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-orange mb-2">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="inline-block bg-orange text-white px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-white">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className={`overflow-hidden rounded-lg ${index === 0 ? "md:col-span-2" : ""}`}>
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="text-sm font-medium text-orange mb-2">NEXT PROJECT</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">AI-Powered Design System</h2>
          <Button asChild size="lg" className="bg-orange hover:bg-orange-600 text-white px-8 py-6 text-lg">
            <Link href={`/work/${project.nextProject}`}>
              View Next Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
  
