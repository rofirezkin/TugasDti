import React, { useState, useEffect } from 'react';
import { productSearch } from '../services';
import Cards from './profileId';

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState([]);

  const [cari, setCari] = useState('');

  const getProduct = (namaProduct) => {
    productSearch
      .getProductSearch(namaProduct)
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

  return (
    <div className="container">
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
      <div className="content">
        {dataProduct.map((product) => {
          return (
            <Cards key={[product.id]}>
              <div className="kotak p-4">
                <h3 className="product">{product.description}</h3>
                <div>
                  <p>{product.display_normal_price}</p>
                  <div className="discount">
                    <p>
                      diskon :
                      {product.display_promo_price_percentage}
                    </p>
                  </div>
                </div>
                <h5 className="text-danger">{product.display_price}</h5>
                <p>{product.name}</p>
              </div>
            </Cards>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
