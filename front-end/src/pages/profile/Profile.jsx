import React from "react";
import LinkItem from "../../pages/my-links/LinkItem";
import Button from "../../components/button/Button.jsx";
import avatar from "../../assets/avatar.png";

const Profile = () => {
  // Mock data for the Control Center list
  const recentSessions = Array.from({ length: 3 }).map((_, idx) => ({
    id: idx,
    avatar: avatar,
    courseId: "CS-101",
    title: "Intro to Computer Science - Lab Session",
    details: "Starts in 2 hours • Room 304",
  }));

  return (
    // Unified Parent Wrapper (Matching MyLinks.jsx)
    <div className="bg-sl grid min-h-[100vh] grid-cols-8 content-start gap-4 p-8">
      
      {/* --- Header Section --- */}
      <div className="col-start-2 col-span-6 flex flex-col min-h-[20vh] items-center justify-center bg-transparent">
        <div className="text-primary text-big font-extrabold">
          My Profile
        </div>
        <div className="text-secondary-accent">
          Welcome back, Student Name
        </div>
      </div>

      {/* --- Sidebar (Read-Only User Card) --- */}
      <div className="sticky top-52 col-start-2 col-span-2 flex max-h-[40vh] flex-col gap-4">
        <div className="flex flex-col items-center rounded-lg border border-[var(--color-border)] bg-white py-8 px-6 shadow-sm">
            {/* Avatar */}
            <div className="relative mb-4">
                <img 
                    src={avatar} 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full border-4 border-secondary-accent object-cover"
                />
            </div>

            <div className="text-lg font-bold text-[var(--text-primary-accent)]">
                Student Name
            </div>
            <div className="text-sm text-[var(--color-secondary-accent)] mb-6">
                Student ID: 20230988
            </div>

            {/* Simple status indicator */}
            <div className="mb-6 flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 border border-green-200">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-green-700">Online Status: Active</span>
            </div>

            <div className="w-full flex flex-col gap-2 border-t border-[var(--color-border)] pt-4">
               <div className="flex justify-between text-sm mb-1">
                 <span className="text-[var(--text-placeholder)]">Major</span>
                 <span className="font-semibold text-[var(--text-primary-accent)]">Computer Science</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-[var(--text-placeholder)]">Year</span>
                 <span className="font-semibold text-[var(--text-primary-accent)]">Sophomore</span>
               </div>
            </div>
        </div>
      </div>

      {/* --- Main Content (Control Center) --- */}
      <main className="col-span-4 flex flex-col gap-6">
        
        {/* 1. Quick Stats Dashboard */}
        <div className="grid grid-cols-3 gap-4">
            {/* Stat Card 1 */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl font-extrabold text-[var(--color-primary-accent)]">12</div>
                <div className="text-xs font-bold text-[var(--text-primary-accent)] mt-1">Total Sessions</div>
            </div>
            {/* Stat Card 2 */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl font-extrabold text-secondary-accent">5</div>
                <div className="text-xs font-bold text-[var(--text-primary-accent)] mt-1">Upcoming</div>
            </div>
            {/* Stat Card 3 */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl font-extrabold text-green-500">98%</div>
                <div className="text-xs font-bold text-[var(--text-primary-accent)] mt-1">Attendance</div>
            </div>
        </div>

        {/* 2. Control Center: Quick Access List */}
        <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-md font-bold text-[var(--text-primary-accent)]">
                    Control Center: Quick Access
                </h3>
                <Button variant="ghost">View All History</Button>
            </div>
            
            <div className="list">
                {recentSessions.map((e) => (
                    <LinkItem
                        key={`cc-${e.id}`}
                        avatar={e.avatar}
                        courseId={e.courseId}
                        title={e.title}
                        details={e.details}
                    />
                ))}
            </div>

            {/* Quick Action Button */}
            <div className="mt-2 flex justify-center">
                <button className="w-full rounded-lg border-2 border-dashed border-[var(--color-border)] p-4 text-sm font-bold text-[var(--text-placeholder)] hover:border-[var(--color-primary-accent)] hover:text-[var(--color-primary-accent)] transition-colors">
                    + Register New Session
                </button>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;