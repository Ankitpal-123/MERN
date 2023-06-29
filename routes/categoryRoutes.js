import express from "express";

import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  getCategoryController,
  singleCategoryController,
} from "../controller/categoryController.js";

const router = express.Router();

// routes

// createcategory
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//updateategory
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// getall cateogry
router.get("/get-category", getCategoryController);

// single category
router.get("/single-category/:slug ", singleCategoryController);

export default router;
