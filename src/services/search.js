import BaseService from './baseService';
import API from '../config/rest';

const getProductSearch = (username) => {
  return BaseService.get(API.PRODUCTSEARCH, { username });
};
export default { getProductSearch };
