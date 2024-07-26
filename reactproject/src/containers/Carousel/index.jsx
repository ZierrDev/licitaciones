import { PropTypes } from "prop-types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import "./Carousel.css";

const Carousel = ({ elements }) => {
  const settings = {
    className: "slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: (
      <div>
        <div className='h-full'>
          <ChevronRightIcon className='fill-stone-900 h-full w-10 ' />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className='h-full relative -left-4'>
          <ChevronLeftIcon className='fill-stone-900 h-full w-10' />
        </div>
      </div>
    ),
  };
  return (
    <div className='flex items-center justify-center max-w-xs md:max-w-3xl w-full'>
      <Slider {...settings}>
        {elements.map(({ id, src, alt }, index) => (
          <figure key={index} className='w-full object-cover'>
            <img
              id={`slice-${id}`}
              src={src}
              alt={alt}
              className='w-full h-60 md:h-96 object-cover'
            />
          </figure>
        ))}
      </Slider>
    </div>
  );
};
Carousel.propTypes = {
  elements: PropTypes.array.isRequired,
};

export default Carousel;
