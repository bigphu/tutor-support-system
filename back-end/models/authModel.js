const db = require('../config/database');

class AuthModel {
    static async findByUsername(username) {
        const sql = "SELECT * FROM Users WHERE username = ?";
        const [rows] = await db.execute(sql, [username]);
        return rows[0]; 
    }

    // UPDATED: Removed email from SQL
    static async create(userData) {
        const { username, password, role } = userData;
        const sql = "INSERT INTO Users (username, password, role) VALUES (?, ?, ?)";
        const [result] = await db.execute(sql, [username, password, role]);
        return result;
    }

    static async getAll() {
        const sql = "SELECT id, username, role, created_at FROM Users";
        const [rows] = await db.execute(sql);
        return rows;
    }
}

module.exports = AuthModel;