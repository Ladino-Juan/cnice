import React from 'react'
import StarRating from './StarRating'

const Card = ({product}) => {
  return (
    <div className='group relative z-10 bg-white overflow-hidden rounded-xl mr-2 my-4 text-right shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer'>
      {/* Product Image */}
      <div className='overflow-hidden h-56'> {/* Slightly reduced height */}
        <img 
          src={product.linkImg} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          alt={product.title}
        />
      </div>
      
      {/* Category Badge */}
      <div className='absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-800 shadow-sm'>
        {product.category}
      </div>

      {/* Product Info */}
      <div className='p-3 pb-14'>
        <h1 className='text-md font-semibold text-gray-800 mb-1 line-clamp-2'>{product.title}</h1>
        <div className='flex justify-between items-center mt-2'>
          <StarRating rating={product.rating}/>
          <h3 className='text-lg font-bold text-[#F4842F]'>{product.price} ₪</h3>
        </div>
      </div>

      <a 
  href="http://wa.link/vbahg2" 
  target="_blank" 
  rel="noopener noreferrer"
  className='absolute bottom-0 left-0 right-0 bg-[#F4842F] hover:bg-[#e67a2b] text-white py-2 transition-colors duration-200 font-medium text-sm text-center'
>
  הוסף לסל
</a>
    </div>
  )
}

export default Card
