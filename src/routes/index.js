// Config Routes
import configRoutes from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Những routes chỉ khi đăng nhập mới vào được
const privateRoutes = [];

// Những routes không cần đăng nhập
const publicRoutes = [
  { path: configRoutes.home, component: Home },
  { path: configRoutes.following, component: Following },
  { path: configRoutes.profile, component: Profile },
  { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
  { path: configRoutes.search, component: Search, layout: null },
];

export { privateRoutes, publicRoutes };
