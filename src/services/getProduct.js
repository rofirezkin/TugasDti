import BaseService from './baseService';
import API from '../config/rest';

const getProduct = (namaProduct) => {
  return BaseService.get(API.PRODUCTSEARCH, {
    params: {
      limit: 10,
      offset: 0,
      search: namaProduct,
    },
  });
};

const getProductById = (username) => {
  return BaseService.get(API.PRODUCT, { username });
};

export default { getProduct, getProductById };
