import { Router } from "express";
import { publishProduct, AllProduct, deleteProduct, editAllProduct, confirmmpleteEdit } from "../controller/user.controller.js";
const router = Router();

router.post('/product', publishProduct)
router.get('/products', AllProduct)
router.delete('/product/:id', deleteProduct)
router.get('/product/:id', editAllProduct)
router.put('/product/:id', confirmmpleteEdit)
export default router;