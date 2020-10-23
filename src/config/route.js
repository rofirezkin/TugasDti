import { Referensi, Portofolio, Homepage } from '../scenes';

const routes = [
  {
    path: '/portofolio',
    component: Portofolio,
  },
  {
    path: '/Referensi Pemograman',
    component: Referensi,
  },
  {
    path: '/',
    component: Homepage,
  },
];
export default routes;
