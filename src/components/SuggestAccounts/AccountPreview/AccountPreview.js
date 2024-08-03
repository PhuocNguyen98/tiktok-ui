import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image src={images.avatar} alt="Avatar" className={cx('avatar')} />
        <Button primary className={cx('follow-btn')}>
          Follow
        </Button>
      </div>
      <div className={cx('account-info')}>
        <p className={cx('nickname')}>
          nguyenhuuphuoc
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </p>
        <p className={cx('name')}>Nguyễn Hữu Phước</p>
      </div>
      <div className={cx('analytics')}>
        <span className={cx('value')}>8.2M&nbsp;</span>
        <span className={cx('text')}>Followers</span>
        <span className={cx('value')}>100.2M&nbsp;</span>
        <span className={cx('text')}>Likes</span>
      </div>
    </div>
  );
}

export default AccountPreview;
