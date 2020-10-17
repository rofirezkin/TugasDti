import { Pengalaman, Portofolio } from '../component';
import Homepage from '../scenes/homepage';

const routes = [
  {
    path: '/portofolio',
    component: Portofolio,
  },
  {
    path: '/pengalaman',
    component: Pengalaman,
  },
  {
    path: '/',
    component: Homepage,
  },
];
export default routes;
