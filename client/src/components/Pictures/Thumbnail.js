import React, {useState,useEffect} from "react";
import {Container, Button, Card} from "react-bootstrap"
import {useParams, useNavigate} from 'react-router-dom'





function Thumbnail({pic}){

    console.log(pic)
    return (
        <Card className="thumbnailCard">
            {/* <Image cloudName='dxvcz3scf' publicId={pic.thumbnail}/> */}
            <img src={pic.thumbnail}/>
        </Card>
            
        
            
        
        
    )
}

export default Thumbnail