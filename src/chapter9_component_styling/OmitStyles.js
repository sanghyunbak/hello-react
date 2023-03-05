import React from 'react';
import styles from './styles/CSSModule.module.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);
const MyComponent = () => {
  return (
      <div className={cx('wrapper', 'inverted')}>
        Hello I'm <span className={"something"}>CSS Module!</span>
      </div>
  );
};

export default MyComponent;
