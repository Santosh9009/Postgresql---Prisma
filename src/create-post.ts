import { PrismaClient } from "@prisma/client";


const prisma  = new PrismaClient();

async function main(){
  await prisma.post.create({
    data:{
      title:"title3",
      content: 'Playing gta today',
      published: false,
      author:{
        connect:{
          id:1
        }
      },
    }
  })
}

main()