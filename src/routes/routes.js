// Config Routes
import config from '~/config';

// layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Explore from '~/pages/Explore';
import Friends from '~/pages/Friends';
import Live from '~/pages/Live';

// Những routes chỉ khi đăng nhập mới vào được
const privateRoutes = [];

// Những routes không cần đăng nhập
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.explore, component: Explore },
  { path: config.routes.friends, component: Friends },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];

export { privateRoutes, publicRoutes };
