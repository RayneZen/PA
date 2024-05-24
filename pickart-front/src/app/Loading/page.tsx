// import { getSession } from 'next-auth/react';
// import { PrismaClient } from '@prisma/client';
// import { GetServerSideProps } from 'next';

// const prisma = new PrismaClient();

// interface Props {
//   session: any; // Замените any на тип вашей сессии
// }

// export default function Home({ session }: Props) {
//   if (session) {
//     const handleUserCreation = async () => {
//       const user = await prisma.users.findUnique({
//         where: {
//           email: session.user.email,
//         },
//       });

//       if (!user) {
//         const newUser = await prisma.users.create({
//           data: {
//             name: session.user.name,
//             email: session.user.email,
//           },
//         });
//         console.log('User created:', newUser);
//       }
//     };

//     handleUserCreation();
//   }
//   console.log(session);
//   return (
//     <div>
//       {/* Your page content */}
//     </div>
//   );
// }

// export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
//   const session = await getSession(context);

//   return {
//     props: {
//       session,
//     },
//   };
// };