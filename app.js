const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT;
const ProductManager = require("./productManager");
const { createFile, productsIncorporated, validateNumber } = require("./products");
const path = "./products.json";
createFile(path);
const myProductManager = new ProductManager(path);
myProductManager.loadInitialProducts(productsIncorporated);

app.get("/", (req, res) => {
  res.send(productsIncorporated);
});

/** GET ALL PRODUCTS */
app.get("/api/products", async (req, res) => {
  try {
    const products = await myProductManager.getProducts();
    const limit = req.query.limit;
    const isValidLimit = validateNumber(limit);
    products
        ? isValidLimit
        ? res.json(products.slice(0, limit))
        : res.json(products)
        : res.json({ error: "Sorry, no products found" });
    } catch (err) {
    console.log("getProducts", err);
    }
});

/** GET PRODUCT BY ID */
app.get("/api/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const isValidId = validateNumber(id);
        if (!isValidId) {
        res.json({ error: "Sorry, invalid id" });
        return;
    }
    const product = await myProductManager.getProductById(req.params.id);
        product
        ? res.json(product)
        : res.json({ error: "Sorry, no product found by id: " + req.params.id });
    } catch (err) {
    console.log("getProductById", err);
    }
});

try {
    app.listen(PORT, () =>
        console.log(
        `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
        )
    );
} catch (error) {
    console.log("Error al iniciar servidor", error);
}