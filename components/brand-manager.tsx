'use client'

import { useState, useEffect } from 'react'
import { brandService, Brand } from '@/lib/firebase-service'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react'

export function BrandManager() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    description: '',
    website: ''
  })

  useEffect(() => {
    loadBrands()
  }, [])

  const loadBrands = async () => {
    try {
      setLoading(true)
      const data = await brandService.getAll()
      setBrands(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      if (editingBrand) {
        await brandService.update(editingBrand.id!, formData)
      } else {
        await brandService.create(formData)
      }
      
      await loadBrands()
      setIsDialogOpen(false)
      resetForm()
    } catch (error: any) {
      setError(error.message)
    }
  }

  const handleEdit = (brand: Brand) => {
    setEditingBrand(brand)
    setFormData({
      name: brand.name,
      logo: brand.logo,
      description: brand.description,
      website: brand.website || ''
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this brand?')) return

    try {
      await brandService.delete(id)
      await loadBrands()
    } catch (error: any) {
      setError(error.message)
    }
  }

  const resetForm = () => {
    setFormData({ name: '', logo: '', description: '', website: '' })
    setEditingBrand(null)
  }

  const openDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

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
        <h2 className="text-xl font-semibold text-white">Brand Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openDialog} className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Brand
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 border-orange-500/20 text-white">
            <DialogHeader>
              <DialogTitle>{editingBrand ? 'Edit Brand' : 'Add New Brand'}</DialogTitle>
              <DialogDescription className="text-gray-400">
                {editingBrand ? 'Update brand information' : 'Add a new brand to showcase'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Brand Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div>
                <Label htmlFor="logo">Logo URL</Label>
                <Input
                  id="logo"
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  className="bg-gray-800 border-gray-700"
                  placeholder="https://example.com/logo.png"
                  required
                />
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
              <div>
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="bg-gray-800 border-gray-700"
                  placeholder="https://example.com"
                />
              </div>
              {error && (
                <Alert className="border-red-500/20 bg-red-500/10">
                  <AlertDescription className="text-red-400">{error}</AlertDescription>
                </Alert>
              )}
              <div className="flex gap-2">
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                  {editingBrand ? 'Update' : 'Create'}
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
        {brands.map((brand) => (
          <Card key={brand.id} className="bg-gray-900 border-orange-500/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-12 h-12 object-contain rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder-logo.png'
                    }}
                  />
                  <div>
                    <CardTitle className="text-white">{brand.name}</CardTitle>
                    {brand.website && (
                      <a 
                        href={brand.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-400 text-sm flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Website
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEdit(brand)}
                    className="text-gray-400 hover:text-white"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(brand.id!)}
                    className="text-gray-400 hover:text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                {brand.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {brands.length === 0 && !loading && (
        <div className="text-center py-8">
          <p className="text-gray-400">No brands added yet. Click "Add Brand" to get started.</p>
        </div>
      )}
    </div>
  )
}
