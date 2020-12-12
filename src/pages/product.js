import React, { useEffect, useState } from 'react';
import { userService, productSearch } from '../services';

import { kinderjoy } from '../assets';

const Product = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [kategori, setKategori] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [normalPrice, setNormalPrice] = useState('');
  const [promo, setPromo] = useState('');
  const [persen, setPersen] = useState('');

  const [userDataLoading, setUserDataLoading] = useState(false);

  useEffect(() => {
    setUserDataLoading(true);
    userService
      .getProduct()
      .then((res) => {
        console.log('daata', res);
        setBrand(res.data.brand.name);
        setName(res.data.name);
        setKategori(res.data.categories);
        setDeskripsi(res.data.description);
        setNormalPrice(res.data.display_normal_price);
        setPromo(res.data.display_price);
        setPersen(res.data.display_promo_price_percentage);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, []);

  useEffect(() => {
    setUserDataLoading(true);
    productSearch
      .getProductSearch()
      .then((res) => {
        console.log('daata', res);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, []);

  useEffect(() => {
    setUserDataLoading(true);
    userService
      .getProduct()
      .then((res) => {
        console.log('daata', res);
        setBrand(res.data.brand.name);
        setName(res.data.name);
        setKategori(res.data.categories);
        setDeskripsi(res.data.description);
        setNormalPrice(res.data.display_normal_price);
        setPromo(res.data.display_price);
        setPersen(res.data.display_promo_price_percentage);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, []);

  return (
    <div>
      <h1> Cek Product</h1>
      {userDataLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-sm-6">
              <h3 className="text-center">{`Brand : ${brand}`}</h3>
              <img
                className="pageHome-img2"
                alt="background2"
                src={kinderjoy}
              />
              <h3 className="text-center">{name}</h3>
              <h6 className="text-center">{`Kategori : ${kategori}`}</h6>
              <h5 className="text-center">{`Deskripsi : ${deskripsi}`}</h5>

              <h5 className="text-center">{`harga Normal : ${normalPrice} dan dapat potongan harga ${persen} `}</h5>
              <h3 className="text-center">{`Harga Promo : ${promo}`}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Product;
