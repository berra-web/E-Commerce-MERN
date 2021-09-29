import React from "react";
import { Card, Carousel, Image } from "react-bootstrap";
import { API } from "../config";


const ShowImage = ({ item, url }) => (
    
    <>
        <Card.Img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            
            
        />
        </>
        
);

export default ShowImage;
