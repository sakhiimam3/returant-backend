const express = require("express");
const router = express.Router();
const upload = require("../middleware/uplaod");
const { allproduct, getallproduct } = require("../controllers/product.js");

router.post("/allproducts", upload.single("img"), allproduct);
router.get("/products", getallproduct);

module.exports = router;
