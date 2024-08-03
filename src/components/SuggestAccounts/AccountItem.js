import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestAccounts.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img src={images.avatar} alt="Avatar" className={cx('avatar')} />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          nguyenhuuphuoc
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </p>
        <p className={cx('name')}>Nguyễn Hữu Phước</p>
      </div>
    </div>
  );
}

export default AccountItem;
