import { StatusBar } from "@/components/status-bar"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { LucidLogo } from "@/components/lucid-logo"

export default function AboutPage() {
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
              ABOUT
              <br />
              <span className="text-orange-500">LUCID STUDIO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed opacity-0 animate-fade-in-up animate-delay-600 max-w-4xl mx-auto">
              We are a creative technology studio at the forefront of digital innovation, specializing in CGI, AI,
              mobile applications, and web development.
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="opacity-0 animate-fade-in-left animate-delay-300">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  OUR <span className="text-orange-500">STORY</span>
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Founded in 2020 in San Francisco, Lucid Studio emerged from a vision to bridge the gap between
                    cutting-edge technology and creative expression. What started as a small team of passionate
                    designers and developers has evolved into a dynamic studio at the forefront of digital innovation.
                  </p>
                  <p>
                    We believe in the power of technology to transform ideas into reality. Our multidisciplinary
                    approach combines technical excellence with artistic vision, creating digital experiences that not
                    only meet but exceed expectations.
                  </p>
                  <p>
                    Today, we collaborate with forward-thinking clients across industries, helping them harness the
                    power of CGI, AI, mobile, and web technologies to create meaningful connections with their
                    audiences.
                  </p>
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-right animate-delay-600">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl border border-orange-500/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-9xl text-orange-500/40 animate-pulse-glow">⬢</div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full animate-float-glow"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-500/10 rounded-full animate-float-glow animate-delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="opacity-0 animate-fade-in-up animate-delay-300">
                <div className="service-card p-10 rounded-3xl h-full">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    OUR <span className="text-orange-500">MISSION</span>
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To empower clients with innovative digital solutions that transform their ideas into impactful
                    experiences. We strive to push the boundaries of what's possible, combining technical excellence
                    with creative vision to deliver results that exceed expectations.
                  </p>
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up animate-delay-600">
                <div className="service-card p-10 rounded-3xl h-full">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    OUR <span className="text-orange-500">VISION</span>
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To be at the forefront of digital innovation, continuously exploring new technologies and creative
                    approaches that shape the future of digital experiences. We envision a world where technology
                    enhances human creativity and connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20 opacity-0 animate-fade-in-up animate-delay-300">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                CORE <span className="text-orange-500">VALUES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "INNOVATION",
                  description: "We constantly push boundaries and explore new possibilities in technology and design.",
                  icon: "◊",
                },
                {
                  title: "EXCELLENCE",
                  description: "We maintain the highest standards in every project, delivering exceptional quality.",
                  icon: "△",
                },
                {
                  title: "COLLABORATION",
                  description: "We work closely with our clients as partners to achieve extraordinary results.",
                  icon: "◯",
                },
              ].map((value, index) => (
                <div key={index} className="opacity-0 animate-fade-in-up animate-delay-300">
                  <div className="service-card group p-8 rounded-2xl hover-lift hover-glow transition-all duration-300 text-center h-full">
                    <div className="text-6xl text-orange-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="py-32 px-6 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20 opacity-0 animate-fade-in-up animate-delay-300">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                CLIENT <span className="text-orange-500">REVIEWS</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                What our clients say about working with Lucid Studio
              </p>
            </div>

            {/* Moving Reviews Container */}
            <div className="review-marquee-container">
              <div className="review-marquee-track space-x-8">
                {[
                  {
                    name: "Sarah Johnson",
                    company: "TechFlow Inc.",
                    role: "CEO",
                    review:
                      "Lucid Studio transformed our vision into reality. Their CGI work is absolutely stunning and exceeded all our expectations.",
                    rating: 5,
                    avatar: "SJ",
                  },
                  {
                    name: "Michael Chen",
                    company: "Digital Dynamics",
                    role: "Creative Director",
                    review:
                      "The AI solutions they developed for us increased our productivity by 300%. Incredible team with amazing technical skills.",
                    rating: 5,
                    avatar: "MC",
                  },
                  {
                    name: "Emily Rodriguez",
                    company: "StartupX",
                    role: "Founder",
                    review:
                      "From concept to launch, Lucid Studio delivered a mobile app that our users absolutely love. Professional and innovative.",
                    rating: 5,
                    avatar: "ER",
                  },
                  {
                    name: "David Thompson",
                    company: "Global Brands Co.",
                    role: "Marketing Manager",
                    review:
                      "Their web development expertise helped us create an immersive experience that boosted our conversions by 150%.",
                    rating: 5,
                    avatar: "DT",
                  },
                  {
                    name: "Lisa Park",
                    company: "Creative Agency",
                    role: "Art Director",
                    review:
                      "Working with Lucid Studio was seamless. They understood our brand perfectly and delivered beyond our wildest dreams.",
                    rating: 5,
                    avatar: "LP",
                  },
                  {
                    name: "James Wilson",
                    company: "E-commerce Plus",
                    role: "CTO",
                    review:
                      "The technical excellence and creative vision of this team is unmatched. They solved complex problems with elegant solutions.",
                    rating: 5,
                    avatar: "JW",
                  },
                  {
                    name: "Anna Martinez",
                    company: "Fashion Forward",
                    role: "Brand Manager",
                    review:
                      "The CGI product visualizations they created were so realistic, our customers thought they were photographs. Amazing work!",
                    rating: 5,
                    avatar: "AM",
                  },
                  {
                    name: "Robert Kim",
                    company: "FinTech Solutions",
                    role: "Product Manager",
                    review:
                      "Lucid Studio's AI integration transformed our platform. The user experience is now intuitive and incredibly powerful.",
                    rating: 5,
                    avatar: "RK",
                  },
                ]
                  .concat([
                    {
                      name: "Sarah Johnson",
                      company: "TechFlow Inc.",
                      role: "CEO",
                      review:
                        "Lucid Studio transformed our vision into reality. Their CGI work is absolutely stunning and exceeded all our expectations.",
                      rating: 5,
                      avatar: "SJ",
                    },
                    {
                      name: "Michael Chen",
                      company: "Digital Dynamics",
                      role: "Creative Director",
                      review:
                        "The AI solutions they developed for us increased our productivity by 300%. Incredible team with amazing technical skills.",
                      rating: 5,
                      avatar: "MC",
                    },
                    {
                      name: "Emily Rodriguez",
                      company: "StartupX",
                      role: "Founder",
                      review:
                        "From concept to launch, Lucid Studio delivered a mobile app that our users absolutely love. Professional and innovative.",
                      rating: 5,
                      avatar: "ER",
                    },
                    {
                      name: "David Thompson",
                      company: "Global Brands Co.",
                      role: "Marketing Manager",
                      review:
                        "Their web development expertise helped us create an immersive experience that boosted our conversions by 150%.",
                      rating: 5,
                      avatar: "DT",
                    },
                    {
                      name: "Lisa Park",
                      company: "Creative Agency",
                      role: "Art Director",
                      review:
                        "Working with Lucid Studio was seamless. They understood our brand perfectly and delivered beyond our wildest dreams.",
                      rating: 5,
                      avatar: "LP",
                    },
                    {
                      name: "James Wilson",
                      company: "E-commerce Plus",
                      role: "CTO",
                      review:
                        "The technical excellence and creative vision of this team is unmatched. They solved complex problems with elegant solutions.",
                      rating: 5,
                      avatar: "JW",
                    },
                    {
                      name: "Anna Martinez",
                      company: "Fashion Forward",
                      role: "Brand Manager",
                      review:
                        "The CGI product visualizations they created were so realistic, our customers thought they were photographs. Amazing work!",
                      rating: 5,
                      avatar: "AM",
                    },
                    {
                      name: "Robert Kim",
                      company: "FinTech Solutions",
                      role: "Product Manager",
                      review:
                        "Lucid Studio's AI integration transformed our platform. The user experience is now intuitive and incredibly powerful.",
                      rating: 5,
                      avatar: "RK",
                    },
                  ])
                  .map((review, index) => (
                    <div key={index} className="flex-shrink-0 w-80 sm:w-96 opacity-0 animate-fade-in-up animate-delay-300">
                      <div className="service-card p-8 rounded-2xl h-full">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-sm">{review.avatar}</span>
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-lg">{review.name}</h3>
                            <p className="text-orange-500 text-sm">{review.role}</p>
                            <p className="text-gray-400 text-xs">{review.company}</p>
                          </div>
                        </div>

                        <div className="flex mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-orange-500 text-lg">
                              ★
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-300 leading-relaxed italic">"{review.review}"</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
