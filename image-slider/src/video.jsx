/* eslint-disable no-unused-vars */
// src/components/VideoBackground.js
import React from 'react';
import './index.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={`./assets/mustafar-red-like-mustafar.webm`} type="mp4" />
        
      </video>
    </div>
  );
};

export default VideoBackground;
