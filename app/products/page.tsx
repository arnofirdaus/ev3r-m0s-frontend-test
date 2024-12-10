import React from 'react'
import styles from './Products.module.scss'
import ProductCard from './components/Card'
import { ProductType } from '@/types/product'

const ProductsPage = () => {
  const product: ProductType = {
		id: 1,
		title: "Laptop Asus",
		price: 150000,
		images: "https://picsum.photos/200",
		variance: "electronic"
	}

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>List of Products</h1>
      <div className={styles.grid}>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </div>
  )
}

export default ProductsPage
