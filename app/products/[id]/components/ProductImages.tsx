"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProductImages.module.scss";

interface ProductImagesType {
  images: string[];
  title: string;
}

const ProductImages: React.FC<ProductImagesType> = ({ images, title }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  return (
    <div className={styles.container}>
      <Image
        src={images[selectedImageIdx]}
        alt={title}
        width={300}
        height={300}
        className={styles.image}
      />
      <div className={styles.containerThumbnail}>
        {images.map((image, i) => {
          return (
            <Image
              key={i}
              src={image}
              alt={title}
              width={75}
              height={75}
              className={`${styles.imageThumbnail} ${
                selectedImageIdx === i && styles.selected
              }`}
              onMouseEnter={() => setSelectedImageIdx(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
