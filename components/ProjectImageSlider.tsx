"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectImageSliderProps {
  images: string[];
  title: string;
}

export default function ProjectImageSlider({
  images,
  title,
}: ProjectImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`${title} - captura ${index + 1}`}
          fill
          className={`
            object-cover
            transition-all duration-1100
            group-hover:brightness-[0.35]
            group-hover:scale-105
            ${
              currentImage === index
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />
      ))}
    </div>
  );
}