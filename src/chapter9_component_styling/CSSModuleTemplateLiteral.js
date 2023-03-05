import styles from './styles/CSSModule.module.css';

import React from 'react';

const MyComponent = () => {
  return (
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        hello! I'm <sapn className={"something"}>CSS Module</sapn>
      </div>
  );
};

export default MyComponent;
