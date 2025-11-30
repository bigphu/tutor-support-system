const mysql = require('mysql2/promise'); // Thường dùng promise ngay từ import

// Sử dụng createPool thay vì createConnection
const pool = mysql.createPool({ 
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
    waitForConnections: true, // Nếu bận thì đợi
    connectionLimit: 10,      // Giới hạn số kết nối tối đa
    queueLimit: 0             // Không giới hạn hàng đợi
});

// Xuất khẩu đối tượng Pool đã kích hoạt Promise
module.exports = pool;