const router = require('express').Router()
const productController = require('../controllers/product.controller')

router.route("/products").get(productController.list)
router.route("/products").post(productController.create)
router.route("/products/:id").get(productController.productById)
router.route("/products/:id").put(productController.update)
router.route("/products/:id").delete(productController.delete)

module.exports = router