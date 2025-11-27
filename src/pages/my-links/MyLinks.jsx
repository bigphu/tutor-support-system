import React from "react";

// import './MyLinks.css'
import LinkItem from "./LinkItem";

import Window from "../../components/window/Window.jsx";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import Button from "../../components/button/Button.jsx";

const MyLinks = () => {
  const sampleAvatar =
    "https://www.figma.com/api/mcp/asset/515f4da3-da6a-45d2-a0f9-cdbeea6fa503";

  const listEntries = Array.from({ length: 5 }).map((_, idx) => ({
    id: idx,
    avatar: sampleAvatar,
    courseId: "Course id",
    title: "Tutor name  - Student name | Course name",
    details: "Details",
  }));

  return (
    <div class="m-8 pt-8 pb-8 grid min-h-[100vh] content-start gap-4 grid-cols-8">
      <div class="flex min-h-[20vh] items-center justify-center bg-white font-extrabold text-primary text-big col-start-2 col-span-6">
        Links Center
      </div>

      <div class="sticky top-40 flex gap-4 flex-col max-h-[28vh] items-center justify-start rounded-lg bg-white p-8 font-bold border border-[var(--color-border)] col-start-2 col-span-2">
        <div className="search-input flex items-center border rounded-full w-full border-[var(--color-border)] px-3 py-1.5 text-[var(--text-placeholder)]">
          <svg
            className="w-4 h-4 mr-2"
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
            className="bg-transparent outline-none text-sm"
            placeholder="Search"
          />
        </div>

        <div className="flex flex-row items-center justify-start w-full gap-4">
          <button className="filter-btn px-4 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--text-primary-accent)] font-bold">All</button>

          <div className="sort-btn w-full flex items-center border border-[var(--color-border)] rounded-full px-3 py-1.5 text-[var(--text-primary-accent)]">
            <span className="mr-2 text-sm">Sort by tutor names</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        <Button>
          Apply
        </Button>

      </div>

      <div class="flex flex-col gap-4 col-span-4">
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
      </div>

      <div class="flex items-center justify-center gap-4 col-start-2 col-span-6">
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
