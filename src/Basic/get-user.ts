import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const users = await prisma.user.findMany({
    where:{
      email:"pati@gmail.com"
    },
    include:{
      posts:true,
    }
  })
  for(let user of users){
    console.log(user);
  }
}

main();