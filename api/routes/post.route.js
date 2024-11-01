import express from "express";

const postRoute = express.Router();

postRoute.get("/test", (req, res) => {
  res.send("Test route is working!");
});
postRoute.post("/test", (req, res) => {
  res.send("Test route is working!");
});
postRoute.put("/test", (req, res) => {
  res.send("Test route is working!");
});
postRoute.delete("/test", (req, res) => {
  res.send("Test route is working!");
});

export default postRoute;
