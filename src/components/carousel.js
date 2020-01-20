import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import flower1 from '../assets/flower1.jpg'
import flower2 from '../assets/flower2.jpg'
import flower3 from '../assets/flower3.jpg'



const CarouselComp = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img height={500}
                    className="d-block w-100"
                    src={flower1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={500}
                    className="d-block w-100"
                    src={flower2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={500}
                    className="d-block w-100"
                    src={flower3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComp;