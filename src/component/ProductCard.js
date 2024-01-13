import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = ({ item }) => {
  const navi = useNavigate();
  const showDetail = () => {
    navi(`/product/${item.id}`);
  };
  return (
    <>
      <div onClick={showDetail}>
        <Img src={item?.img} alt="" />
      </div>
      <div>{item?.choice ? 'Conscious choice' : ''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
    </>
  );
};

export default ProductCard;

const Img = styled.img`
  width: 100%;
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
  }
`;
