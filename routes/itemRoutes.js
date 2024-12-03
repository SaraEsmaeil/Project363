const express = require('express');
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  updateItemStatus,
} = require('../controllers/itemController');

const router = express.Router();

// Get all items
router.get('/', getAllItems);

// Get a single item by ID
router.get('/:id', getItemById);

// Create a new item
router.post('/', createItem);

// Update an existing item
router.put('/:id', updateItem);

// Update item status (e.g., available, borrowed)
router.patch('/:id/status', updateItemStatus);

// Delete an item
router.delete('/:id', deleteItem);

module.exports = router;
