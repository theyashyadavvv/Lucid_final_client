import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  Timestamp 
} from 'firebase/firestore'
import { db } from './firebase'

// Types
export interface Brand {
  id?: string
  name: string
  logo: string
  description: string
  website?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface Project {
  id?: string
  title: string
  description: string
  category: 'CGI' | 'AI' | 'MOBILE' | 'WEB'
  image: string
  color: string
  year: string
  client: string
  capabilities: string[]
  href?: string
  featured?: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Brand operations
export const brandService = {
  async create(brand: Omit<Brand, 'id' | 'createdAt' | 'updatedAt'>) {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, 'brands'), {
      ...brand,
      createdAt: now,
      updatedAt: now
    })
    return docRef.id
  },

  async getAll(): Promise<Brand[]> {
    const q = query(collection(db, 'brands'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Brand))
  },

  async update(id: string, brand: Partial<Omit<Brand, 'id' | 'createdAt'>>) {
    const docRef = doc(db, 'brands', id)
    await updateDoc(docRef, {
      ...brand,
      updatedAt: Timestamp.now()
    })
  },

  async delete(id: string) {
    const docRef = doc(db, 'brands', id)
    await deleteDoc(docRef)
  }
}

// Project operations
export const projectService = {
  async create(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, 'projects'), {
      ...project,
      createdAt: now,
      updatedAt: now
    })
    return docRef.id
  },

  async getAll(): Promise<Project[]> {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Project))
  },

  async getByCategory(category: string): Promise<Project[]> {
    const projects = await this.getAll()
    return projects.filter(project => project.category === category)
  },

  async update(id: string, project: Partial<Omit<Project, 'id' | 'createdAt'>>) {
    const docRef = doc(db, 'projects', id)
    await updateDoc(docRef, {
      ...project,
      updatedAt: Timestamp.now()
    })
  },

  async delete(id: string) {
    const docRef = doc(db, 'projects', id)
    await deleteDoc(docRef)
  }
}
