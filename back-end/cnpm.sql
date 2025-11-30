DROP DATABASE IF EXISTS `cnpm`;
CREATE DATABASE `cnpm`;
USE `cnpm`;

-- =======================================================
-- 1. XÓA BẢNG CŨ & TẠO LẠI
-- =======================================================
DROP TABLE IF EXISTS `Sessions`;
DROP TABLE IF EXISTS `Enrollments`;
DROP TABLE IF EXISTS `Courses`;
DROP TABLE IF EXISTS `Users`;

-- 1. Bảng User
CREATE TABLE `Users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50),
    `password` VARCHAR(255), 
    `role` VARCHAR(20),     
    `full_name` VARCHAR(100),
    `bio` TEXT              
);

-- 2. Bảng Courses
CREATE TABLE `Courses` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `tutor_id` INT,         
    `tutor_name` VARCHAR(100), 
    `title` VARCHAR(255),
    `description` TEXT,
    `status` VARCHAR(20) DEFAULT 'Open'
);

-- 3. Bảng Enrollments
CREATE TABLE `Enrollments` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `student_id` INT,
    `course_id` INT
);

-- 4. Bảng Sessions (CÓ KHÓA NGOẠI RÀNG BUỘC)
CREATE TABLE `Sessions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `course_id` INT,
    `tutor_id` INT,
    `start_time` DATETIME,
    `end_time` DATETIME,
    `link` VARCHAR(255),
    CONSTRAINT `fk_session_course` FOREIGN KEY (`course_id`) REFERENCES `Courses` (`id`) ON DELETE CASCADE
);

-- =======================================================
-- 2. INSERT DỮ LIỆU
-- =======================================================

-- USERS
INSERT INTO `Users` (`username`, `password`, `role`, `full_name`, `bio`) VALUES
('admin_manager', '1', 'admin', 'System Admin', 'Quản trị viên hệ thống.'),
('tutor_khoa', '1', 'tutor', 'TS. Nguyễn Anh Khoa', 'Tiến sĩ KHMT, chuyên sâu về Giải thuật.'),
('tutor_quan', '1', 'tutor', 'PGS.TS Trần Minh Quân', 'Nghiên cứu về Computer Vision và Deep Learning.'),
('tutor_lan', '1', 'tutor', 'ThS. Lê Thị Lan', 'Chuyên dạy Công nghệ phần mềm và Web App.'),
('tutor_hai', '1', 'tutor', 'ThS. Phạm Thanh Hải', 'Chuyên gia về An toàn thông tin và Mạng.'),
('hcmut_k21_nam', '1', 'student', 'Trần Văn Nam', 'Sinh viên K21.'),
('hcmut_k22_linh', '1', 'student', 'Nguyễn Thùy Linh', 'Thành viên GDSC.'),
('hcmut_k23_hung', '1', 'student', 'Lê Quốc Hưng', 'Thích IoT.'),
('hcmut_k21_an', '1', 'student', 'Phạm Bình An', 'Thực tập NodeJS.'),
('hcmut_k22_bao', '1', 'student', 'Hoàng Gia Bảo', 'LeetCode.'),
('hcmut_k23_vy', '1', 'student', 'Đỗ Tường Vy', 'UI/UX Design.');

-- COURSES (Tất cả đều Open)
INSERT INTO `Courses` (`tutor_id`, `tutor_name`, `title`, `description`, `status`) VALUES
(1, 'TS. Nguyễn Anh Khoa', 'CO1005 - Nhập môn Lập trình', 'Tư duy lập trình C/C++, con trỏ.', 'Open'),
(1, 'TS. Nguyễn Anh Khoa', 'CO2003 - Cấu trúc Dữ liệu & Giải thuật', 'Stack, Queue, Tree, Graph. Quan trọng.', 'Open'),
(1, 'TS. Nguyễn Anh Khoa', 'Lập trình Thi đấu', 'Quy hoạch động, Segment Tree.', 'Open'),
(2, 'PGS.TS Trần Minh Quân', 'CO3001 - Trí tuệ Nhân tạo (AI)', 'Tìm kiếm A*, Logic, ML cơ bản.', 'Open'),
(2, 'PGS.TS Trần Minh Quân', 'CO3093 - Thị giác Máy tính', 'Xử lý ảnh số, CNN, YOLO.', 'Open'),
(3, 'ThS. Lê Thị Lan', 'CO2013 - Hệ Cơ sở dữ liệu', 'ER, SQL, Transaction.', 'Open'),
(3, 'ThS. Lê Thị Lan', 'CO3049 - Lập trình Web', 'Fullstack MERN.', 'Open'),
(3, 'ThS. Lê Thị Lan', 'CO3005 - Công nghệ Phần mềm', 'Agile/Scrum, Testing.', 'Open'),
(4, 'ThS. Phạm Thanh Hải', 'CO2007 - Mạng Máy tính', 'OSI, TCP/IP.', 'Open'),
(4, 'ThS. Phạm Thanh Hải', 'CO2017 - Hệ điều hành', 'Process, Thread, Deadlock.', 'Open');

-- ENROLLMENTS
INSERT INTO `Enrollments` (`student_id`, `course_id`) VALUES
(5, 2), (5, 7), (6, 1), (6, 4), (7, 2), 
(7, 9), (8, 7), (9, 3), (10, 6), (10, 8);

-- SESSIONS (3 Buổi cho mỗi môn -> Tổng 30 buổi)
INSERT INTO `Sessions` (`course_id`, `tutor_id`, `start_time`, `end_time`, `link`) VALUES
-- 1. Nhập môn Lập trình (Tutor 1)
(1, 1, '2025-12-01 07:00:00', '2025-12-01 10:00:00', 'meet.google.com/co1005-01'),
(1, 1, '2025-12-03 07:00:00', '2025-12-03 10:00:00', 'meet.google.com/co1005-02'),
(1, 1, '2025-12-05 07:00:00', '2025-12-05 10:00:00', 'meet.google.com/co1005-03'),

-- 2. Cấu trúc dữ liệu (Tutor 1)
(2, 1, '2025-12-02 09:00:00', '2025-12-02 11:30:00', 'meet.google.com/dsa-01'),
(2, 1, '2025-12-04 09:00:00', '2025-12-04 11:30:00', 'meet.google.com/dsa-02'),
(2, 1, '2025-12-06 09:00:00', '2025-12-06 11:30:00', 'meet.google.com/dsa-03'),

-- 3. Lập trình thi đấu (Tutor 1)
(3, 1, '2025-12-01 18:00:00', '2025-12-01 21:00:00', 'meet.google.com/cp-01'),
(3, 1, '2025-12-08 18:00:00', '2025-12-08 21:00:00', 'meet.google.com/cp-02'),
(3, 1, '2025-12-15 18:00:00', '2025-12-15 21:00:00', 'meet.google.com/cp-03'),

-- 4. Trí tuệ nhân tạo (Tutor 2)
(4, 2, '2025-12-10 13:00:00', '2025-12-10 16:00:00', 'zoom.us/ai-01'),
(4, 2, '2025-12-12 13:00:00', '2025-12-12 16:00:00', 'zoom.us/ai-02'),
(4, 2, '2025-12-14 13:00:00', '2025-12-14 16:00:00', 'zoom.us/ai-03'),

-- 5. Thị giác máy tính (Tutor 2)
(5, 2, '2025-12-11 08:00:00', '2025-12-11 11:00:00', 'zoom.us/cv-01'),
(5, 2, '2025-12-13 08:00:00', '2025-12-13 11:00:00', 'zoom.us/cv-02'),
(5, 2, '2025-12-15 08:00:00', '2025-12-15 11:00:00', 'zoom.us/cv-03'),

-- 6. Cơ sở dữ liệu (Tutor 3)
(6, 3, '2025-12-02 14:00:00', '2025-12-02 17:00:00', 'teams.microsoft.com/db-01'),
(6, 3, '2025-12-04 14:00:00', '2025-12-04 17:00:00', 'teams.microsoft.com/db-02'),
(6, 3, '2025-12-06 14:00:00', '2025-12-06 17:00:00', 'teams.microsoft.com/db-03'),

-- 7. Lập trình Web (Tutor 3)
(7, 3, '2025-12-07 08:00:00', '2025-12-07 11:00:00', 'teams.microsoft.com/web-01'),
(7, 3, '2025-12-14 08:00:00', '2025-12-14 11:00:00', 'teams.microsoft.com/web-02'),
(7, 3, '2025-12-21 08:00:00', '2025-12-21 11:00:00', 'teams.microsoft.com/web-03'),

-- 8. Công nghệ phần mềm (Tutor 3)
(8, 3, '2025-12-09 09:00:00', '2025-12-09 12:00:00', 'teams.microsoft.com/se-01'),
(8, 3, '2025-12-11 09:00:00', '2025-12-11 12:00:00', 'teams.microsoft.com/se-02'),
(8, 3, '2025-12-13 09:00:00', '2025-12-13 12:00:00', 'teams.microsoft.com/se-03'),

-- 9. Mạng máy tính (Tutor 4)
(9, 4, '2025-12-16 07:30:00', '2025-12-16 10:30:00', 'meet.google.com/net-01'),
(9, 4, '2025-12-18 07:30:00', '2025-12-18 10:30:00', 'meet.google.com/net-02'),
(9, 4, '2025-12-20 07:30:00', '2025-12-20 10:30:00', 'meet.google.com/net-03'),

-- 10. Hệ điều hành (Tutor 4)
(10, 4, '2025-12-17 13:00:00', '2025-12-17 16:00:00', 'meet.google.com/os-01'),
(10, 4, '2025-12-19 13:00:00', '2025-12-19 16:00:00', 'meet.google.com/os-02'),
(10, 4, '2025-12-21 13:00:00', '2025-12-21 16:00:00', 'meet.google.com/os-03');
DELETE FROM Sessions WHERE id = 1;
-- KIỂM TRA
SELECT * FROM Users;
SELECT * FROM Courses;
SELECT * FROM Sessions;
SELECT * FROM Enrollments;
