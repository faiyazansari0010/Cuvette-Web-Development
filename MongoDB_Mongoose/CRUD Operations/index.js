const mongoose = require("mongoose");
const express = require("express");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connection established successfully !");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const Product = mongoose.model("product", productSchema);

const addProducts = async () => {
  try {
    const product1 = new Product({
      name: "Apple",
      price: 100,
      quantity: 5,
    });

    const product2 = new Product({
      name: "Mango",
      price: 200,
      quantity: 7,
    });

    const product3 = new Product({
      name: "Orange",
      price: 300,
      quantity: 9,
    });

    const addedProducts = await Product.insertMany([
      product1,
      product2,
      product3,
    ]);

    console.log(addedProducts);
  } catch (err) {
    console.log(err);
  }
};

addProducts();

const retrieveProducts = async () => {
  try {
    const productsData = await Product.find();
    console.log(productsData);
  } catch (err) {
    console.log(err);
  }
};

retrieveProducts();

const updateProduct = async (id) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: id },
      { $set: { quantity: 12 } },
      { new: true }
    );

    console.log(updatedProduct);
  } catch (err) {
    console.log(err);
  }
};

updateProduct("6849b73680f836e907fe860e");

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: id });
    console.log(deletedProduct)
  } catch (err) {
    console.log(err);
  }
};

deleteProduct("6849b73680f836e907fe860d");
