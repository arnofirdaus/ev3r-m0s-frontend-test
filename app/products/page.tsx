"use client";

import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import ProductCard from "./components/Card";
import { ProductType } from "@/types/product";
import Header from "./components/Header";
import { useProductStore } from "@/store/products";
import CardSkeleton from "./components/CardSkeleton";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const productSearch = useProductStore((state) => state.searchProduct);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/arnofirdaus/items/products"
      );
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (productSearch !== "") {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(productSearch.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [productSearch]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.grid}>
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <div className={styles.loader}>
            <p>Not found...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
