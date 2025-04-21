import React from 'react'
import { FiDroplet } from 'react-icons/fi'
import { GiFlowerEmblem } from 'react-icons/gi'
import { FaLeaf } from 'react-icons/fa'
import { BsStars } from 'react-icons/bs'

const About = () => {
  return (
    <div className='w-full bg-[#FFF5ED] py-16 md:py-24'>
      <div className='md:max-w-[1280px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-6 gap-12 items-center'>
        
        <div className='order-last md:order-first'>
          <img 
            src={'/blog.png'} 
            alt="CNICE Cosmetics Products" 
          />
        </div>

        {/* Content Section */}
        <div className='flex flex-col justify-center text-right'>
          <h1 className='text-3xl md:text-4xl font-bold leading-tight mb-4'>
            היופי הטבעי <span className='text-[#F4842F]'>שלך</span> מגיע עם <span className='text-[#F4842F]'>CNICE</span>
          </h1>
          
          <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
            ב-CNICE, אנחנו מאמינים שטיפוח עצמי הוא מעשה של אהבה. המוצרים שלנו נוצרו בקפידה כדי להביא 
            את המיטב מהטבע אל עור הפנים והשיער שלך. כל נוסחה היא הרמוניה מושלמת בין מדע מתקדם 
            לבין מרכיבים טבעיים פעילים, המיועדים להעצים את היופי הטבעי שלך.
          </p>

          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col items-end'>
              <div className='p-3 bg-[#F4842F]/10 rounded-full mb-3'>
                <FiDroplet size={24} className='text-[#F4842F]' />
              </div>
              <h2 className='text-xl font-semibold'>אילרונית</h2>
              <p className='text-gray-600 text-sm'>להזנה ושיקום השיער</p>
            </div>

            <div className='flex flex-col items-end'>
              <div className='p-3 bg-[#F4842F]/10 rounded-full mb-3'>
                <GiFlowerEmblem size={24} className='text-[#F4842F]' />
              </div>
              <h2 className='text-xl font-semibold'>צמחי מרפא</h2>
              <p className='text-gray-600 text-sm'>רכיבים פעילים</p>
            </div>

            <div className='flex flex-col items-end'>
              <div className='p-3 bg-[#F4842F]/10 rounded-full mb-3'>
                <FaLeaf size={24} className='text-[#F4842F]' />
              </div>
              <h2 className='text-xl font-semibold'>טבעי</h2>
              <p className='text-gray-600 text-sm'>מרכיבים נקיים</p>
            </div>

            <div className='flex flex-col items-end'>
              <div className='p-3 bg-[#F4842F]/10 rounded-full mb-3'>
                <BsStars size={24} className='text-[#F4842F]' />
              </div>
              <h2 className='text-xl font-semibold'>נוצץ</h2>
              <p className='text-gray-600 text-sm'>תוצאות מידיות</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About