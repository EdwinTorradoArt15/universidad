"use client";

import { Carousel as Slider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../../public/images/Carousel1.jpg";
import image2 from "../../../public/images/Carousel2.jpg";
import image3 from "../../../public/images/Carousel3.jpg";
import Image from "next/image";

const imagesCarousel = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
];

const Sliders = () => {
  return (
    <Slider
      autoPlay={true}
      interval={3000}
      dynamicHeight={true}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      infiniteLoop={true}
    >
      {imagesCarousel.map((image) => (
        <div key={image.id}>
          <Image
            src={image.image.src}
            alt={`Imagen de Carousel${image.id}`}
            className="image-slider"
            width={1920}
            height={450}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
