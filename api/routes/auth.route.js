import express from "express";
import {
  loginFunc,
  logoutFunc,
  registerFunc,
} from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/login", loginFunc);

authRoute.post("/register", registerFunc);

authRoute.post("/logout", logoutFunc);

export default authRoute