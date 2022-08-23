import SigninPage from 'views/signin';
import Home from 'views';
import Page404 from 'views/page404';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/signin',
    exact: true,
    component: SigninPage,
  },
  {
    path: '/*',
    exact: true,
    component: Page404,
  },
];

export default routes;
