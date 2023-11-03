const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  //   res.send("<h1>Hello from Express!</h1>");
  //   res.sendFile('./views/shop.html'); // incorrect path
  //   res.sendFile(path.join(__dirname, "../", "views", "shop.html")); // linux uses / and windows uses \ so use this syntax to join to automatically detect system and cover both
  // console.log("shop.js", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
