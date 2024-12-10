import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import { ProductType } from '@/types/product'
import Link from 'next/link'
import { currencyFormat } from '@/utils/formatter'

interface ProductCardProps {
  product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={product.images} alt={product.title} width={200} height={200} priority />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{currencyFormat(product.price)}</p>
        <Link href={`products/${product.id}`} className={styles.button}>
          View Product
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
