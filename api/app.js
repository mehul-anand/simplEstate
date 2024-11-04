import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
app.use(express.json()); // Fixed here

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);

app.use("/", (req, res) => {
  res.send("main page");
});

app.listen(8800, () => {
  console.log("the server is running!");
});
