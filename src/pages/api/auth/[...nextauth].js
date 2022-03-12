import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

if (!process.env.FACEBOOK_ID || !process.env.FACEBOOK_SECRET) {
  throw new Error('Please define FACEBOOK_ID and FACEBOOK_SECRET in .env.local');
}

export default NextAuth({
  pages: {
    signIn: '/home',
    error: '/home'
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + '/registration';
    },

    async signIn({ user, account, profile, email }) {
      console.log(user)
      return !!(user && user.id);
    }
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ],
  debug: false,
});
