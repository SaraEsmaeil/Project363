const express = require('express');
const {
  createCategory,
  getCategories,
  deleteCategory,
} = require('../controllers/categoryController');

const router = express.Router();

router.post('/', createCategory); // Create a category
router.get('/', getCategories); // Get all categories
router.delete('/:id', deleteCategory); // Delete a category

module.exports = router;
