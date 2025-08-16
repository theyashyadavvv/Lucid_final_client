import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || process.env.next_public_firebase_api_key,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || process.env.next_public_firebase_auth_domain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.next_public_firebase_project_id,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || process.env.next_public_firebase_storage_bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || process.env.next_public_firebase_messaging_sender_id,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || process.env.next_public_firebase_app_id
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
