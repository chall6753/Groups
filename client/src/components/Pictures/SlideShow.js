import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function SlideShow(){
    const group_id = useParams().id
    const [pics, setPics] = useState([])
   
    useEffect(()=>{
        fetch(`/api/pictures/${group_id}`)
        .then(res=>res.json())
        .then(res=> setPics(res))
    },[])

    return(
        
        <Carousel id = 'slideShow' >

            {pics.map((pic)=>{
                console.log(pic)
                return (
                    <Carousel.Item>
                        <img
                        src={pic.thumbnail}
                        width="200"
                        height="200"
                        alt="First slide"
                        />
                    </Carousel.Item>
                )

            })}
            
            
            
        </Carousel>

    )
}

export default SlideShow