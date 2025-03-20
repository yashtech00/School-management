const { PrismaClient } = require("@prisma/client");  

const prismaClientSingleton = () => {  
  return new PrismaClient();  
};  

const globalForPrisma = globalThis || global; // Support for environments not using globalThis  

const prisma = globalForPrisma.prisma || prismaClientSingleton();  

module.exports = prisma;  

if (process.env.NODE_ENV !== "production") {  
  globalForPrisma.prisma = prisma;  
}  