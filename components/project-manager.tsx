'use client'

import { useState, useEffect } from 'react'
import { projectService, Project } from '@/lib/firebase-service'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Plus, Edit, Trash2, Star, X } from 'lucide-react'
import { storage } from '@/lib/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { toast } from '@/hooks/use-toast'

export function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'WEB' as 'CGI' | 'AI' | 'MOBILE' | 'WEB',
    image: '',
    color: 'from-orange-500/20 to-red-500/20',
    year: new Date().getFullYear().toString(),
    client: '',
    capabilities: [] as string[],
    href: '',
    featured: false
  })
  const [newCapability, setNewCapability] = useState('')

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      setLoading(true)
      const data = await projectService.getAll()
      setProjects(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (file: File) => {
    const storageRef = ref(storage, `projects/${Date.now()}_${file.name}`)
    await uploadBytes(storageRef, file)
    return await getDownloadURL(storageRef)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      let imageUrl = formData.image
      if (formData.image instanceof File) {
        imageUrl = await handleImageUpload(formData.image)
      }
      if (editingProject) {
        await projectService.update(editingProject.id!, { ...formData, image: imageUrl })
        toast({ title: 'Project updated successfully', description: formData.title })
      } else {
        await projectService.create({ ...formData, image: imageUrl })
        toast({ title: 'Project created successfully', description: formData.title })
      }
      await loadProjects()
      setIsDialogOpen(false)
      resetForm()
    } catch (error: any) {
      setError(error.message)
      toast({ title: 'Error', description: error.message, variant: 'destructive' })
    }
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      image: project.image,
      color: project.color,
      year: project.year,
      client: project.client,
      capabilities: project.capabilities,
      href: project.href || '',
      featured: project.featured || false
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      await projectService.delete(id)
      await loadProjects()
    } catch (error: any) {
      setError(error.message)
    }
  }

  const addCapability = () => {
    if (newCapability.trim() && !formData.capabilities.includes(newCapability.trim())) {
      setFormData({
        ...formData,
        capabilities: [...formData.capabilities, newCapability.trim()]
      })
      setNewCapability('')
    }
  }

  const removeCapability = (capability: string) => {
    setFormData({
      ...formData,
      capabilities: formData.capabilities.filter(c => c !== capability)
    })
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'WEB',
      image: '',
      color: 'from-orange-500/20 to-red-500/20',
      year: new Date().getFullYear().toString(),
      client: '',
      capabilities: [],
      href: '',
      featured: false
    })
    setEditingProject(null)
    setNewCapability('')
  }

  const openDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  const colorOptions = [
    { value: 'from-orange-500/20 to-red-500/20', label: 'Orange to Red' },
    { value: 'from-blue-500/20 to-purple-500/20', label: 'Blue to Purple' },
    { value: 'from-green-500/20 to-teal-500/20', label: 'Green to Teal' },
    { value: 'from-purple-500/20 to-pink-500/20', label: 'Purple to Pink' },
    { value: 'from-cyan-500/20 to-blue-500/20', label: 'Cyan to Blue' },
    { value: 'from-indigo-500/20 to-purple-500/20', label: 'Indigo to Purple' }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Project Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openDialog} className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 border-orange-500/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</DialogTitle>
              <DialogDescription className="text-gray-400">
                {editingProject ? 'Update project information' : 'Add a new project to showcase'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Project Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value: any) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="CGI">CGI</SelectItem>
                      <SelectItem value="AI">AI</SelectItem>
                      <SelectItem value="MOBILE">Mobile</SelectItem>
                      <SelectItem value="WEB">Web</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-gray-800 border-gray-700"
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="client">Client</Label>
                  <Input
                    id="client"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image">Image/Icon</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFormData({ ...formData, image: e.target.files[0] })
                    }
                  }}
                  className="bg-gray-800 border-gray-700"
                />
                {typeof formData.image === 'string' && formData.image && formData.image.startsWith('http') && (
                  <img src={formData.image} alt="Project preview" className="mt-2 w-16 h-16 object-contain rounded" />
                )}
              </div>

              <div>
                <Label htmlFor="color">Color Scheme</Label>
                <Select value={formData.color} onValueChange={(value) => setFormData({ ...formData, color: value })}>
                  <SelectTrigger className="bg-gray-800 border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    {colorOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="href">Project Link (Optional)</Label>
                <Input
                  id="href"
                  value={formData.href}
                  onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                  className="bg-gray-800 border-gray-700"
                  placeholder="/work/project-slug"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData({ ...formData, featured: !!checked })}
                />
                <Label htmlFor="featured">Featured Project</Label>
              </div>

              <div>
                <Label>Capabilities</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newCapability}
                    onChange={(e) => setNewCapability(e.target.value)}
                    placeholder="Add capability"
                    className="bg-gray-800 border-gray-700"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCapability())}
                  />
                  <Button type="button" onClick={addCapability} size="sm">
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.capabilities.map((capability) => (
                    <Badge key={capability} variant="secondary" className="bg-orange-500/20 text-orange-300">
                      {capability}
                      <button
                        type="button"
                        onClick={() => removeCapability(capability)}
                        className="ml-1 hover:text-red-400"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              {error && (
                <Alert className="border-red-500/20 bg-red-500/10">
                  <AlertDescription className="text-red-400">{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex gap-2">
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                  {editingProject ? 'Update' : 'Create'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {error && (
        <Alert className="border-red-500/20 bg-red-500/10">
          <AlertDescription className="text-red-400">{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="bg-gray-900 border-orange-500/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}>
                    {project.image.startsWith('http') ? (
                      <img src={project.image} alt={project.title} className="w-8 h-8 object-contain" />
                    ) : (
                      project.image
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-white flex items-center gap-2">
                      {project.title}
                      {project.featured && <Star className="w-4 h-4 text-orange-500" />}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEdit(project)}
                    className="text-gray-400 hover:text-white"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(project.id!)}
                    className="text-gray-400 hover:text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 mb-3">
                {project.description}
              </CardDescription>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Client:</span> {project.client} | <span className="font-medium">Year:</span> {project.year}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.capabilities.slice(0, 3).map((capability) => (
                    <Badge key={capability} variant="secondary" className="text-xs bg-gray-800">
                      {capability}
                    </Badge>
                  ))}
                  {project.capabilities.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gray-800">
                      +{project.capabilities.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {projects.length === 0 && !loading && (
        <div className="text-center py-8">
          <p className="text-gray-400">No projects added yet. Click "Add Project" to get started.</p>
        </div>
      )}
    </div>
  )
}
