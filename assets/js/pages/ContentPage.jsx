import React, { useRef, useState } from "react";
import SwiperCore, {Navigation, Pagination, Scrollbar, Autoplay, Parallax} from 'swiper/core';
// Install modules
SwiperCore.use([Navigation, Pagination, Scrollbar,Autoplay,Parallax]);
// import Swiper styles
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide}  from "swiper/react";

const Content = () => {
    return (
        <div className="content">
            <Swiper style={{'--swiper-navigation-color': '#c92020','--swiper-pagination-color': '#c91515'}} speed={600} parallax={true} navigation = {true} className="mySwiper">
            <div slot="container-start" className="parallax-bg"  data-swiper-parallax="-23%"></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">Slide 1</div>
                    <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
                            magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
                            quis feugiat.</p>
                    </div>
                </SwiperSlide><SwiperSlide>
                <div className="title" data-swiper-parallax="-300">Slide 2</div>
                <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div className="text" data-swiper-parallax="-100">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                        felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
                        magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
                        quis feugiat.</p>
                </div>
            </SwiperSlide><SwiperSlide>
                <div className=" github">
                    <div className="title-slide mb-5" data-swiper-parallax="-300"><h1>More Local Projects</h1></div>
                    <div className="text" data-swiper-parallax="-100">
                        <a  href=""><img src="../upload/github.png" alt=""/></a>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Content;

