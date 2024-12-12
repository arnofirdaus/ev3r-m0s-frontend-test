import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import { ProductType } from "@/types/product";
import Link from "next/link";
import { currencyFormat } from "@/utils/formatter";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={200}
          height={200}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <p className={styles.title} aria-label="title of product">
            {product.title}
          </p>
          <div className={styles.variance} aria-label="variance of product">
            {product.variance}
          </div>
        </div>
        <div className={styles.price}>{currencyFormat(product.price)}</div>
        <Link
          href={`products/${product.id}`}
          className={styles.button}
          aria-label="view product"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
