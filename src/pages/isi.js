import React, { useState, useEffect } from 'react';
import { getProducts } from '../services';
import Cards from './cards';

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState([]);
  const [visible, setVisible] = useState(3);

  const [cari, setCari] = useState('');

  const getProduct = (namaProduct) => {
    getProducts
      .getProduct(namaProduct)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
        setDataProduct(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getProduct('Minyak');
  }, []);
  const showMoreItems = () => {
    setVisible((prevValue) => {
      return prevValue + 3;
    });
  };

  return (
    <div className="container ">
      {isLoading ? <p>loading...</p> : <h1>Data Product</h1>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getProduct(cari);
        }}
      >
        <label htmlFor="user">
          Cari :
          <input
            className="form-content"
            type="text"
            value={cari}
            onChange={(e) => {
              setCari(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Cari" />
      </form>
      <div className=" content p-5">
        {dataProduct.slice(0, visible).map((product) => {
          return (
            <Cards key={[product.id]}>
              <div className="kotak">
                <h3 className="product">{product.description}</h3>
                <div>
                  <div className="discount">
                    <p>{product.display_promo_price_percentage}</p>
                  </div>
                  <h4>{product.display_normal_price}</h4>
                </div>
                <h5>{product.display_price}</h5>
                <p>{product.name}</p>
              </div>
            </Cards>
          );
        })}
      </div>
      <input
        className="tombol"
        type="button"
        onClick={showMoreItems}
        value="LOAD MORE"
      />
    </div>
  );
};

export default Product;
