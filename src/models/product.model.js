const { Schema, model } = require('mongoose')

const productSchema = new Schema({ 
  name: {
    type: String,
    required: [ true, 'Se requiere un nombre para el producto' ]
  },
  price: {
    type: Number,
    required: [ true, 'Se requiere un precio para el producto' ]
  },
  url: String
},
{
  timestamps: true,
});

const Product = model('Product', productSchema);
module.exports = Product;