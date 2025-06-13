import { PrismaClient } from '@prisma/client'
import {faker} from "@faker-js/faker"
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
await prisma.user.createMany({
  data:Array.from({ length: 25 }, () => {
    return(
      {
        email:faker.internet.email(),
        name:faker.person.fullName(),
        address:{
          city:faker.location.city(),
          state:faker.location.state(),
          street:faker.location.street(),
          zip:faker.location.zipCode(),
        }
    }
    )
  
})
})
}

main()
.catch(async (e) => {
console.error(e)
process.exit(1)
})
.finally(async () => {
await prisma.$disconnect()
})