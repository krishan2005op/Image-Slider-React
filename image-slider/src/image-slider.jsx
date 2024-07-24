/* eslint-disable no-unused-vars */
import image1 from "./assets/images/dragon_1.jpg"
import image2 from "./assets/images/dragon_2.jpg"
import image3 from "./assets/images/dragon_3.jpg"
import image4 from "./assets/images/dragon_4.jpg"
import image5 from "./assets/images/dragon_5.jpg"
import image6 from "./assets/images/dragon_6.jpg"
import image7 from "./assets/images/dragon_7.jpg"
import image8 from "./assets/images/dragon_8.jpg"
import image9 from "./assets/images/dragon_9.jpg"
import image10 from "./assets/images/dragon_10.jpg"
import './index.css'

import React, { useState } from 'react';
import VideoBackground from "./video"



function ImageSlider(){

    
        const [mainImage, setMainImage] = useState(image1);
    
      
        const images = [
          { src: image1, alt: 'Image 1' },
          { src: image2, alt: 'Image 2' },
          { src: image3, alt: 'Image 3' },
          { src: image4, alt: 'Image 3' },
          { src: image5, alt: 'Image 3' },
          { src: image6, alt: 'Image 3' },
          { src: image7, alt: 'Image 3' },
          { src: image8, alt: 'Image 3' },
          { src: image9, alt: 'Image 3' },
          { src: image10, alt: 'Image 3' },
        ];
      
        const handleThumbClick = (imageSrc) => {
          setMainImage(imageSrc);
        };
    

    return(
        <>
            <div className="image-slider">
                <VideoBackground/>
                <div className="sidebar">

                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="thumb"
                            onClick={() => handleThumbClick(image.src)}
                        />
                    ))}
                </div>

                <div className="main-image">
                    <img src={mainImage} alt="Main Image" />
                </div>
            </div>

        </>
    )
}

    



export default ImageSlider;