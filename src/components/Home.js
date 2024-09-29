import React from 'react';
import HyperText from "./magicui/hyper-text";


function Home() {
  return (
    <section id="home" className="home-section">
      <header className="header">
        <div className="hero">
          <p className="subtitle">Rice University 2026's</p>
          <h1 className="main-heading">
            ROGER DAI 
          </h1>
        </div>
      </header>

      <div className="about">
        <div className="about-text">
          <h2>ABOUT</h2>
          <p>
            Hi ! I’m Roger Dai, and I’m currently an undergraduate student at Rice University studying Computer Science and Statistics. 
            I am passionate about software engineering, data science, and machine learning. Outside of academics, I enjoy photography. Hope you enjoy my portfolio!
          </p>
          <div className="social-icons">
            <a href="https://github.com/RogerDai2026"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/roger-dai-247083293/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="about-image">
        <img src={`${process.env.PUBLIC_URL}/Qiushi_Dai.jpg`} alt="Roger Dai" />
        </div>
      </div>
    </section>
  );
}

export default Home;
