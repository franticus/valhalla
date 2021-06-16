import React from 'react';
import classes from './Slider.module.css'
import slidePic1 from "../../assets/img/slide.png";
import slidePic2 from '../../assets/img/ghost.jpg'
import slidePic3 from '../../assets/img/The-last-of-us-2.jpg'

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    EffectCoverflow, Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Slider = () => {
    return (
        <section className={classes.sliderContainer}>
            <button className={classes.swiperButtonPrev}>PREV</button>
            <Swiper effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true,
                    }} pagination={true}
                    className={classes.swiperContainer}>
                <SwiperSlide className={classes.swiperSlide}>
                    <img src={slidePic1} alt="assassins1"/></SwiperSlide>
                <SwiperSlide  className={classes.swiperSlide}>
                    <img src={slidePic2} alt="assassins2"/></SwiperSlide>
                <SwiperSlide  className={classes.swiperSlide}>
                    <img src={slidePic3} alt="assassins3"/></SwiperSlide>
            </Swiper>
            <button className={classes.swiperButtonNext}>NEXT</button>
        </section>
    );
};

export default Slider;
