import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: "Lucid Studio | Creative Technology Studio",
  description:
    "Lucid Studio - Cutting-edge creative technology specializing in CGI, AI, mobile apps, and web development. Based in San Francisco, California.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="gpu-accelerated bg-black text-white overflow-x-hidden custom-cursor">
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
