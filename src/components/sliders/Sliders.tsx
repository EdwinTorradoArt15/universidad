"use client";

import { Carousel as Slider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const imagesCarousel = [
  { id: 1, image: "https://picsum.photos/1280/720" },
  { id: 2, image: "https://picsum.photos/1280/720" },
  { id: 3, image: "https://picsum.photos/1280/720" },
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
            src={image.image}
            alt={`Imagen de Carousel${image.id}`}
            className="image-slider"
            width={1280}
            height={720}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
