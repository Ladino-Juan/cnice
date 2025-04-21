import React from 'react'
import { cta } from '../assets' // Replace with your cosmetic product image

const CTA = () => {
  return (
    <div className='w-full bg-[#FFF5ED] py-16 md:py-24'>
      <div className='md:max-w-[1280px] m-auto grid md:grid-cols-2 gap-12 items-center max-w-[600px] px-4 md:px-6'>
        
        {/* Product Image */}
        <div className='order-last md:order-first'>
          <img 
            src={cta} 
            alt="CNICE מוצרי טיפוח" 
          />
        </div>

        {/* CTA Content */}
        <div className='text-right space-y-4'>
          <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
            גלו את הסוד <span className='text-[#F4842F]'>ליופי טבעי</span> עם CNICE
          </h1>
          <p className='text-lg text-gray-700'>
            הצטרפו לאלפי לקוחות מרוצים שגילו את ההבדל של מוצרי הטיפוח האיכותיים שלנו
          </p>
          <button className='mt-6 px-8 py-4 rounded-lg bg-[#F4842F] hover:bg-[#e67a2b] text-white font-bold text-lg transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1'>
            קנו עכשיו
          </button>
        </div>

      </div>
    </div>
  )
}

export default CTA