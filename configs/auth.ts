import NextAuth, { User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { users } from '@/users';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const currentUser = users.find(
          (user) => user.email === credentials?.email
        );
        if(currentUser && currentUser.password === credentials.password ) {
          const {password, ...userWithOutPass} = currentUser
          return userWithOutPass as User
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  debug: true,
  pages: {
    signIn: 'signin',
  }
});
