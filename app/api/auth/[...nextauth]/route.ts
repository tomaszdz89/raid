import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/db'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // const user = { "id": "1", "name": "Zbychu", "email": "test@test.pl"}
        // if (!credentials?.username || !credentials?.password) {
        //   return null
        // }
        // return user
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
            password: credentials?.password,
          },
        })

        if (!user) {
          console.log('fail')
          return null
        }

        console.log('userrrrrrr', user)

        return {
          id: user?.id + '',
          name: user?.username,
          email: user?.email,
          gold: user?.gold,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user, session }) {
      console.log('jwt cb', { token, user, session })

      if (user) {
        return {
          ...token,
          id: user.id,
          gold: user.gold,
        }
      }
      return token
    },
    async session({ session, token, user }) {
      console.log('session cb', { session, token, user })
      // return session

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          gold: token.gold,
          test: 'test',
        },
      }

      // return session
    },
  },
  // callbacks: {
  //   session: () => {

  //   },
  //   jwt: ({token, user}) => {

  //   }
  // }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
