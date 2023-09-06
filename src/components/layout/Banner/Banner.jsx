import React from 'react';

import bannerImage from '../../../assets/images/718-cayman-1-25.jpg';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className='bannerMain-wrapper'>
      <div className='container'>
        <div className={styles.bannerBlock}>
        {/* <div className='bannerMain__block'> */}
          <img src={bannerImage} alt='' className='bannerMain__img' />
          Banner
        </div>
      </div>
    </div>
  );
};

export default Banner;
