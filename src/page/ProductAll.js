import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, SetProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    try {
      let searchQuery = query.get('q') || '';
      console.log(searchQuery);
    //   let url = `http://localhost:5000/products?q=${searchQuery}`;
      let url = `https://my-json-server.typicode.com/4OCUS/hnm2/products?q=${searchQuery}`;
      let response = await fetch(url);
      console.log('res', response);
      let data = await response.json();
      console.log('data', data);
      SetProductList(data);
      console.log(productList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((menu) => (
          <Col lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
