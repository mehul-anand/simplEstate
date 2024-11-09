import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"
export const registerFunc = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPass, // 'password' matches the schema field name
      },
    });

    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    // console.error("Error in registerFunc:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginFunc = async (req, res) => {
  // db operations
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      // this is to get the value of the user
      where: {
        username, // finds a user based on the unique id
        // could also write username:username
      },
    });

    if (!user) {
      // if the user does not exists gives the apt messagae
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPassValid = await bcrypt.compare(password, user.password); //using user we already got from prisma client
    // this also compares the 2 passwords using the compare method

    if (!isPassValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // sending cookies after the password is matched

    // res.setHeader("Set-Cookie","test="+"myValue").json("success") -> without JWT method

    // res.cookie("test 2", "my value 2", { httpOnly: true, secure: true });

    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign({
      id:user.id
    },process.env.JWT_SECRET_KEY,{expiresIn:age})

    res
      .cookie("token", token, { httpOnly: true  ,maxAge : age})
      .status(200)
      .json({ message: "Login Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login" });
  }
};


export const logoutFunc = (req, res) => {
  res
    .clearCookie("token")  // Ensure the path and httpOnly match
    .status(200)
    .json({ message: "Logged out successfully" });
};


