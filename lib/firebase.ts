import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const initAdmin = () => {
  if (getApps().length === 0) {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

    if (!privateKey || !projectId || !clientEmail) {
      console.error('Missing Firebase credentials:', {
        hasPrivateKey: !!privateKey,
        hasProjectId: !!projectId,
        hasClientEmail: !!clientEmail,
      });
      throw new Error('Missing Firebase Admin credentials in environment variables');
    }

    try {
      // Clean up the private key - handle multiple formats
      let formattedPrivateKey = privateKey;

      // If it has literal \n strings, replace them
      if (formattedPrivateKey.includes('\\n')) {
        formattedPrivateKey = formattedPrivateKey.replace(/\\n/g, '\n');
      }

      // Remove any extra quotes that might have been added
      formattedPrivateKey = formattedPrivateKey.replace(/^["']|["']$/g, '');

      // Ensure proper line breaks exist
      if (!formattedPrivateKey.includes('\n')) {
        // If there are no line breaks at all, try to add them
        formattedPrivateKey = formattedPrivateKey
          .replace(/-----BEGIN PRIVATE KEY-----/g, '-----BEGIN PRIVATE KEY-----\n')
          .replace(/-----END PRIVATE KEY-----/g, '\n-----END PRIVATE KEY-----');
      }

      return initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey: formattedPrivateKey,
        }),
      });
    } catch (error) {
      console.error('Firebase Admin initialization error:', error);
      throw error;
    }
  }
  return getApps()[0];
};

export const adminApp = initAdmin();
export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);
