import React from 'react';
import classnames from 'classnames/bind';
import styles from '../CSSModule.module.scss';

const cx = classnames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
      Hi, I'm <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
