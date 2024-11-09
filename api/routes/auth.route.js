import express from "express";
import {
  loginFunc,
  registerFunc,
  logoutFunc
} from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/login", loginFunc);

authRoute.post("/register", registerFunc);

authRoute.post("/logout",logoutFunc)

export default authRoute