import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  leftIcon,
  rightIcon,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  small = false,
  large = false,
  disable = false,
  className,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  let props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  // Remove event listener when button is disable
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  const classes = cx('wrapper', { [className]: className, primary, outline, text, rounded, small, large, disable });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  disable: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
