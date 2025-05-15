const Inventory = require('../models/inventory.model');

// GET /api/inventory
const getInventory = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inventory' });
  }
};

// PUT /api/inventory/:id
const updateInventory = async (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;

  try {
    const updatedItem = await Inventory.findByIdAndUpdate(
      id,
      { stock },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update inventory' });
  }
};

module.exports = {
  getInventory,
  updateInventory,
};
