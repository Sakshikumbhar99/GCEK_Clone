import React, { useState, useEffect } from "react";
import "../Slider/style.css";
import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";

const images = [
  { url: Slider1 },
  { url: Slider2 },
  { url: Slider3 },
];

const Slider = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    let timeoutId;
    if (isPlaying) {
      timeoutId = setTimeout(() => {
        handleNext();
      }, 5000); 
    }
    return () => clearTimeout(timeoutId);
  }, [isPlaying, currentIndex]);

  return (
    <section className="slider">
      <div className="wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`each-slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.url})` }}
          ></div>
        ))}
      </div>
      <div className="arrows-container">
        <button type="button" className="arrows prev" onClick={handlePrevious}>
          <svg fill="#FFFFFF" width="40" height="25" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
        <button type="button" className="arrows next" onClick={handleNext}>
          <svg className="svg-bordered" fill="#FFFFFF" height="25" viewBox="0 0 24 24" width="40">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
      <button type="button" className="toggle-play" onClick={handlePlayPause}>
        {isPlaying ? (
          <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        ) : (
          <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default Slider;
