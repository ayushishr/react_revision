import  { useState } from 'react';

function ImageSlider() {
  const images = [
    'https://via.placeholder.com/600x300/FF0000/FFFFFF?text=Image+1',
    'https://via.placeholder.com/600x300/00FF00/FFFFFF?text=Image+2',
    'https://via.placeholder.com/600x300/0000FF/FFFFFF?text=Image+3',
    'https://via.placeholder.com/600x300/FFFF00/000000?text=Image+4',
   
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="image-slider">
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default ImageSlider;