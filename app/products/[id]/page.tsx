import { ProductType } from "@/types/product";
import Image from "next/image";
import React from "react";
import styles from "./ProductDetail.module.scss";
import Link from "next/link";
import { currencyFormat } from "@/utils/formatter";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";

async function fetchProductDetail(id: string): Promise<ProductType> {
  const res = await fetch(
    `https://my-json-server.typicode.com/arnofirdaus/items/products/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }
  return res.json();
}

const ProductDetailPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const params = await props.params;
  const product = await fetchProductDetail(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className={styles.container}>
      <div>
        <Link href="/products" className={styles.backLink}>
          <FaArrowLeftLong className={styles.icon} /> Back
        </Link>
        <h1 className={styles.heading}>{product.title}</h1>
      </div>
      <div className={styles.containerContent}>
        <Image
          src={product.images}
          alt={product.title}
          width={300}
          height={300}
          className={styles.image}
        />
        <div className={styles.content}>
          <div className={styles.variance}>{product.variance}</div>
          <div className={styles.details}>
            <p aria-label="rating of product">
              <strong>Rating:</strong> {product.rating}{" "}
              <FaStar className={styles.starIcon} />
            </p>
            <p aria-label="stock of product">
              <strong>Stock:</strong> {product.stock}
            </p>
            <p aria-label="number sold of product">
              <strong>Sold:</strong> {product.sold}
            </p>
          </div>
          <p className={styles.price} aria-label="price of product">
            {currencyFormat(product.price)}
          </p>
          <p className={styles.description} aria-label="description of product">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
