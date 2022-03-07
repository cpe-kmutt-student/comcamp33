import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

if (!process.env.FACEBOOK_ID || !process.env.FACEBOOK_SECRET) {
  throw new Error('Please define FACEBOOK_ID and FACEBOOK_SECRET in .env.local');
}

export default NextAuth({
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    redirect({ url, baseUrl   }) {
      return baseUrl + '/registration';
    }
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ]
});
