import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const [primary, setPrimary] = useState(true)
  console.log(id);
  const getProductDetail = async () => {
    // let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/4OCUS/hnm2/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <ImgContainer>
            <Img src={product?.img} alt="" />
          </ImgContainer>
        </Col>
        <Col>
          {' '}
          <div>{product?.title}</div>
          <div>{product?.price}원</div>
          <div>
            <select name="" id="">
              {product?.size.map((size) => {
                return <option>{size}</option>;
              })}
            </select>
          </div>
          <div>
            {' '}
            <Button>Add</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

const Img = styled.img`
  width: 100%;
`;

const ImgContainer = styled.div`
  max-width: 500px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;
