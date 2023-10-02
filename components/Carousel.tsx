"use client"
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardDataProps } from '@/types';
import Slider from 'react-slick';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const Carousel = ({ cardData }: CardDataProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      const nextSlide = currentSlide + 1;
      sliderRef.current.slickGoTo(nextSlide); // Go to the next slide
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      const prevSlide = currentSlide - 1;
      sliderRef.current.slickGoTo(prevSlide); // Go to the previous slide
    }
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next); // Update the current slide index before the change
    },
  };

  return (
    <>
      <div className="carousel">
        <Slider {...settings} ref={sliderRef}>
          {cardData.map((card) => (
            <div className="box rounded-xl" key={card.id}>
                  <div className="box-front-content flex justify-center pt-12">
                    <Image src={card.imageUrl} width={1342} height={600} alt="hehe" />
                </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center gap-6 mt-10">
        <button
          className={`bg-white py-4 px-4 rounded-full text-[#15003E] ${currentSlide === 0 ? 'text-lightGrey' : ''}`}
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className={`bg-white py-4 px-4 rounded-full text-[#15003E] ${
            currentSlide === cardData.length - 1 ? 'hidden' : ''
          }`}
          onClick={goToNextSlide}
          disabled={currentSlide === cardData.length - 1}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
};

export default Carousel;
