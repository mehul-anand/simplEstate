import express from "express";
import { loggedInFunc,adminFunc } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const testRoute = express.Router();


testRoute.get("/should-be-logged-in",verifyToken,loggedInFunc)
testRoute.get("/should-be-admin",adminFunc)

export default testRoute