import React from 'react';

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


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  
  React.useEffect(() => {
    const currentRef = domRef.current; // Make a local copy of domRef.current

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the local copy here
      }
    };
  }, []);
  
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


function ImageGallery() {
  return (
    <div className="image-gallery" style={{ display: 'flex', flexWrap: 'wrap', gap: '21px' }}>
      {images.map((image, index) => (
        <FadeInSection key={index} className="image-container" delay={index * 0.15} inView={true}>
              <img
                src={image.src} 
                alt=""
                className={image.orientation === 'landscape' ? 'landscape' : 'portrait'}
              />
        </FadeInSection>
      ))}
    </div>
  );
}

function Interests() {
  return (
    <div className="interests p-4">
      <h2>Photography</h2>
      <div className="text-left" style={{ display: 'flex', alignItems: 'left', gap: '5px', marginBottom: '10px' }}>
        <p style={{ margin: 17 }}>
          I started taking photos since 2023. My themes covered cityscapes, and portraits. I am currently using Nikon ZF. Here are some of my photos. If you would like to view more, please visit my
          <a
            href="https://drive.google.com/drive/folders/1Kp8d10Bh5wPr-4nrpQtq_UT7BlB8gu4k?usp=sharing"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            &nbsp;Google Drive
          </a>
        </p>
      </div>
      <ImageGallery />
    </div>
  );
}

export default Interests;
