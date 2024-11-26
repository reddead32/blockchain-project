const express = require('express');
const router = express.Router();
const loyaltyController = require('./App.test');

router.get('/loyalty-points', loyaltyController.getLoyaltyPoints);
router.post('/transfer-points', loyaltyController.transferPoints);

module.exports = router;