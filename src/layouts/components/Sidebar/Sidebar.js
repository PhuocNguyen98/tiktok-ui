import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

import {
  HomeIcon,
  HomeActiveIcon,
  CompassIcon,
  CompassActiveIcon,
  UserFollowIcon,
  UserFollowActiveIcon,
  UserGruopIcon,
  UserGruopActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Menu>
          <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
          <MenuItem
            title="Explore"
            to={config.routes.explore}
            icon={<CompassIcon />}
            iconActive={<CompassActiveIcon />}
          />
          <MenuItem
            title="Following"
            to={config.routes.following}
            icon={<UserFollowIcon />}
            iconActive={<UserFollowActiveIcon />}
          />
          <MenuItem
            title="Friends"
            to={config.routes.friends}
            icon={<UserGruopIcon />}
            iconActive={<UserGruopActiveIcon />}
          />
          <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
        </Menu>
      </div>
    </aside>
  );
}

export default Sidebar;
