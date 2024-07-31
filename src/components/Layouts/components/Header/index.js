import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faEllipsisVertical,
  faGlobe,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/img';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, InboxIcon, MessageIcon, SearchIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcut',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@nguyenvana',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  useEffect(() => {}, [searchResult]);

  // Xử lý logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />

        <TippyHeadless
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Tìm kiếm" spellCheck="false" />

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <SearchIcon className={cx('fill')} />
            </button>
          </div>
        </TippyHeadless>

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" delay={[0, 100]}>
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy content="Tin nhắn" delay={[0, 100]}>
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy content="Hộp thư" delay={[0, 100]}>
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <sup className={cx('badge')}>36</sup>
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary>Log in</Button>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image src={images.avatar} alt="Avatar" className={cx('user-avarta')} />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
