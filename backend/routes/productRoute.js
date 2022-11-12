import { Router } from "express";
import { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } from "../controllers/productController.js";
const router=Router();
import {isAuthenticatedUser  , authorizeRoles} from "../middleware/aurhentication.js";

router.route("/products").get(  getAllProducts);
router.route("/product/new").post(  isAuthenticatedUser  , authorizeRoles("admin"), createProduct);
router.route("/product/:id").put( isAuthenticatedUser  , authorizeRoles("admin"), updateProduct)
                            .delete( isAuthenticatedUser  , authorizeRoles("admin"), deleteProduct )
                            .get(isAuthenticatedUser  , getProductDetails);

export default router;