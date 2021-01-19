import express from 'express';
import { PrismaClient } from '@prisma/client';
// express 불러오기

const app = express();
const PORT = 3030;

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      userName: 'yugesh',
      email: 'uges@gmail.com',
      password: 'poklpokl',
      mobileNumber: '18787979',
      address: 'Busan',
    },
  });
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}
main();
app.get('/', (req, res) => {
  res.send('hi!!');
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
