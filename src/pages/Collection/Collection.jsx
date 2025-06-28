import React from 'react';

import { ProductService } from '@services/product.service';
import ProductsPreloader from '../../components/Sceleton/Sceleton';
import ProductItem from '../../components/ProductItem/ProductItem';
import styles from './Collection.module.scss';

const Catalog = () => {
  let [isLoanding, setIsloading] = React.useState(true);
  let [products = [], setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await ProductService.getAll();
      console.log('data: ', data);
      setProducts(data);
      setIsloading(false);
    };

    fetchData();
  }, []);
  const preloader = [...new Array(4)].map((_, index) => (
    <ProductsPreloader key={index} />
  ));
  const productsArr = products.map(product => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <div>
      <div className='container'>
        <h1 className='page-title'>Catalog</h1>
        <div className={styles['catalog-block']}>
          <div className={styles.catalog}>
            {products.length && !isLoanding ? productsArr : preloader}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
