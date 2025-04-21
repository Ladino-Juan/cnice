// Feedback.js
import React from 'react'
import Slider from "react-slick";
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  return (
    <div className='w-full bg-[#FFF5ED] py-16 md:py-24' id='reviews'>
      <div className='md:max-w-[1280px] m-auto max-w-[600px] px-4 md:px-6'>
        <div className='py-4 text-right'>
          <h1 className='py-2 text-2xl md:text-3xl font-bold'>לקוחות <span className='text-[#F4842F]'>מספרים</span></h1>
          <p className='text-[#6D737A] text-sm md:text-base'>החוויות והמלצות של הלקוחות שלנו</p>
        </div>
        
        <div className='px-0 feedback-slider'>
        <Slider {...settings}>
  <FeedbackCard 
    name="שירה לוי"
    role="לקוחה קבועה"
    text="אני פשוט מאוהבת בשמפו שלכם. אחרי שנים של התנסות במוצרים בלי תוצאה – סוף סוף משהו שעובד! השיער שלי נעים, מבריק ולא נושר כמו פעם."
  />
  <FeedbackCard 
    name="נועה כהן"
    role="משתמשת במוצרי פנים"
    text="הג'ל ניקוי הזה הוא הצלה. יש לי עור רגיש והייתי ממש סקפטית, אבל הוא מרגיש נעים, לא מייבש, ומשאיר את העור כל כך רענן ונקי."
  />
  <FeedbackCard 
    name="מיכל אברהם"
    role="לקוחה חדשה"
    text="האמת? הופתעתי ממש. קניתי את מסכת השיער במקרה – ועכשיו אני לא יכולה בלעדיה. השיער מרגיש רך ובריא, כאילו הייתי במספרה."
  />
</Slider>
        </div>
      </div>
    </div>
  )
}

export default Feedback;