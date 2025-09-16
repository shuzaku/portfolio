"use client";

import Slideshow from "./Slideshow";

export default function SlideshowExample() {
  // Example image URLs - replace with your actual images
  const sampleImages = [
    "https://res.cloudinary.com/shuzchef/image/upload/v1757984649/portfolio/ykonh6cflvs594om0ye9.png",
    "https://res.cloudinary.com/shuzchef/image/upload/v1757796678/portfolio/ckev6mkjsf0elso75qxm.png",
    "https://res.cloudinary.com/shuzchef/image/upload/v1757969941/portfolio/x5gst9wfaehn0dkupcf3.png",
    "https://res.cloudinary.com/shuzchef/image/upload/v1757798722/portfolio/vrqhvv3ol4h2w4wzj0j9.png",
    "https://res.cloudinary.com/shuzchef/image/upload/v1757970503/portfolio/wk7zebtto4nyie3wohvv.png"
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Slideshow Component Example</h2>
      
      {/* Basic slideshow */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Basic Slideshow</h3>
        <Slideshow 
          images={sampleImages}
          alt="Project screenshots"
        />
      </div>

      {/* Customized slideshow */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Customized Slideshow</h3>
        <Slideshow 
          images={sampleImages}
          autoPlay={false}
          showDots={true}
          showArrows={true}
          alt="Custom slideshow"
          className="custom-slideshow"
        />
      </div>

      {/* Single image */}
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Single Image</h3>
        <Slideshow 
          images={[sampleImages[0]]}
          alt="Single image"
        />
      </div>
    </div>
  );
}
