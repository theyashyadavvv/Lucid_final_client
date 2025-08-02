"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, Shield, Users, Briefcase } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [userType, setUserType] = useState("client")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    company: "",
    role: ""
  })

  const { signIn, signUp, user } = useAuth()
  const router = useRouter()

  // Redirect if already logged in
  if (user) {
    router.push("/dashboard")
    return null
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent, type: string) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      if (type === "signin") {
        await signIn(formData.email, formData.password)
        // Redirect based on user type
        if (formData.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
          router.push("/admin")
        } else {
          router.push("/dashboard")
        }
      } else if (type === "signup") {
        await signUp(formData.email, formData.password)
        setMessage("Account created successfully! Please check your email to verify your account.")
      }
    } catch (error: any) {
      setMessage(error.message || "An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg"></div>
            <span className="text-2xl font-bold text-white">Lucid Studio</span>
          </div>
          <p className="text-gray-400">Access your project dashboard and manage your creative work.</p>
        </div>

        {/* User Type Selection */}
        <div className="mb-6">
          <Label className="text-white mb-3 block">I am a:</Label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setUserType("client")}
              className={`p-3 rounded-lg border transition-all ${
                userType === "client"
                  ? "border-orange-500 bg-orange-500/20 text-orange-500"
                  : "border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600"
              }`}
            >
              <Users className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs">Client</span>
            </button>
            <button
              type="button"
              onClick={() => setUserType("freelancer")}
              className={`p-3 rounded-lg border transition-all ${
                userType === "freelancer"
                  ? "border-orange-500 bg-orange-500/20 text-orange-500"
                  : "border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600"
              }`}
            >
              <User className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs">Freelancer</span>
            </button>
            <button
              type="button"
              onClick={() => setUserType("admin")}
              className={`p-3 rounded-lg border transition-all ${
                userType === "admin"
                  ? "border-orange-500 bg-orange-500/20 text-orange-500"
                  : "border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600"
              }`}
            >
              <Shield className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs">Admin</span>
            </button>
          </div>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900 border border-orange-500/20">
            <TabsTrigger
              value="signin"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <Card className="bg-gray-900 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-white">
                  Sign In as {userType === "admin" ? "Admin" : userType === "freelancer" ? "Freelancer" : "Client"}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {userType === "admin"
                    ? "Access admin dashboard to manage content"
                    : userType === "freelancer"
                    ? "Access your freelancer workspace"
                    : "Access your project dashboard and collaborate with our team"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, "signin")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder={userType === "admin" ? "admin@lucidstudio.com" : "Enter your email"}
                        className="pl-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="remember" className="rounded" />
                      <Label htmlFor="remember" className="text-sm text-gray-400">
                        Remember me
                      </Label>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-orange-500 hover:text-orange-400"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : `Sign In as ${userType === "admin" ? "Admin" : userType === "freelancer" ? "Freelancer" : "Client"}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="bg-gray-900 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-white">
                  Create {userType === "admin" ? "Admin" : userType === "freelancer" ? "Freelancer" : "Client"} Account
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {userType === "admin"
                    ? "Create admin account to manage the platform"
                    : userType === "freelancer"
                    ? "Join our creative team as a freelancer"
                    : "Start your creative journey with Lucid Studio"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, "signup")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-white">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="fullname"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {userType !== "admin" && (
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        {userType === "freelancer" ? "Specialization" : "Company/Organization"}
                      </Label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="company"
                          type="text"
                          placeholder={userType === "freelancer" ? "e.g., 3D Artist, UI/UX Designer" : "Enter your company name"}
                          className="pl-10 bg-gray-800 border-gray-700 text-white"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-white">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10 bg-gray-800 border-gray-700 text-white"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded" required />
                    <Label htmlFor="terms" className="text-sm text-gray-400">
                      I agree to the{" "}
                      <a href="#" className="text-orange-500 hover:text-orange-400">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-orange-500 hover:text-orange-400">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : `Create ${userType === "admin" ? "Admin" : userType === "freelancer" ? "Freelancer" : "Client"} Account`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {message && (
          <Alert className="mt-4 border-orange-500/20 bg-orange-500/10">
            <AlertDescription className="text-orange-300">{message}</AlertDescription>
          </Alert>
        )}

        {/* Quick Access Info */}
        <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-orange-500/20">
          <h3 className="text-white font-medium mb-2">Quick Access:</h3>
          <div className="space-y-1 text-sm text-gray-400">
            <p><span className="text-orange-500">Admin:</span> Full platform management</p>
            <p><span className="text-orange-500">Freelancer:</span> Project collaboration workspace</p>
            <p><span className="text-orange-500">Client:</span> Project dashboard and communication</p>
          </div>
        </div>
      </div>
    </div>
  )
}
