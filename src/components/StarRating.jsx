import React from 'react'

const StarRating = ({ rating = 0, reviewCount = 0 }) => {
  // Ensure rating is a number between 0 and 5
  const validRating = Math.min(Math.max(Number(rating) || 0, 0), 5);
  const stars = Math.round(validRating * 2) / 2; // Round to nearest 0.5 for half-stars

  return (
    <div className='flex items-center gap-0.5'>
      {[1, 2, 3, 4, 5].map((star) => {
        let starClass = 'text-gray-300'; // Default empty star
        if (stars >= star) {
          starClass = 'text-[#F4842F]'; // Full star
        } else if (stars >= star - 0.5) {
          starClass = 'text-[#F4842F]'; // Half star (we'll handle the display)
        }

        return (
          <div key={star} className='relative'>
            {/* Full star background (always shown) */}
            <svg 
              className={`w-5 h-5 ${starClass}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            
            {/* Half star mask when needed */}
            {stars >= star - 0.5 && stars < star && (
              <div className='absolute inset-0 w-1/2 overflow-hidden'>
                <svg 
                  className="w-5 h-5 text-[#F4842F]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            )}
          </div>
        );
      })}
      
      {reviewCount > 0 && (
        <span className='mr-2 text-sm text-gray-600'>({reviewCount})</span>
      )}
    </div>
  );
}

export default StarRating;