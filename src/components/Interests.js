import React from 'react';
import BlurFade from "./magicui/blur-fade";


const images = [
  { src: '/image/DSC_4108.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4109.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4110.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4111.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4112.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4113.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4114.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4115.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4116.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4117.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4118.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4119.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4120.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4121.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4122.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4123.jpg', orientation: 'landscape' },
  { src: '/image/DSC_4124.jpg', orientation: 'landscape' },
];



function ImageGallery() {
  return (
    <div className="image-gallery" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {images.map((image, index) => (
        <BlurFade key={index} className="image-container" delay={index * 0.4} inView={true}>
          <img 
            src={image.src} 
            alt={`Gallery Image ${index + 1}`}
            className={image.orientation === 'landscape' ? 'landscape' : 'portrait'}
          />
        </BlurFade>
      ))}
    </div>
  );
}


function Interests() {
  return (
    <div className="interests p-4">
      <h2> photography</h2>
      <ImageGallery />
    </div>
  );
}

export default Interests;
