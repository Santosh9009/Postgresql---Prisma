import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface updatedUser{
  Name: string
}

async function main(_id: number, updatedobj: updatedUser){
  await prisma.user.update({
    where:{
      id:_id,
    },
    data:{
      name:updatedobj.Name,
    }
  })
  
}

main(1,{Name:'Robin Uthapa'});