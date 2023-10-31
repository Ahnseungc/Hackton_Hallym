"use client";

import {
  HopePlace,
  HopePlaceImage,
  HopePlaceName,
  ProductDetail,
  ProductdetailContainer,
  ProductImage,
  ProductName,
} from "./style";

type Props = {};

function Productdetail({}: Props) {
  return (
    <ProductdetailContainer>
      <ProductImage>이미지</ProductImage>

      <ProductName>Productname</ProductName>
      <ProductDetail>Productdetail</ProductDetail>
      <HopePlace>
        <HopePlaceName>HopePalceName</HopePlaceName>
        <HopePlaceImage>HopePlaceImage</HopePlaceImage>
      </HopePlace>
    </ProductdetailContainer>
  );
}

export default Productdetail;
