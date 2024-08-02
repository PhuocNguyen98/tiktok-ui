import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);
const defaultFnc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFnc }) {
  const [menu, setMenu] = useState([{ data: items }]);
  const currentMenu = menu[menu.length - 1];

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children; // Convert sang Boolean
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setMenu((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      offset={[14, 10]}
      delay={(0, 200)}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {menu.length > 1 && (
              <Header
                title={currentMenu.title}
                onBack={() => {
                  setMenu((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setMenu((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
