import styled from "@emotion/styled";

export const ProductdetailContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const ProductImage = styled.div`
  width: 100vw;
  height: 30vh;
  border-radius: 10px;

  & img {
    object-fit: fill;
  }
`;
export const ProductName = styled.div`
  width: 100vw;
  height: 5vh;
`;
export const ProductDetail = styled.div`
  width: 100vw;
  height: 30vh;
`;

export const HopePlace = styled.div`
  width: 100vw;
`;
export const HopePlaceName = styled.div`
  width: 100vw;
`;
export const HopePlaceImage = styled.div`
  width: 100vw;
  height: 20vh;
  border: 1px solid black;
  border-radius: 10px;
`;
