const express =require("express");
const { isAdmin, requiresSignIn } = require("../middlewares/authMiddleware.js");

const {
  createCategoryController,
  deleteSingleCategoriesController,
  getCategoriesController,
  singleCategoriesController,
  updateCategoryController
} = require("../controllers/categoryController.js");


const router = express.Router();

//Routes

//create category
router.post(
  "/create-category",
  requiresSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put("/update-category/:id", requiresSignIn, updateCategoryController);

// get all categories
router.get("/get-categories", getCategoriesController);

// get single category
router.get("/single-category/:cid", singleCategoriesController);

// detelet single category
router.delete("/detele-single-category/:id",requiresSignIn, isAdmin, deleteSingleCategoriesController);

module.exports = router;
