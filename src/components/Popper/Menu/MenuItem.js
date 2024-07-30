import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, className, onClick }) {
  return (
    <Button to={data.to} leftIcon={data.icon} className={cx('menu-item')} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
