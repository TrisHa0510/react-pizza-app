const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: String,
  stock: Number,
  type: String,       // base, sauce, cheese, veggies, etc.
});

module.exports = mongoose.model('Inventory', inventorySchema);
