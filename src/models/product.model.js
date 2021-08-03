const { Schema, model } = require('mongoose')

const productSchema = new Schema({ 
  name: {
    type: String,
    required: [ true, 'Se requiere un nombre del producto' ]
  },
  price: {
    type: Number,
    required: [ true, 'Se requiere un precio del producto' ]
  },
  maxQuantity: {
    type: Number,
    required: [ true, 'Se requiere una cantidad maxima del producto' ]
  },
  url: String
},
{
  timestamps: true,
});

const Product = model('Product', productSchema);
module.exports = Product;