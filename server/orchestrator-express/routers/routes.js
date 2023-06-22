const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/ogetusers", Controller.oGetUser);
router.post("/opostusers", Controller.oPostUser);
router.delete("/odeleteusers/:id", Controller.oDelUser);

router.get("/ogetproducts", Controller.oGetProducts);
router.get("/ogetbyidp/:id", Controller.oGetByidP);
router.post("/opostproducts", Controller.oPostProduct);
router.put("/oeditproducts", Controller.oEditProduct);
router.delete("/odeleteproducts/:id", Controller.oDeleteProduct);

module.exports = router;
