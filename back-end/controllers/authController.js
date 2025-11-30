const AuthModel = require('../models/authModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// 1. REGISTER (Updated: No Email)
exports.register = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        // Check if user exists
        const existingUser = await AuthModel.findByUsername(username);
        if (existingUser) {
            return res.status(409).json("Username already exists!");
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User (No email)
        await AuthModel.create({
            username,
            password: hashedPassword,
            role: role || 'student'
        });

        res.status(200).json("User registered successfully.");
    } catch (err) {
        console.error("Register Error:", err);
        res.status(500).json(err.message || "Error creating user");
    }
};

// 2. LOGIN
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await AuthModel.findByUsername(username);

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Wrong password' });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role }, 
            process.env.JWT_SECRET || 'your-secret-key', 
            { expiresIn: '24h' }
        );

        const { password: _, ...userInfo } = user;
        res.status(200).json({ ...userInfo, token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: 'Server error' });
    }
};

// 3. GET ALL USERS (Admin)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await AuthModel.getAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};