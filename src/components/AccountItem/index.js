import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

// console.log(images);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image src={data.avatar} alt={data.first_name} className={cx('avatar')} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.first_name}</span>
          {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
