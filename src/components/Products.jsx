import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { products } from "../data/Products";

const Products = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#ffd3b1] py-8 md:py-24" id="products">
      <div className="md:max-w-[1280px] m-auto max-w-[600px] px-4 md:px-6">
        <div className="py-4 text-right">
          <h1 className="py-2 text-2xl md:text-3xl font-bold">
            המוצרים הפופולריים שלנו
          </h1>
          <p className="text-[#6D737A] text-sm md:text-base">
            מוצרי טיפוח איכותיים עם חומרים פעילים
          </p>
        </div>

        <div className="px-0 md:px-4">
          <Slider {...settings}>
            {products.map((product, i) => (
              <div key={i} className="px-2 outline-none">
                <Card product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;