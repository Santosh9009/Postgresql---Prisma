import { PrismaClient } from "@prisma/client";


const prisma  = new PrismaClient();

async function main(){
  await prisma.post.create({
    data:{
      title:"title1",
      content: 'Ridding a horse',
      published: false,
      author:{
        connect:{
          id:2
        }
      },
    }
  })
}

main()