const Product = require('../models/product.model');

module.exports = {

  async list(req, res) {
    try {
      const product = await Product.find()
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async create(req, res) {
    try {
      const data = req.body;
      const product = await Product.create(data);

      res.status(200).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async productById(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);

      res.status(200).json(product);
    } catch (err) {
      res.status(400).json({ message: `The product ${id} was not found` });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const product = await Product.findByIdAndUpdate(id, data, { new: true })

      res.status(200).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id)

      res.status(200).json(product);
    } catch (err) {
      res.status(400).json({ message: `The product ${id} was not found` });
    }
  }
}