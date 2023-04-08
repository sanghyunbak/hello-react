import styles from './styles/CSSModule.module.css';

import React from 'react';

const MyComponent = () => {
  return (
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        hello! I'm <span className={"something"}>CSS Module</span>
      </div>
  );
};

export default MyComponent;
