import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { adminAuth, adminDb } from "./lib/firebase"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.email) {
        try {
          await adminDb.collection('users').doc(user.email).set({
            email: user.email,
            name: user.name,
            image: user.image,
            lastLogin: new Date().toISOString(),
          }, { merge: true });
        } catch (error) {
          console.error('Error saving user:', error);
        }
      }
      return true;
    },
  },
})
