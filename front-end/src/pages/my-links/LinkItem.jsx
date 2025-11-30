import React from 'react'
import Button from '../../components/button/Button'

const LinkItem = ({ avatar, courseId, title, details }) => {
  return (
    <div className="flex items-center bg-white border border-[var(--color-border)] rounded-2xl p-4 px-8 shadow-sm hover:shadow-md transition-shadow mb-4">
      {/* left: avatar + small label */}
      <div className="flex items-center mr-4">
        <img src={avatar} alt="avatar" className="border-2 border-secondary-accent w-10 h-10 rounded-full object-cover mr-3" />
        <div className="px-3 py-1 rounded-full text-sm font-semibold text-white bg-[var(--color-primary-accent)]">{courseId}</div>
      </div>

      {/* middle: title and details */}
      <div className="flex-1 mr-4">
        <div className="text-md font-bold text-[var(--text-primary-accent)]">{title}</div>
        <div className="text-xs text-[var(--color-secondary-accent)] mt-1 inline-block">{details}</div>
      </div>

      {/* optional right: placeholder for actions / id column */}
      <div className="flex">
        <Button variant="ghost">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default LinkItem
