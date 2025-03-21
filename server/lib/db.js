// Name:YASH GUPTA, Email:yashgtech00@gmail.com, Number:7879758136, School management Repository, Full Assignment to Codesore Technology



import { PrismaClient } from "@prisma/client"  

const prismaClientSingleton = () => {  
  return new PrismaClient();  
};  

const globalForPrisma = globalThis || global; // Support for environments not using globalThis  

const prisma = globalForPrisma.prisma || prismaClientSingleton();  

export default prisma;  

if (process.env.NODE_ENV !== "production") {  
  globalForPrisma.prisma = prisma;  
}  




// Name:YASH GUPTA, Email:yashgtech00@gmail.com, Number:7879758136, School management Repository, Full Assignment to Codesore Technology