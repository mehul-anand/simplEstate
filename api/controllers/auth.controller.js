import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const registerFunc = async (req, res) => {
  try {
    const { username, email, pass } = req.body;
    const hashedPass = await bcrypt.hash(pass, 7);
    console.log("Hashed password:", hashedPass);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPass, // 'password' matches the schema field name
      },
    });

    console.log("New user created:", newUser);
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error("Error in registerFunc:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const loginFunc = (req, res) => {
  // db operations
};
export const logoutFunc = (req, res) => {
  // db operations
};
