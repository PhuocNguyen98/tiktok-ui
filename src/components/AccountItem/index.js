import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

// console.log(images);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img src={images.avatar} alt="Avatar" className={cx('avatar')} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
