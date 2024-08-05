import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
// import type { User } froopenssl rand -base64 32m '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
async function getUser(email: string) {
  try {
    const user = await sql `SELECT * from employee where employeename=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ employeename: z.string(), employeecity: z.string()})
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { employeename, employeecity } = parsedCredentials.data;
          const user = await getUser(employeename);
          if (!user) return null;
          // const passwordsMatch = await bcrypt.compare(employeecity, user.employeecity);
          
          // if (passwordsMatch) 
          console.log(user);
          return user;
          // revalidatePath("/dashboard/invoices");
          // redirect("/dashboard/invoices");
        }
 
        console.log('Invalid credentials');
        return null;
        }
    }),
  ],
});