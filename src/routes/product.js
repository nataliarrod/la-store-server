const router = require('express').Router()
const productController = require('../controllers/product.controller')

router.route("/list").get(productController.list)
router.route("/create").post(productController.create)
router.route("/:id").get(productController.productById)
router.route("/update/:id").put(productController.update)
router.route("/delete/:id").delete(productController.delete)

module.exports = router