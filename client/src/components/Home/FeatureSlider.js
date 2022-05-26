import React from 'react'
import {Carousel} from 'react-bootstrap'

function FeatureSlider(){

    return(
        <Carousel id = 'featureSlider'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media.the-digital-picture.com/Images/Pics/2020/2020-10-15_06-51-53-HDR.jpg"
                width="100"
                height="300"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{size: "large"}}>Create a Group For Your Vacation</h3>
                <p style={{fontWeight: 'bold'}}>Have your friends join the group and plan your vacation together.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://phlearn.com/wp-content/uploads/2019/03/david-klaasen-775082-unsplash.jpg"
                width="100"
                height="300"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1 style={{size: "large"}}>Chat With Group Members</h1>
                <p style={{fontWeight: 'bold'}}>Let your friends or family know what you are doing.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://travellemming.com/wp-content/uploads/Places-to-Go-Camping-Near-San-Diego.jpg"
                width="100"
                height="300"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 style={{size: "large"}}>Upload Fun Vacation Pictures</h3>
                <p style={{fontWeight: 'bold'}}>Take a photo and the memories will last a lifetime.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default FeatureSlider