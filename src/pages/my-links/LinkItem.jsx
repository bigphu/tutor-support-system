import React from 'react'

const LinkItem = ({ avatar, courseId, title, details }) => {
  return (
    <div className="flex items-center bg-white border border-[var(--color-border)] rounded-lg p-4 px-8 shadow-sm hover:shadow-md transition-shadow mb-4">
      {/* left: avatar + small label */}
      <div className="flex items-center mr-4">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover mr-3" />
        <div className="px-3 py-1 rounded-full border border-[var(--color-border)] text-sm font-semibold text-[var(--text-dark)]">{courseId}</div>
      </div>

      {/* middle: title and details */}
      <div className="flex-1">
        <div className="text-md font-bold text-[var(--text-primary-accent)]">{title}</div>
        <div className="text-xs text-[var(--color-secondary-accent)] mt-1 inline-block">{details}</div>
      </div>

      {/* optional right: placeholder for actions / id column */}
      <div className="w-24 text-center text-[var(--text-dark)] font-semibold">&nbsp;</div>
    </div>
  )
}

export default LinkItem
