import styled from "@emotion/styled";

export const ProductdetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const ProductImage = styled.div`
  height: 30vh;
  border-radius: 10px;

  & img {
    object-fit: cover;
  }
`;
export const ProductName = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  color: #171717;

  /* text-2xl/leading-8/font-bold */
  font-family: Pretendard Variable;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  padding-bottom: 5px;
`;

export const HopePlaceTitle = styled.div`

  font-size: 13px;
  font-weight: bold;
  color: #171717;

  /* text-2xl/leading-8/font-bold */
  font-family: Pretendard Variable;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;

export const ProductPrice = styled.div`
  width: 100%;
  font-size: 10px;
`;

export const ProductDetail = styled.div`
  width: 100%;
  color: #6B7280;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const HopePlace = styled.div`
  width: 100%
`;
export const HopePlaceName = styled.span`
  color: #171717;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding-right: 5px;
`;
export const HopePlaceDescription = styled.span`
  color: #6B7280;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
export const HopePlaceImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
