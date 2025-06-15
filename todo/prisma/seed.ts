import { PrismaClient } from '@prisma/client'
// import {faker} from "@faker-js/faker"
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.todo.createMany({
  //   data: Array.from({ length: 25 }, () => {
  //     return {
  //       title: faker.lorem.words({min: 3, max: 6}),
  //       body: faker.lorem.words({min: 6, max: 12}),
       

       

  //     }
  //   }),
  // })

}

main()
.catch(async (e) => {
console.error(e)
process.exit(1)
})
.finally(async () => {
await prisma.$disconnect()
})