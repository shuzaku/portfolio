"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  showExpand?: boolean;
  className?: string;
  imageClassName?: string;
  alt?: string;
}

export default function Slideshow({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  showExpand = true,
  className = "",
  imageClassName = "",
  alt = "Slideshow image"
}: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Keyboard support for expanded view
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isExpanded) return;
      
      switch (event.key) {
        case 'Escape':
          setIsExpanded(false);
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case ' ':
          event.preventDefault();
          togglePlayPause();
          break;
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded, currentIndex]);

  if (!images || images.length === 0) {
    return (
      <div className={`slideshow-container ${className}`}>
        <div className="slideshow-placeholder">
          <p>No images available</p>
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`slideshow-container ${className}`}>
        <div className="slideshow-single">
          <Image
            src={images[0]}
            alt={alt}
            width={800}
            height={600}
            className={`slideshow-image ${imageClassName}`}
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`slideshow-container ${className}`}>
      <div className="slideshow-wrapper">
        {/* Main image display */}
        <div className="slideshow-image-container">
          <Image
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            width={800}
            height={600}
            className={`slideshow-image ${imageClassName}`}
            priority={currentIndex === 0}
          />
          
          {/* Play/Pause button */}
          <button
            className="slideshow-play-pause"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>

          {/* Expand button */}
          {showExpand && (
            <button
              className="slideshow-expand"
              onClick={toggleExpand}
              aria-label="Expand image"
            >
              🔍
            </button>
          )}

          {/* Navigation arrows */}
          {showArrows && (
            <>
              <button
                className="slideshow-arrow slideshow-arrow-left"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="slideshow-arrow slideshow-arrow-right"
                onClick={goToNext}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="slideshow-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Dot indicators */}
        {showDots && (
          <div className="slideshow-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slideshow-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Thumbnail navigation */}
        <div className="slideshow-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`slideshow-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={60}
                className="slideshow-thumbnail-image"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <div className="slideshow-modal" onClick={toggleExpand}>
          <div className="slideshow-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="slideshow-modal-close"
              onClick={toggleExpand}
              aria-label="Close expanded view"
            >
              ✕
            </button>

            {/* Expanded image */}
            <div className="slideshow-modal-image-container">
              <Image
                src={images[currentIndex]}
                alt={`${alt} ${currentIndex + 1} - Expanded view`}
                width={1200}
                height={800}
                className="slideshow-modal-image"
                priority
              />
            </div>

            {/* Modal navigation arrows */}
            {showArrows && images.length > 1 && (
              <>
                <button
                  className="slideshow-modal-arrow slideshow-modal-arrow-left"
                  onClick={goToPrevious}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="slideshow-modal-arrow slideshow-modal-arrow-right"
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            {/* Modal image counter */}
            <div className="slideshow-modal-counter">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Modal thumbnails */}
            {images.length > 1 && (
              <div className="slideshow-modal-thumbnails">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`slideshow-modal-thumbnail ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={75}
                      className="slideshow-modal-thumbnail-image"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Modal controls */}
            <div className="slideshow-modal-controls">
              <button
                className="slideshow-modal-play-pause"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? "⏸️" : "▶️"}
              </button>
              <div className="slideshow-modal-instructions">
                Use arrow keys to navigate • Space to play/pause • Esc to close
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
