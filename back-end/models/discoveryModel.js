const db = require('../config/database');

class DiscoveryModel {
    // 1. Lấy tất cả khóa học đang mở
    static async getAllOpenCourses() {
        const sql = "SELECT id, title, description, tutor_name, tutor_id FROM Courses WHERE status = 'Open'";
        const [rows] = await db.execute(sql);
        return rows;
    }

    // 2. Tìm thông tin Tutor theo ID
    static async findTutorById(tutorId) {
        const sql = "SELECT full_name, bio FROM Users WHERE id = ? AND role = 'tutor'";
        const [rows] = await db.execute(sql, [tutorId]);
        // Trả về người đầu tiên (hoặc undefined nếu không thấy)
        return rows[0];
    }

    // 3. Lấy lịch dạy của Tutor đó
    static async getTutorSessions(tutorId) {
        const sql = `
            SELECT s.*, c.title as course_title 
            FROM Sessions s
            JOIN Courses c ON s.course_id = c.id
            WHERE s.tutor_id = ?
            ORDER BY s.start_time ASC
        `;
        const [rows] = await db.execute(sql, [tutorId]);
        return rows;
    }
}

module.exports = DiscoveryModel;