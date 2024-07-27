import React from "react";
import Slider from "react-slick";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds (e.g., 3000ms = 3s)
  };

  return (
    <div className=" relative w-full h-full mt-36 z-[-1]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-auto ">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="  inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
