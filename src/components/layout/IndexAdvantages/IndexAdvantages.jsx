import React from 'react';
import IndexAdvantageItem from './IndexAdvantageItem';
import { INDEX_ADVANTAGES } from './advantageData.js';
import './IndexAdvantages.css';

const IndexAdvantages = () => {
  console.log(INDEX_ADVANTAGES)
  return (
    <div className='advantages'>
      <div className="container">
        <div className="advantages__list">
            {INDEX_ADVANTAGES.map(advategItem => <IndexAdvantageItem key={advategItem.title} {...advategItem} />)}
        </div>
      </div>
    </div>
  );
};

export default IndexAdvantages;
