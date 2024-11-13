import React from 'react';
import BlurFade from "./magicui/blur-fade";

const images = [
  { src: `${process.env.PUBLIC_URL}/image/DSC_4108.jpg`, orientation: 'landscape' },
  { src: `${process.env.PUBLIC_URL}/image/DSC_4109.jpg`, orientation: 'landscape' },
  { src: `${process.env.PUBLIC_URL}/image/DSC_4110.jpg`, orientation: 'landscape' },
  { src: `${process.env.PUBLIC_URL}/image/DSC_4111.jpg`, orientation: 'landscape' },
  { src: `${process.env.PUBLIC_URL}/image/DSC_4112.jpg`, orientation: 'landscape' },
  { src: `${process.env.PUBLIC_URL}/image/DSC_4113.jpg`, orientation: 'landscape' },
  { src: `${process.env.PUBLIC_URL}/image/DSC_4114.jpg`, orientation: 'landscape' },
  { src: `${process.env.PUBLIC_URL}/image/DSC_4115.jpg`, orientation: 'landscape' },
  { src: `${process.env.PUBLIC_URL}/image/DSC_4116.jpg`, orientation: 'landscape' },
  { src: `${process.env.PUBLIC_URL}/image/DSC_4117.jpg`, orientation: 'landscape' },
];

function ImageGallery() {
  return (
    <div className="image-gallery" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {images.map((image, index) => (
        <BlurFade key={index} className="image-container" delay={index * 0.4} inView={true}>
              <img
                src={image.src} 
                alt=""
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
      <div className="text-left" style={{ display: 'flex', alignItems: 'left', gap: '5px', mb:"10px"}}>
        <p style={{ margin: 19}}> 
          I started taking photos since 2023. My themes covered cityscapes, and portraits. I am currently using Nikon ZF. Here are some of my photos. If you would like to view more, please visit my 
          <a href="https://drive.google.com/drive/folders/1Kp8d10Bh5wPr-4nrpQtq_UT7BlB8gu4k?usp=sharing"> Google Drive</a>:
        </p>
      </div>
      <ImageGallery />
    </div>
  );
}

export default Interests;
