import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const user = await prisma.user.findMany({
    where:{
      email:{
        endsWith:'@gmail.com'
      },
      posts:{
        some:{
          published:true
        }
      }
    },
    include:{
      posts:{
        where:{
          published:false
        }
      }
    }
  })
  console.log(user);
  
}

main();