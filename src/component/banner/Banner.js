import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import "./Banner.css";

const Banner = ()=>{
    return (
        <div className="banner">
              <div className="banner__carousel">
                <Carousel
                 autoPlay
                 infiniteLoop
                 showIndicators={false}
                 showStatus={false}
                 showThumbs={false}
                 interval={5000}
                >
                  <div>
                  <img loading="lazy"
                  className="bannerHome__Image"
                   src="https://as1.ftcdn.net/v2/jpg/00/68/41/94/1000_F_68419484_XElvqGxCGLgzjUlZCDzIuN5U07njGk7e.jpg"></img>
                  </div>
                  <div>
                  <img loading="lazy"
                  className="bannerHome__Image"
                      src="https://as2.ftcdn.net/v2/jpg/04/22/92/89/1000_F_422928981_qYC2aOucXliKAj0p7i5nb5sTieNns8SZ.jpg"
                      />
                    
                  </div>
                  <div>
                    <img
                     loading="lazy"
                     className="bannerHome__Image"
                     src="https://as1.ftcdn.net/v2/jpg/02/81/51/48/1000_F_281514801_Bwlf33Ksem5MiCG36pfw6t0pIFab8zq9.jpg"
                    />
                  </div>

                  </Carousel>

              </div>

        </div>
    )
}

export default Banner;

{
    /* */
}