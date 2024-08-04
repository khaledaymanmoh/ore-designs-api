import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const newUser = await prisma.user.create({
      data: {
        username: "new_user",
        password: "securepassword",
        email: "new.user@example.com1",
        first_name: "New User",
        last_name: "New User",
        phone: "123-456-7890",
        isEmployee: true,
        role_id: 1,
      },
    });
    console.log(newUser);
  } catch (e) {
    console.log("Error:", e);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
