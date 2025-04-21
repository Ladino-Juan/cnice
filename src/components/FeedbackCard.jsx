// FeedbackCard.js
import React from 'react'

const FeedbackCard = ({name, role, text}) => {
  return (
    <div className='bg-white p-6 rounded-xl shadow-md my-4 mx-2 h-full'>
      <div className='flex justify-between items-start'>
        <div className='flex gap-4 items-center'>
          <div className='w-12 h-12 rounded-full bg-[#F4842F] flex items-center justify-center text-white font-bold'>
            {name.charAt(0)}
          </div>
          <div className='text-right'>
            <h1 className='font-semibold text-gray-800'>{name}</h1>
            <p className='text-sm text-[#F4842F]'>{role}</p>
          </div>
        </div>
        <svg className='w-6 h-6 text-[#F4842F]' fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      <div className='py-4'>
        <p className='text-gray-600 text-right text-sm md:text-base leading-relaxed'>{text}</p>
      </div>
    </div>
  )
}

export default FeedbackCard;