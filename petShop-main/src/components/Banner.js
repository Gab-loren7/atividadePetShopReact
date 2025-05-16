import React from 'react'
import './Banner.css'
import Carousel from 'react-bootstrap/Carousel';
import Banner01 from '../imagens/Banner-01.jpg'
import Banner02 from '../imagens/banho-e-tosa.png'
import Banner03 from '../imagens/banner.jpg'

function Banner() {
    return (


  <Carousel>
            <Carousel.Item>
                <img className='banner1' src={Banner01} />
            </Carousel.Item>
            <Carousel.Item>
                <img className='banner2' src={Banner02} />
            </Carousel.Item>
            <Carousel.Item>
                <img className='banner3' src={Banner03} />
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;