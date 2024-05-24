import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export default async function AddUser() {
    console.log("AddUser");
    const existingUser = await prisma.users.findUnique({
        where: {
          email: 'alice2@example.com',
        },
      });
      
      if (!existingUser) {
        const newUser = await prisma.users.create({
          data: {
            name: 'Alice2',
            email: 'alice2@example.com',
          },
        });
      }
}