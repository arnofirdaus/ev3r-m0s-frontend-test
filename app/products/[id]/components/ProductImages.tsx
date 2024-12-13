"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProductImages.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface ProductImagesType {
  images: string[];
  title: string;
}

const ProductImages: React.FC<ProductImagesType> = ({ images, title }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const moveImage = (dir: "next" | "prev") => {
    setSelectedImageIdx(
      dir === "prev" ? selectedImageIdx - 1 : selectedImageIdx + 1
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.containerImage}>
          <FaArrowLeft
            className={`${styles.arrowIcon} ${styles.left}`}
            onClick={() => selectedImageIdx > 0 && moveImage("prev")}
            aria-disabled={selectedImageIdx > 0}
          />
          <FaArrowRight
            className={`${styles.arrowIcon} ${styles.right}`}
            onClick={() =>
              selectedImageIdx < images.length - 1 && moveImage("next")
            }
            aria-disabled={selectedImageIdx < images.length - 1}
          />
          <Image
            src={images[selectedImageIdx]}
            alt={title}
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
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
