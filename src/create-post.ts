import { PrismaClient } from "@prisma/client";
import { userInfo } from "os";


const prisma  = new PrismaClient();

async function main(){
  await prisma.post.create({
    data:{
      title:"Weather",
      content: 'What an lovely weather today',
      published: true,
      author:{
        connect:{
          id:1
        }
      },
    }
  })
}

main()