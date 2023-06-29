import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgetPasswordController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

// router object
const router = express.Router();

// routing
// RIGISTER ||MOTHOD POST
router.post("/register", registerController);

// test rutes
router.get("/test", requireSignIn, isAdmin, testController);

// FOR LOGIN METHOD  creating route
router.post("/login", loginController);

// forget password
router.post("/forget-password", forgetPasswordController);

// protected user auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected admin auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
