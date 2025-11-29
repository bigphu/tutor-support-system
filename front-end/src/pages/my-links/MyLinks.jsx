import React from "react";
// import './MyLinks.css'
import LinkItem from "./LinkItem";
// Window was imported but unused, removed for cleanliness
import Button from "../../components/button/Button.jsx";
import avatar from "../../assets/avatar.png";

const MyLinks = () => {
  const listEntries = Array.from({ length: 5 }).map((_, idx) => ({
    id: idx,
    avatar: avatar,
    courseId: "Course id",
    title: "Tutor name  - Student name | Course name",
    details: "Details",
  }));

  return (
    // 1. Unified Parent Wrapper (The Grid Container)
    <div className="bg-sl grid min-h-[100vh] grid-cols-8 content-start gap-4 p-8">
      
      {/* --- Header Section --- */}
      <div className=" col-start-2 col-span-6 flex flex-col min-h-[20vh] items-center justify-center bg-transparent ">
        <div className="text-primary text-big font-extrabold">
          Links Center
        </div>

        <div className="text-secondary-accent">
          This is where all of your registered sessions gather
        </div>
      </div>


      {/* --- Sidebar (Filter & Search) --- */}
      <div className="sticky top-52 col-start-2 col-span-2 flex max-h-[28vh] flex-col justify-center gap-2">


        <div className="flex flex-col rounded-lg border border-[var(--color-border)] bg-white pt-4 pb-4 pl-6 pr-6 font-bold gap-2">
          <div className="flex justify-center text-primary-accent font-semibold">
            Filter & Search
          </div>
          
          <div className="search-input text-[var(--text-placeholder)] flex w-full items-center rounded-full border border-[var(--color-border)] px-3 py-1.5">
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            <input
              className="text-primary w-[84%] bg-transparent text-sm outline-none"
              placeholder="Search"
              />
          </div>

          <div className="flex w-full flex-row items-center justify-start gap-4">
            <button className="filter-btn text-[var(--text-primary-accent)] rounded-full border border-[var(--color-border)] px-4 py-1.5 font-bold">
              All
            </button>

            <div className="sort-btn text-[var(--text-primary-accent)] flex w-full items-center rounded-full border border-[var(--color-border)] px-3 py-1.5">
              <span className="mr-2 text-sm">Sort by tutor names</span>
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
              </svg>
            </div>
          </div>

          <Button>Apply</Button>
        </div>
      </div>

      {/* --- Main Content (The List) --- */}
      <main className="col-span-4 flex flex-col gap-4">
        <div className="list">
          {listEntries.map((e) => (
            <LinkItem
              key={`s1-${e.id}`}
              avatar={e.avatar}
              courseId={e.courseId}
              title={e.title}
              details={e.details}
            />
          ))}
        </div>
      </main>

      {/* --- Pagination --- */}
      <div className="col-start-2 col-span-6 flex items-center justify-center gap-4">
        <Button>1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
        <Button variant="secondary">5</Button>
      </div>
    </div>
  );
};

export default MyLinks;