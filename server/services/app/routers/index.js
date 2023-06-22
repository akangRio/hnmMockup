const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/Product", Controller.getProducts);
router.get("/Product/detail/:id", Controller.detailProduct);
router.get("/Category", Controller.getCategories);
router.post("/Product/add", Controller.addProduct);
router.delete("/Product/delete/:id", Controller.delProduct);
router.put("/Product/edit/:id", Controller.editProduct);

router.post("/Category/add", Controller.addCategory);
router.delete("/Category/delete/:id", Controller.delCategory);
router.put("/Category/edit/:id", Controller.editCategory);

router.get("/Images", Controller.getImages);

module.exports = router;
