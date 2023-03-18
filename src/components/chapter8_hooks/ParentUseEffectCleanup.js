import React, {useState} from 'react';
import UseEffectCleanUp from './UseEffectCleanUp';

const ParentUseEffectCleanUp = () => {
  const [visible, setVisible] = useState(false);
  return (
      <div>
        <button
            onClick={() => {
              setVisible(!visible);
            }}>
          {visible ? 'hide': 'show'}
        </button>
        <hr />
        {visible && <UseEffectCleanUp />}
      </div>
  );
};

export default ParentUseEffectCleanUp;
