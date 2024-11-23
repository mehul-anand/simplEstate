import express from "express";
import cors from "cors"
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js"
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
app.use(express.json()); // Fixed here
app.use(cookieParser())

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/user", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.use("/", (req, res) => {
  res.send("main page");
});

app.listen(8800, () => {
  console.log("the server is running!");
});
