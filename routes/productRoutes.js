const express =require("express");
const {
  isAdmin,
  requiresSignIn
} = require("../middlewares/authMiddleware.js");

const {
  createProductController,
  getProductController,
  getSingleProductController,
  deleteProductController,
  productPhotoController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController
} = require("../controllers/productController.js");

const formidable = require("express-formidable");

const router = express.Router();

// routes

// create product
router.post(
  "/create-product",
  requiresSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.get("/get-products", getProductController);
router.get("/get-product/:pid", getSingleProductController);

// photo route
router.get("/product-photo/:pid", productPhotoController);
//update product
router.put(
  "/update-product/:pid",
  requiresSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
// delete route
router.delete("/delete-product/:pid", deleteProductController);

// filter products
router.post("/product-filters", productFiltersController);

// filter products
router.get("/product-count", productCountController);

//products list
router.get("/product-list/:page", productListController);

//products list
router.get("/search/:keyword", searchProductController);

//similar products
router.get("/related-product/:pid/:cid", relatedProductController);

//category based products
router.get("/product-category/:cid", productCategoryController);

// //payment routes
// //token
// router.get("/braintree/token", braintreeTokenController);

// //paymenst
// router.post("/braintree/payment", requiresSignIn, brainTreePaymentController);
module.exports = router;
