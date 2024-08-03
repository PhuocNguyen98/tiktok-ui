import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';

import styles from './SuggestAccounts.module.scss';
import Image from '~/components/Image';
import images from '~/assets/img';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const handlePreview = (attrs) => {
    return (
      <div tabIndex="-1" {...attrs}>
        <PopperWrapper className={cx('menu-popper')}>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <TippyHeadless interactive placement="bottom" offset={[-30, 0]} delay={[500, 0]} render={handlePreview}>
        <div className={cx('account-item')}>
          <Image src={images.avatar} alt="Avatar" className={cx('avatar')} />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              nguyenhuuphuoc
              <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
            </p>
            <p className={cx('name')}>Nguyễn Hữu Phước</p>
          </div>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default AccountItem;
