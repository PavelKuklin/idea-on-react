import React, { useRef, useState } from 'react';
import Copy from './copy.svg';
import styles from './ClampFunction.module.scss';

const ClampFunction = () => {
  const [minWidthPX, setMinWidthPX] = useState(320);
  const [maxWidthPX, setMaxWidthPX] = useState(1920);
  const [minFontSizePX, setMinFontSizePX] = useState(1);
  const [maxFontSizePX, setMaxFontSizePX] = useState(3);
  const [pixelsPerRem, setPixelsPerRem] = useState(16);

  const fields = [
    {
      title: 'Minimum viewport width = ',
      func: minWidthPX,
      setFunc: setMinWidthPX
    },
    {
      title: 'Maximum viewport width = ',
      func: maxWidthPX,
      setFunc: setMaxWidthPX
    },
    {
      title: 'Minimum font size = ',
      func: minFontSizePX,
      setFunc: setMinFontSizePX
    },
    {
      title: 'Maximum font size = ',
      func: maxFontSizePX,
      setFunc: setMaxFontSizePX
    },
    { title: 'Pixels per rem = ', func: pixelsPerRem, setFunc: setPixelsPerRem }
  ];

  const copyShow = useRef();
  const copyShow1 = useRef();

  const copyToClipboard = (showMEss, text) => {
    navigator.clipboard.writeText(text);
    showMEss.current.style.opacity = '1';
    setTimeout(() => showMEss.current.style.opacity = '0', 5000);
  };

  const minWidth = minWidthPX / pixelsPerRem;
  const maxWidth = maxWidthPX / pixelsPerRem;

  const slope = (maxFontSizePX - minFontSizePX) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSizePX;


  const clampFunc = `clamp(${minFontSizePX}rem, ${yAxisIntersection.toFixed(
    4
  )}rem + ${(slope * 100).toFixed(4)}vw, ${maxFontSizePX}rem)`;
  const clampCalcFunc = `clamp(${minFontSizePX}rem, calc(${yAxisIntersection.toFixed(
    4
  )}rem + ${(slope * 100).toFixed(4)}vw), ${maxFontSizePX}rem)`;

  return (
    <div>
      <div className='container'>
        <h1 className={styles['page-title']}>Clamp function</h1>
        <p className={styles['page-description']}>
          Данная функция рассчитывает наиблее приемлемые значения для
          адаптивного уменьшения/увеличения размеров.
        </p>
        <p className={styles['page-description']}>Подходит для размеров шрифтов, отступов, размеров блоков...</p>

        <div className={styles['block']}>
          {fields.map((field, index) => (
            <div className={styles['block__item']} key={index}>
              <div className={styles['block__title']}>{field.title}</div>
              <div className={styles['block__quantity']}>
                <span
                  className={styles['block__quantity-button']}
                  onClick={() => field.setFunc(+field.func - 1)}
                >
                  -
                </span>
                <input
                  value={field.func}
                  className={styles['block__input']}
                  type='number'
                  onChange={e => field.setFunc(Number(e.target.value))}
                />
                <span
                  className={styles['block__quantity-button']}
                  data-quantity='+'
                  onClick={() => field.setFunc(+field.func + 1)}
                >
                  +
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles['result']}>
          <div className={styles['result__item']}>
            <span>result = </span>
            <div className={styles['result__value']}>{clampFunc}</div>
            <div
              className={styles['result__copy']}
              onClick={() => copyToClipboard(copyShow, clampFunc)}
            >
              <img src={Copy} alt='Copy' title='Copy' />
            </div>
            <span ref={copyShow} className={styles['result__copy-success']}>Copied ✔</span>
          </div>

          <div className={styles['result__item']}>
            <span>result width calc() = </span>
            <div className={styles['result__value']}>{clampCalcFunc}</div>
            <div
              className={styles['result__copy']}
              onClick={() => copyToClipboard(copyShow1, clampCalcFunc)}
            >
              <img src={Copy} alt='Copy' title='Copy' />
            </div>
            <span  ref={copyShow1} className={styles['result__copy-success']} data-copy-message>Copied ✔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClampFunction;
