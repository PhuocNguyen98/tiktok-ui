import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback: customFallBack = images.noImage, ...props }, ref) => {
  const classes = cx('wrapper', className);

  const [fallback, setFallBack] = useState('');
  const handleError = () => {
    setFallBack(customFallBack);
  };

  return <img ref={ref} src={fallback || src} alt={alt} className={classes} {...props} onError={handleError} />;
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
