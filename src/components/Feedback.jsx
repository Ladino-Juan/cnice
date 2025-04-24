// Feedback.js
import React from "react";
import Slider from "react-slick";
import FeedbackCard from "./FeedbackCard";

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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#FFF5ED] py-16 md:py-24" id="reviews">
      <div className="md:max-w-[1280px] m-auto max-w-[600px] px-4 md:px-6">
        <div className="py-4 text-right">
          <h1 className="py-2 text-2xl md:text-3xl font-bold">
            לקוחות <span className="text-[#F4842F]">מספרים</span>
          </h1>
          <p className="text-[#6D737A] text-sm md:text-base">
            החוויות והמלצות של הלקוחות שלנו
          </p>
        </div>

        <div className="px-0 feedback-slider">
          <Slider {...settings}>
            <FeedbackCard
              name="שירה לוי"
              role="לקוחה קבועה"
              text="קניתי את השמפו בלי יותר מדי ציפיות, רק כי ראיתי עליו המלצה. אחרי כמה שימושים שמתי לב שהשיער הרבה פחות נושר ונהיה יותר רך. ממש שיפור לעומת מה שהיה קודם."
            />

            <FeedbackCard
              name="נועה כהן"
              role="משתמשת במוצרי פנים"
              text="יש לי עור ממש רגיש וכל דבר ישר עושה לי גירוי, אז לא ציפיתי להרבה. אבל הג'ל ניקוי שלכם ממש הפתיע אותי – מרגיש עדין, בלי צריבה, והעור נשאר חלק ונקי."
            />
            <FeedbackCard
              name="מיכל אברהם"
              role="לקוחה חדשה"
              text="לא הכרתי אתכם קודם, סתם ראיתי פרסום והזמנתי את המסכה לשיער. חייבת להגיד – היא ממש טובה. השיער שלי נהיה הרבה פחות יבש, ואפילו בעלי שם לב שמשהו השתנה 😅"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
