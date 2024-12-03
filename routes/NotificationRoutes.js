const express = require('express');
const {
  createNotification,
  getNotifications,
  markAsRead,
} = require('../controllers/notificationController');

const router = express.Router();

// Route to create a new notification
router.post('/', createNotification);

// Route to get all notifications for a user
router.get('/:userId', getNotifications);

// Route to mark a specific notification as read
router.put('/:id/read', markAsRead);

module.exports = router;
