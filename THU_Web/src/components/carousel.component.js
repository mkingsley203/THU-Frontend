import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showThumbs={false}>
                <div class="carousel-slide">
                    <img src="../Combined 1.png" />
                </div>
                <div class="carousel-slide">
                    <img src="../carousel-kangaroo.png" />
                </div>
                <div class="carousel-slide">
                    <img src="../carousel-bags.png" />
                </div>
            </Carousel>
        </div>
    );
}