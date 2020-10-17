import { Referensi, Portofolio } from '../component';
import Homepage from '../scenes/homepage';

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
