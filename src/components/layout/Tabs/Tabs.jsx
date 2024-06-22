import { useState } from 'react';
import { EXAMPLES } from './data.js';
import TabButton from './TabButton.jsx';
import './Tabs.css';

function Tabs() {
  const [isSelect, setSelectedTopic] = useState('components');

  function setSelectButton(selectLabel) {
    setSelectedTopic(selectLabel);
  }

  return (
    <div className='tabs'>
        <div className="container">
      <div className='tabs__buttons'>
        <TabButton
          isSelected={isSelect === 'components' ? true : false}
          onSelect={() => setSelectButton('components')}
        >
          components
        </TabButton>
        <TabButton
          isSelected={isSelect === 'jsx' ? true : false}
          onSelect={() => setSelectButton('jsx')}
        >
          jsx
        </TabButton>
        <TabButton
          isSelected={isSelect === 'props' ? true : false}
          onSelect={() => setSelectButton('props')}
        >
          props
        </TabButton>
        <TabButton
          isSelected={isSelect === 'state' ? true : false}
          onSelect={() => setSelectButton('state')}
        >
          state
        </TabButton>
      </div>
      <div className='tabs__content'>
        <h2 className='tabs__content__title'>{EXAMPLES[isSelect].title}</h2>
        <span className='tabs__content__title__descr'>
          {EXAMPLES[isSelect].description}
        </span>
        <pre className='tabs__content__title__code'>
          <code>{EXAMPLES[isSelect].code}</code>
        </pre>
      </div>
      </div>
    </div>
  );
}

export default Tabs;
