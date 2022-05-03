import React from 'react'
import {Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function FeatureSlider(){

    return(
        <Carousel id = 'featureSlider'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://demolay.org/wp-content/uploads/2018/12/Vacation.jpg"
                width="100"
                height="300"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_20/1718091/best-vacation-kb-main-210517.jpg"
                width="100"
                height="300"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://demolay.org/wp-content/uploads/2018/12/Vacation.jpg"
                width="100"
                height="300"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default FeatureSlider