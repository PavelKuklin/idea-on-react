import React, { useEffect, useState } from 'react';
import { FaCircleArrowUp } from 'react-icons/fa6';

import styles from './ToTopButton.module.scss';

const ToTopButton = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 400 ? setShowBtn(true) : setShowBtn(false);
    });
  });
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showBtn && (
        <div className={styles.top} onClick={toTop}>
          <FaCircleArrowUp className={styles['top__icon']} />
        </div>
      )}
    </>
  );
};

export default ToTopButton;
