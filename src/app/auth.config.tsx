// import { user } from '@nextui-org/react';
// import { request } from 'http';
// import type { NextAuthConfig } from 'next-auth';
// import { getSession } from 'next-auth/react';
 
// export const authConfig = {
//   providers: [],
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL('/dashboard', nextUrl));
//       }
//       return true;
//     },  
//   },
// } satisfies NextAuthConfig;


// // import { NextAuthConfig } from 'next-auth';

// // export const authConfig: NextAuthConfig = {
// //   providers: [],
// //   pages: {
// //     signIn: '/login',
// //     // Add any other custom pages if needed
// //   },
// //   callbacks: {
// //     async redirect({ url, baseUrl }) {
// //       // Ensure the redirection is to the base URL or a safe URL
// //       if (url.startsWith('/dashboard')) {
// //         console.log("URL : "+ url);
// //         console.log("BaseURL : "+baseUrl);
// //         return Promise.resolve(`${baseUrl}/dashboard`);
// //       }
// //       return Promise.resolve(baseUrl);
// //     },
// //     async session({ session, user }) {
// //       // You can pass additional data to the session here
// //       session.user = user;
// //       return session;
// //     },
// //   },
// // };
