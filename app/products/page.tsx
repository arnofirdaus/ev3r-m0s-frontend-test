"use client";

import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import ProductCard from "./components/Card";
import { ProductType } from "@/types/product";
import CardHeader from "./components/CardHeader";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/arnofirdaus/items/products"
      );
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <CardHeader />
      <div className={styles.grid}>
        {loading ? (
          <div className={styles.loader}>
            <p>Loading products...</p>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
