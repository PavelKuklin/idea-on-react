import React from 'react';
import styles from './ProductItem.module.scss';

const ProductItem = ({product}) => {
  return (
    <div className={styles.item}>
      <div className={styles.image} style={{ backgroundImage: `url(${product.image})` }}></div>
      <div className={styles.info}>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>
          {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'EUR',
            // eslint-disable-next-line react/prop-types
          }).format(product.price)}
        </p>
      </div>
    </div>
  )
}

export default ProductItem