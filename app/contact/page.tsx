"use client"

import { StatusBar } from "@/components/status-bar"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { LucidLogo } from "@/components/lucid-logo"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Github, DribbbleIcon as Behance } from "lucide-react"

export default function ContactPage() {
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
              GET IN
              <br />
              <span className="text-orange-500">TOUCH</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed opacity-0 animate-fade-in-up animate-delay-600 max-w-4xl mx-auto">
              Ready to bring your vision to life? Let's start a conversation about your next project.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-8xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Contact Information */}
              <div className="opacity-0 animate-fade-in-left animate-delay-300">
                <h2 className="text-4xl font-bold text-white mb-12">
                  CONTACT <span className="text-orange-500">INFORMATION</span>
                </h2>

                <div className="space-y-10">
                  {/* Office Address */}
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500/20 p-4 rounded-2xl">
                      <MapPin className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Studio Location</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        123 Creative Avenue
                        <br />
                        San Francisco, CA 94103
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500/20 p-4 rounded-2xl">
                      <Mail className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
                      <p className="text-gray-300 mb-2">General Inquiries:</p>
                      <a
                        href="mailto:hello@lucidstudio.com"
                        className="text-orange-500 hover:text-orange-400 transition-colors text-lg"
                      >
                        hello@lucidstudio.com
                      </a>
                      <p className="text-gray-300 mt-4 mb-2">Business Development:</p>
                      <a
                        href="mailto:business@lucidstudio.com"
                        className="text-orange-500 hover:text-orange-400 transition-colors text-lg"
                      >
                        business@lucidstudio.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500/20 p-4 rounded-2xl">
                      <Phone className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Phone</h3>
                      <p className="text-gray-300 mb-2">Studio Direct:</p>
                      <a
                        href="tel:+14155551234"
                        className="text-orange-500 hover:text-orange-400 transition-colors text-lg"
                      >
                        +1 (415) 555-1234
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500/20 p-4 rounded-2xl">
                      <Clock className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Business Hours</h3>
                      <div className="text-gray-300 space-y-2 text-lg">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                        <p>Sunday: Closed</p>
                        <p className="text-orange-500 text-base mt-3">Emergency projects: 24/7 available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-white mb-8">Follow Our Work</h3>
                  <div className="flex space-x-6">
                    {[
                      { icon: Instagram, href: "https://instagram.com/lucidstudio", label: "Instagram" },
                      { icon: Linkedin, href: "https://linkedin.com/company/lucidstudio", label: "LinkedIn" },
                      { icon: Github, href: "https://github.com/lucidstudio", label: "GitHub" },
                      { icon: Behance, href: "https://behance.net/lucidstudio", label: "Behance" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500/20 p-4 rounded-2xl hover:bg-orange-500 hover:scale-110 transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="opacity-0 animate-fade-in-right animate-delay-600">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
