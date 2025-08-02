# Firebase Setup Guide

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "lucid-studio-app")
4. Enable Google Analytics (optional)
5. Create project

## 2. Enable Authentication

1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

## 3. Create Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Click "Done"

## 4. Firebase Configuration ✅ COMPLETED

Your Firebase configuration has been automatically set up with the following details:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB-AZx0taFU7XxbKaU0SyWbSR_4HSk4WvY",
  authDomain: "lucid-36114.firebaseapp.com",
  projectId: "lucid-36114",
  storageBucket: "lucid-36114.firebasestorage.app",
  messagingSenderId: "58292737778",
  appId: "1:58292737778:web:cd37bd113b4c8b8c8f226b",
  measurementId: "G-DTQ48PNPY3"
};
```

## 5. Environment Variables ✅ COMPLETED

The `.env.local` file has been automatically created with your Firebase configuration:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyB-AZx0taFU7XxbKaU0SyWbSR_4HSk4WvY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=lucid-36114.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=lucid-36114
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=lucid-36114.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=58292737778
NEXT_PUBLIC_FIREBASE_APP_ID=1:58292737778:web:cd37bd113b4c8b8c8f226b
NEXT_PUBLIC_ADMIN_EMAIL=admin@lucidstudio.com
```

## 6. Create Admin User ⚡ READY TO USE

1. ✅ Development server is running on: `http://localhost:3003`
2. ✅ Admin panel is available at: `http://localhost:3003/admin`
3. **Next Steps:**
   - Go to [Firebase Console](https://console.firebase.google.com/project/lucid-36114/authentication/users)
   - Click "Add user"
   - Enter email: `admin@lucidstudio.com`
   - Set a password (remember this!)
   - Now you can login to the admin panel at `http://localhost:3003/admin`

## 🚀 Your App is Ready!

**Main Website:** http://localhost:3003
**Admin Panel:** http://localhost:3003/admin

## 7. Firestore Security Rules (Production)

For production, update Firestore rules to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all users
    match /{document=**} {
      allow read: if true;
    }
    
    // Allow write access only to authenticated admin users
    match /brands/{document} {
      allow write: if request.auth != null && request.auth.token.email == "admin@lucidstudio.com";
    }
    
    match /projects/{document} {
      allow write: if request.auth != null && request.auth.token.email == "admin@lucidstudio.com";
    }
  }
}
```

## 8. Features Available

### For Admin Users:
- Access to `/admin` dashboard
- Add/edit/delete brands
- Add/edit/delete projects
- Settings icon in navigation

### For Viewers:
- View all content
- Cannot access admin panel
- Cannot modify any data
- Responsive design on all devices

## 9. Usage

1. **Adding Brands**: Go to Admin > Brands tab > Add Brand
2. **Adding Projects**: Go to Admin > Projects tab > Add Project
3. **Managing Content**: Edit or delete existing items from the admin panel

The website will automatically display Firebase data when available, and fall back to default content when no data exists.
