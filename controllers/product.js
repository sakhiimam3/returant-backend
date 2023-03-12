const Product = require("../schema/Allproduct.js");

const allproduct = async (req, res) => {
  const { title, price, quantity } = req.body;
  const img = req.file.filename;
  console.log(img, "baba");
  const newProduct = new Product({
    title,
    price,
    img,
    quantity,
  });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getallproduct = async (req, res) => {
  try {
    const allproducts = await Product.find({});
    res.status(201).json(allproducts);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  allproduct,
  getallproduct,
};
