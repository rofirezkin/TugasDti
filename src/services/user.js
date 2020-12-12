import BaseService from './baseService';
import API from '../config/rest';

const getProduct = (username) => {
  return BaseService.get(API.PRODUCT, { username });
};
export default { getProduct };
