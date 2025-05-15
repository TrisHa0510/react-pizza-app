const Order = require('../models/order.model');
const { updateInventory } = require('./inventoryController');

exports.placeOrder = async (req, res) => {
  const { items } = req.body;
  const order = new Order({ items });
  await order.save();

  // Update inventory
  const itemCounts = {};
  Object.keys(items).forEach(k => itemCounts[k] = 1); // Each item counts as 1 used
  req.body = itemCounts;
  await updateInventory(req, res);

  res.json(order);
};

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const order = await Order.findById(id);
  if (!order) return res.status(404).json({ message: 'Order not found' });

  order.status = status;
  await order.save();
  res.json({ message: 'Status updated', order });
};

exports.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: 'Order not found' });

  res.json(order);
};
