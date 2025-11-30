import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/page-layout/PageLayout";

// 1. Component 1: Các thẻ hiện khóa học và tên tutor tương ứng
const EventCard = ({ item }) => {
  const navigate = useNavigate();

  const handleDetailClick = (e) => {
    e.preventDefault();
    navigate("/subject-view"); // Đổi lại đường dẫn file subject-view ngay đây
  };

  return (
    <div className="mb-3 flex items-center justify-between rounded-2xl border border-blue-400 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
          <img
            src={item.avatar || "https://via.placeholder.com/150"}
            alt={item.tutorName}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col text-sm font-medium text-blue-900">
          <span className="font-bold">{item.courseId}</span>
          <span className="mt-1 truncate">
            {item.tutorName} - {item.studentName || "Student"} |{" "}
            {item.courseName}
          </span>
        </div>
      </div>

      <button
        onClick={handleDetailClick}
        className="ml-2 cursor-pointer whitespace-nowrap border-none bg-transparent text-xs font-semibold text-blue-500 hover:underline"
      >
        Details
      </button>
    </div>
  );
};

// 2. Component 2: Calendar
const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [scheduleEvents, setScheduleEvents] = useState([]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        // Có backend thì gỡ comment
        /* const startStr = `${year}-${month+1}-01`;
                const endStr = `${year}-${month+1}-${new Date(year, month + 1, 0).getDate()}`;
                const res = await fetch(`http://localhost:5000/api/schedule?start=${startStr}&end=${endStr}`);
                const data = await res.json();
                setScheduleEvents(data);
                */

        // Có backend thì comment phần dưới đây
        const currentMonthStr = String(month + 1).padStart(2, "0");
        const mockSchedule = [
          {
            id: 101,
            date: `${year}-${currentMonthStr}-05`,
            courseName: "CO3001",
          },
          {
            id: 102,
            date: `${year}-${currentMonthStr}-05`,
            courseName: "MT1003",
          }, // 1 ngày 2 môn
          {
            id: 103,
            date: `${year}-${currentMonthStr}-12`,
            courseName: "CO3005",
          },
          {
            id: 104,
            date: `${year}-${currentMonthStr}-18`,
            courseName: "PH1003",
          },
          {
            id: 105,
            date: `${year}-${currentMonthStr}-25`,
            courseName: "CO2003",
          },
          // Thêm một sự kiện vào ngày hiện tại để test
          {
            id: 106,
            date: `${year}-${currentMonthStr}-${String(today.getDate()).padStart(2, "0")}`,
            courseName: "TEST101",
          },
        ];

        setScheduleEvents(mockSchedule);
      } catch (err) {
        console.error("Failed to fetch schedule", err);
      }
    };

    fetchSchedule();
  }, [year, month]); // Chạy lại khi chuyển tháng

  // Logic chuyển tháng
  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startDayIndex = (firstDayOfMonth + 6) % 7;

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyStartDays = Array.from({ length: startDayIndex }, (_, i) => i);
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const monthLabel = currentDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const isCurrentMonth =
    today.getMonth() === month && today.getFullYear() === year;

  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-xl md:p-8">
      <div className="mb-6 flex flex-col items-center">
        <h2 className="mb-4 text-3xl font-bold text-blue-900">Calendar</h2>
        <div className="flex select-none items-center gap-8 text-lg font-semibold text-blue-800">
          <button
            onClick={handlePrevMonth}
            className="cursor-pointer p-2 hover:text-blue-600"
          >
            &lt;
          </button>
          <span>{monthLabel}</span>
          <button
            onClick={handleNextMonth}
            className="cursor-pointer p-2 hover:text-blue-600"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center md:gap-4">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="mb-2 text-sm font-bold text-blue-900 md:text-base"
          >
            {day}
          </div>
        ))}

        {emptyStartDays.map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square"></div>
        ))}

        {daysArray.map((day) => {
          const isToday = isCurrentMonth && day === today.getDate();

          // Logic tìm môn học trong ngày này
          const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const eventsForDay = scheduleEvents.filter((e) => e.date === dateKey);

          return (
            <div
              key={day}
              className={`flex aspect-square flex-col items-start justify-start overflow-hidden rounded-lg border p-1 md:p-2 ${isToday ? "border-blue-500 bg-blue-50" : "border-blue-200"} transition-colors hover:bg-blue-50`}
            >
              {/* Ngày hiển thị */}
              <span
                className={`w-full text-left text-sm font-bold ${isToday ? "text-blue-700" : "text-blue-900"}`}
              >
                {day}
              </span>

              {/* Hiển thị danh sách môn học (nếu có) */}
              <div className="no-scrollbar mt-1 flex w-full flex-col gap-1 overflow-y-auto">
                {eventsForDay.map((evt) => (
                  <div
                    key={evt.id}
                    className="w-full truncate rounded bg-blue-100 px-1 py-0.5 text-left text-[10px] font-medium text-blue-800 md:text-xs"
                    title={evt.courseName}
                  >
                    {evt.courseName}
                  </div>
                ))}
              </div>

              {/* Chỉ báo Today */}
              {isToday && eventsForDay.length === 0 && (
                <span className="mt-auto hidden text-[10px] text-blue-400 md:block">
                  Today
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Thêm State cho Search và Sort
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("tutor"); // Mặc định sort theo tên Tutor

  const todayDateStr = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const fetchTutorData = async () => {
      setLoading(true);
      try {
        // Nếu có backend thì gỡ comment
        /*
                const response = await fetch('http://localhost:5000/api/dashboard/events');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setEvents(data);
                */

        // Nếu có Backend thì comment
        await new Promise((resolve) => setTimeout(resolve, 500));
        const mockData = [
          {
            id: 1,
            courseId: "CO3001",
            tutorName: "Nguyen Van A",
            studentName: "Quang Khai",
            courseName: "Software Engineering",
            avatar: "https://i.pravatar.cc/150?img=11",
          },
          {
            id: 2,
            courseId: "CO3005",
            tutorName: "Tran Thi B",
            studentName: "Quang Khai",
            courseName: "Principles of PL",
            avatar: "https://i.pravatar.cc/150?img=5",
          },
          {
            id: 3,
            courseId: "MT1003",
            tutorName: "Le Van C",
            studentName: "Quang Khai",
            courseName: "Calculus 1",
            avatar: "https://i.pravatar.cc/150?img=3",
          },
        ];
        setEvents(mockData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorData();
  }, []);

  // 2. Logic Xử lý Search và Sort (useMemo)
  const processedEvents = useMemo(() => {
    let result = [...events];

    // A. Logic Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.tutorName?.toLowerCase().includes(lowerTerm) ||
          item.courseName?.toLowerCase().includes(lowerTerm) ||
          item.courseId?.toLowerCase().includes(lowerTerm) ||
          item.studentName?.toLowerCase().includes(lowerTerm),
      );
    }

    // B. Logic Sort
    result.sort((a, b) => {
      if (sortType === "tutor") {
        // Sắp xếp theo tên giảng viên
        return a.tutorName.localeCompare(b.tutorName);
      } else if (sortType === "course") {
        // Sắp xếp theo tên môn học
        return a.courseName.localeCompare(b.courseName);
      }
      return 0;
    });

    return result;
  }, [events, searchTerm, sortType]);

  return (
    <PageLayout>
      <div className="flex w-full flex-col gap-8 py-4">
        <div className="w-full rounded-3xl bg-white p-6 shadow-xl md:p-8">
          <h1 className="mb-6 text-center text-2xl font-bold text-blue-900 md:text-3xl">
            Upcoming events
          </h1>

          <div className="mb-6 flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex w-full items-center gap-3 lg:w-auto">
              {/* Nút All: Reset Search */}
              <button
                onClick={() => setSearchTerm("")}
                className="rounded-full border border-blue-400 px-5 py-2 font-bold text-blue-900 transition-colors hover:bg-blue-50"
              >
                All
              </button>

              {/* Search Input */}
              <div className="flex-1 lg:w-64">
                <input
                  type="text"
                  placeholder="Search (Tutor, Course...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-blue-300 py-2 pl-9 pr-4 text-sm text-blue-900 placeholder-blue-300 focus:border-blue-500 focus:outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full lg:w-auto">
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-full border border-blue-400 bg-white py-2 pl-4 pr-10 text-sm font-bold text-blue-900 hover:bg-gray-50 focus:outline-none lg:w-auto"
              >
                <option value="tutor">Sort by tutor names</option>
                <option value="course">Sort by course name</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-900">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <h3 className="mb-4 pl-1 text-lg font-medium text-blue-800 md:text-xl">
            {todayDateStr}
          </h3>

          {/* Render List sau khi đã lọc (processedEvents) */}
          <div className="flex min-h-[100px] flex-col gap-3">
            {loading ? (
              <div className="py-8 text-center text-blue-400">
                Loading data...
              </div>
            ) : processedEvents.length > 0 ? (
              processedEvents.map((item) => (
                <EventCard key={item.id} item={item} />
              ))
            ) : (
              <div className="text-center text-gray-500">
                No upcoming events found matching "{searchTerm}".
              </div>
            )}
          </div>
        </div>

        <CalendarSection />
      </div>
    </PageLayout>
  );
};

export default Dashboard;
