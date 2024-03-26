import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){
//  const users =  await prisma.user.findMany({})
//  console.log(users)

 const users2 = await prisma.user.findUnique({
  where:{
    id:1
  },
  include:{
    posts:{
      select:{
        title:true
      }
    }
  }

 })
 console.log(users2);
}

main();