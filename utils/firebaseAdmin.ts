// utils/firebaseAdmin.ts

import admin from 'firebase-admin';
import fs from 'fs';

// Load the Firebase service account key from the file
const serviceAccount = JSON.parse(fs.readFileSync('./firebase-admin-key.json', 'utf-8'));

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

// Function to get a list of authenticated users
export async function getAuthenticatedUsers() {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const users = listUsersResult.users.map((userRecord) => ({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      // Add more user data as needed
    }));
    return users;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return [];
  }
}