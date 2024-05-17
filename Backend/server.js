const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(express.json())
require("dotenv").config()
app.use(cors())
const productsSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }

})
const Products = mongoose.model("Product", productsSchema)
app.get("/products", async (req, res) => {
    const response = await Products.find()
    res.send(response)
})
app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    const result = await Products.findById(id)
    res.send(result)

})
app.delete("/products/:id", async (req, res) => {
    const { id } = req.params
    await Products.findByIdAndDelete(id)
    const item = await Products.find()
    res.send(item)
})
app.post("/products", async (req, res) => {
    const { image, title, price } = req.body
    const newProd = await new Products({ image: image, title: title, price: price })
    newProd.save()
    res.send(newProd)
})
app.put("/products/:id", async (req, res) => {
    const { id } = req.params
    await Products.findByIdAndUpdate(id, { ...req.body })
    res.send("item updated")
})

mongoose.connect(process.env.CONNECTION_STRING).then(res => {
    console.log("db connected");
})
app.listen(process.env.PORT, (req, res) => {
    console.log("bu server işə düşdü");
})
