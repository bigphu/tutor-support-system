const express = require('express');
const router = express.Router();

// IMPORT THE CONTROLLER
const authController = require('../controllers/authController');

// IMPORT MIDDLEWARE (Ensure path is correct)
const { verifyToken, authorizeRoles } = require('../middlewares/authMiddleware');

// DEBUG: Uncomment this line to check if functions exist
// console.log("Controller Functions:", authController); 

// === ROUTES ===

// 1. Login
router.post('/login', authController.login);

// 2. Register (This caused your error if authController.register was missing)
router.post('/register', authController.register);

// 3. Admin Route
router.get('/user', 
    verifyToken, 
    authorizeRoles('admin'), 
    authController.getAllUsers
);

module.exports = router;