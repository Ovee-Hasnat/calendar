// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"

// const authOptions = NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // ...add more providers here
//   ],
//   secret: process.env.NEXTAUTH_SECRET,

//   callbacks: {
//     async jwt({ token, account }) {
//       if (account) {
//         token = Object.assign({}, token, {
//           access_token: account.access_token,
//         });
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session) {
//         session = Object.assign({}, session, {
//           access_token: token.access_token,
//         });
//         //console.log(session);
//       }
//       return session;
//     },
//   },
// });

// export { authOptions as GET, authOptions as POST }